library(ggplot2)
library(gridExtra)
library(binom)
a <- read.table("/Users/Larry/Code/pragmods/LarryData/pragmods_c1_full_exper_oldstim.txt",sep="\t", header=TRUE)
threeWay=a[a$Answer.scale_and_levels_condition == "9",]
twoWaySingle=a[a$Answer.scale_and_levels_condition == "11",]
twoWayDouble=a[a$Answer.scale_and_levels_condition == "10",]

colnames(threeWay)
levels(a$Answer.choice)
levels(a$Answer.choice) <- c("AA", "A", "AB")
new.dat <- subset(a, Answer.choice == "\"One_feature\"")
a["Answer.choice"]

a[["Answer.linguistic_framing_condition"]]<- factor(a[["Answer.linguistic_framing_condition"]])
levels(a$Answer.linguistic_framing_condition) <- c("Determinerless", "Definite", "Prior")

qplot(Answer.choice, data=threeWay)

qplot(Answer.choice, data=a[a$Answer.scale_and_levels_condition == "9",])
qplot(Answer.choice, data=threeWay[threeWay$Answer.linguistic_framing == "1",])

test = ggplot(a, aes(x=Answer.choice))+geom_bar()
test + facet_grid(Answer.linguistic_framing_condition ~ Answer.scale_and_levels_condition) + theme_bw()

ggplot(transform(a, Answer.scale_and_levels_condition = c("A v. AA v. AB", "AA v. AB", "A v. AB")[as.factor(Answer.scale_and_levels_condition)]), aes(x=Answer.choice)) + geom_bar() + facet_grid(Answer.linguistic_framing_condition ~ Answer.scale_and_levels_condition) + theme_bw()

a.houses=a[a$Answer.item == "\"house\"",]
a.lunchboxes=a[a$Answer.item == "\"lunchbox\"",]
a.plates=a[a$Answer.item == "\"plate\"",]

ggplot(transform(a.houses, Answer.scale_and_levels_condition = c("A v. AA v. AB", "AA v. AB", "A v. AB")[as.factor(Answer.scale_and_levels_condition)]), aes(x=Answer.choice)) + geom_bar() + facet_grid(Answer.linguistic_framing_condition ~ Answer.scale_and_levels_condition) + theme_bw()
ggplot(transform(a.lunchboxes, Answer.scale_and_levels_condition = c("A v. AA v. AB", "AA v. AB", "A v. AB")[as.factor(Answer.scale_and_levels_condition)]), aes(x=Answer.choice)) + geom_bar() + facet_grid(Answer.linguistic_framing_condition ~ Answer.scale_and_levels_condition) + theme_bw()
ggplot(transform(a.plates, Answer.scale_and_levels_condition = c("A v. AA v. AB", "AA v. AB", "A v. AB")[as.factor(Answer.scale_and_levels_condition)]), aes(x=Answer.choice)) + geom_bar() + facet_grid(Answer.linguistic_framing_condition ~ Answer.scale_and_levels_condition) + theme_bw()


# geom_errorbar(aes(ymin = lower, ymax = upper))

tmp <- ddply(a, c("Answer.scale_and_levels_condition","Answer.linguistic_framing_condition","Answer.choice"), summarize, counts.choice = length(Answer.choice))
tmp1 <- ddply(tmp, c("Answer.linguistic_framing_condition", "Answer.scale_and_levels_condition"), transform, num.trials = sum(counts.choice))
tmp2 <- ddply(tmp1, c("Answer.linguistic_framing_condition","Answer.scale_and_levels_condition","Answer.choice"),transform, lower = binom.confint(counts.choice, num.trials, method = "exact")$lower, upper = binom.confint(counts.choice, num.trials, method="exact")$upper)

a.final <- tmp2
a.final <- ddply(a.final, c("Answer.scale_and_levels_condition","Answer.linguistic_framing_condition","Answer.choice"), transform, prop.choice = counts.choice/num.trials)
ggplot(transform(a.final, Answer.scale_and_levels_condition = c("A v. AA v. AB", "AA v. AB", "A v. AB")[as.factor(Answer.scale_and_levels_condition)]), aes(x=Answer.choice, y = prop.choice)) + geom_bar(stat="identity") + facet_grid(Answer.linguistic_framing_condition ~ Answer.scale_and_levels_condition) + theme_bw() + geom_errorbar(aes(ymin = lower, ymax = upper), width=0.2)





a$scene <- factor(c("AvAAvAB","AAvAB","AvAB")[a$Answer.scale_and_levels_condition-8])
a2 <- droplevels(subset(a,scene != "AvAAvAB" & Answer.linguistic_framing_condition != "Prior")) # grab 2x2 sub-part of expt
a2$prompt <- factor(a2$Answer.linguistic_framing_condition)
a2$Scene <- ifelse(a2$scene=="AAvAB",1,-1)
a2$Prompt <- ifelse(a2$prompt=="Determinerless",1,-1)
contrasts(a2$scene) <- contr.sum(2)
contrasts(a2$prompt) <- contr.sum(2)
with(a2,xtabs(~Answer.choice + paste(scene,Answer.linguistic_framing_condition))) # simple data visualization
summary(glm(Answer.choice=="AB" ~ scene*prompt,data=a2,family="binomial"))

## mixed-effects: item specific sensitivity
summary(m <- glmer(Answer.choice=="AB" ~ scene*prompt + (Scene:Prompt | Answer.item),data=a2,family="binomial"))

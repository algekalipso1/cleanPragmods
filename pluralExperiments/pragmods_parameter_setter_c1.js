// ---------------- 2. STIMULUS SETUP ------------------
// Condition - call the maker getter to get the cond variable 
// Parameters and Stimulus Setup 


// Defining the state-space of relevant experiments for PHASE 0: Methodological questions.

// Participant response type:
//      0 -> NAFC: N alternative forced Choice. In this case N == 3.
//      1 -> Betting: Splitting $100 among three choices (must include validation check)
//      2 -> Likert scale (1 - 7): “how likely is this to be his friend?” 1 = very unlikely, 7 = very likely
//var participant_response_type = random(0,2);
var participant_response_type = 0;

// Participant check trials:
//      0 -> The count of each feature is not asked for
//      1 -> The count of two features are requested
//      2 -> The count of 3 features are requested
var participant_feature_count = 1;

// Linguistic framing
//      0 -> "My favorite friend has a hat"
//      1 -> "Bob can only say one word to communicate which X he likes and he says: Hat"
//      2 -> "My least favorite friend has a hat"  - from 2 onwards we try different words to measure the effect of different semantics
//      3 -> "The most beautiful X has a hat"
//      4 -> "The most ugly X has a hat"
//      5 -> "The most cheerful x has a y"
//      6 -> "The most depressing X has y"
//      7 -> Silent favorite: Click below on the option that represents the X that you think is Bob's favorite X.
//      8 -> Silent least favorite: Click below on the option that represents the friend that you think is Bob's least favorite.
//      9 -> (Odd one out) Non-linguistic: Bob points to a patch of cloth the same color as the hats. (odd one out is either 9 or 10)
//      10 -> (Odd one out) Linguistic: Bob says "hat" (odd one out is either 9 or 10)
//      11 -> tricky guy
//      12 -> Pure randomness condition: You ask a concrete randomness question so that Liker, betting and forced choice can be mapped onto actual estimated probabilities  
//      13 -> "My friend has a hat" this is to establish baserates
//      14 -> "The face has a hat" this is to remove the connotation that "friend" has
//      15 -> "I like the friend with the hat" (otherwise this is just like 2)
//      16 -> This is the prior condition for the context coordiantion experiment
var to_choose_from = [1, 15];
var linguistic_framing = choose_from(to_choose_from);
//var linguistic_framing = random(9, 10);
//var linguistic_framing = 16;

//Determiner. If the lingusitic framing uses the prop_words (usually if it uses a determiner), then choose the indefinite or the definite (sometimes the definite case has no determiner).
//      1 -> definite
//      2 -> indefinite
var determiner = 2;

// Question Type (This will be a controlled experiment with an equal proportion for each base rate).
//      0 -> Listener inference judgement
//      1 -> Couldn't hear: “He said ‘My friend has mumblemumble.’ (you didn’t hear what he said)”
//      2 -> Pure base rate: "Which one is his friend?" or "Which friend is Bob's favorite?"
//      3 -> "Bob can only use one word to tell you what boat he will sail next and he says: "mumblemumble" (you couldn't hear what he said)" # To Implement
//      4 -> "Which boat will Bob sail next?"
//var question_type = 0;
var question_type = 0;

// Question sequence 
//      0 -> Default: One target trial -> probably already done
//      1 -> 6 trials with same inference question
//      2 -> 6 trials, 3 inference, 3 where target is Logical target, unambiguous feature 
//      3 -> Default: One distractor trial  -> probably not necesary
//      4 -> 6 Target Trials
//      5 -> 6 Trials in the order FTFTFT (T=”target trial” F=”filler trial”)
//      6 -> 6 Trials in the order TFTFTF (T=”target trial” F=”filler trial”)
var target_filler_sequence = 0;


// Familiarization Status (whether we have the base rate slide)
//      0 -> We don't have a familiarization stage
//      1 -> We do have a familiarization stage
var familiarization_status = 0;

// The stimulus kind. When it is hardcoded as 1 we get the happy face stimulus.
//    0 -> "boat"
//    1 -> "friend"
//    2 -> "pizza"
//    3 -> "snowman"
//    4 -> "sundae"
//    5 -> "Christmas tree"

// The Scale and Levels.
//    0 -> scales [[0, 0, 0], [0, 0, 1], [0, 1, 1]], level 0
//    1 -> scales [[0, 0, 0], [0, 0, 1], [0, 1, 1]], level 1 // This one is the classic
//    2 -> scales+ [[0, 0, 1], [0, 1, 1], [1, 1, 0]], level 0
//    3 -> scales+ [[0, 0, 1], [0, 1, 1], [1, 1, 0]], level 1
//    4 -> scales+ [[0, 0, 1], [0, 1, 1], [1, 1, 0]], level 2
//    5 -> scaleweird [[0, 1, 1], [1, 0, 1], [1, 0, 1]] level 0
//    6 -> scaleweird [[0, 1, 1], [1, 0, 1], [1, 0, 1]], level 1
//    7 -> scaleweird [[0, 1, 1], [1, 0, 1], [1, 0, 1]], level 2
//    8 -> odd one out [[0, 1, 1], [1, 0 , 1], [1, 1, 0]]
//    9 -> Context Coordination 3-way a vs. aa vs. ab
//    10-> Context Coordination 2-way aa vs. ab [deleted from this version]
//    11-> Context Coordination 2-way a vs. ab
//    12-> Context coordination 2-way aaa vs. ab
//    13-> Context coordination 2-way aaaa vs. ab
//    14-> Context coordination 2-way aaaaa vs. ab

var to_choose_from = [13, 14];
var scale_and_level = choose_from(to_choose_from);
//var scale_and_level = 9;

// Elaborate on the purpose of this. Which image is being changed
var img_size = 200; // needs to be implemented, currently just a placeholder   

// Prior familiarization condition
//var cond = 1;
var cond = random(1,4);


// the X for imageX/ in file  - default is 2, but some things can change it.
var file_number_to_use_for_referents = '3';


// Select color salience. 
// For reference, in the scales level 1 condition, choice_names_unpermuted[0] is foil, [1] is logical, [2] is target.
//      0 -> Standard: All of the elements are in color
//      1 -> choice_names_unpermuted[1] and [2] are greyscale. [0] is colored.
//      2 -> choice_names_unpermuted[2] and [0] are greyscale, [1] is colored. 
//      3 -> choice_names_unpermuted[0] and [1] are grayscale, [2] is colored.
var grayscale_referent = 0;



// question_order_permutations
var permutation_of_questions =  shuffle(range(0,2));

// 
//var 
// I'm still working on figuring out how exactly this part works,
// but Michael explained that "var condCounts = "1,75;2,75;3,75;4,75""
// is meant to cycle through four conditions (as of yet I don't get)
// which conditions these are supposed to be. 
// http://langcog.stanford.edu/cgi-bin/subject_equalizer/maker_getter.php?conds=1,75;2,75;3,75;4,75&filename=MCF_pragmods_v6
/*
try {
    var filename = "MCF_pragmods_v6"
    var condCounts = "1,75;2,75;3,75;4,75"
    var xmlHttp = null;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://langcog.stanford.edu/cgi-bin/subject_equalizer/maker_getter.php?conds=" + 
		  condCounts +"&filename=" + filename, false );
    xmlHttp.send( null );
    var cond = xmlHttp.responseText;
} catch (e) {
    var cond = 1;
}

*/

// Fixing the logic of parameters to enforce sensible permutations

if (linguistic_framing == 9 || linguistic_framing == 10) {
    scale_and_level = 8;
    participant_feature_count = 2;
}
if (linguistic_framing != 9 && linguistic_framing != 10) {
    file_number_to_use_for_referents = '3';
}





// CROSS CONDITIONS
// familiarization conditions. 
//    0 -> Foil, it has neither feature
//    1 -> Target, with the only feature that matters
//    2 -> Logical/distractor, with the two features including the distractor
var fam_dists = [[0, 1, 2, 2, 2, 2, 2, 2, 2],
        [0, 1, 1, 1, 2, 2, 2, 2, 2],
        [0, 1, 1, 1, 1, 1, 2, 2, 2],
        [0, 1, 1, 1, 1, 1, 1, 1, 2]]; 
var target_frequencies = [0.11, 0.33, 0.556, 0.778]; // just counting the proportion of 1s in that matrix, for book keeping and and labeling
// matrix size, usually 9
var instances_in_familiarization = fam_dists[0].length
// matrix size, usually 4
var num_fam_conds = fam_dists.length


// var word_cond = "baserate";  // The type of experiment that is being conducted
var fam_cond = cond - 1; // php is 1 indexed



var fam_dist = fam_dists[fam_cond];

// bookkeeping variables
// All of these are used in the control flow (think about how to organize this)
var choices = [0, 1, 2]; 
var target = -2; // possibly vestigial
var fam_clicked = new Array();   
var fam_finished; // familiarization finished, boolean vareable -- issues with conceptual grouping (think about it)
var positions = ["left","middle","right"];

// ADAPTED FROM PRAGMODS R CODE
var choice_names_unpermuted = ["foil","target","logical"];

// level 3 - what you need to change to change the matrix condition
/*
var expt = [[1, 0, 0], [1, 1, 0], [0, 1, 1]]; // NO SCALES
var level = 2;
var target_unpermuted = 1;
var distractor_unpermuted = 2;
var other_unpermuted = 0;
var target_prop_unpermuted = 1;
var distractor_prop_unpermuted = 0;
*/

// level 1 condition
// m3/r2 and level 1 by default. Then if that is not the case then it is possible to change the variable values

var expt = [[0, 0, 0], [0, 0, 1], [0, 1, 1]]; // SCALES
var level = 1;
var target_unpermuted = 1;
var distractor_unpermuted = 2;
var other_unpermuted = 0;
var target_prop_unpermuted = 2;
var distractor_prop_unpermuted = 1;

if (scale_and_level > 1 && scale_and_level <= 4) {
    expt = [[0, 0, 1], [0, 1, 1], [1, 1, 0]];
}

if (scale_and_level > 4 && scale_and_level <= 7) {
    expt = [[0, 1, 1], [1, 0, 1], [1, 0, 1]];
}

// Odd one out scale_and_level = 8
if (scale_and_level == 8) {
    expt = [[0, 1, 1], [1, 0 , 1], [1, 1, 0]];
}
if (scale_and_level == 9) {
    //The three-way context coordination condition
    //Randomly choose between:
    var possibleExpt=[];
    possibleExpt[0] = [[1,1,0,0],[1,0,0,0],[1,0,0,1]];
    possibleExpt[1] = [[0,0,1,1],[0,0,1,0],[1,0,0,1]];
    possibleExpt[2] = [[1,1,0,0],[0,1,0,0],[0,1,1,0]];
    possibleExpt[3] = [[0,0,1,1],[0,0,0,1],[0,1,1,0]];

    permutation = random(0,3);
    expt=possibleExpt[permutation];
    
    //Setting this earlier for clarity w.r.t. the randomization
    //This enables unpermuted bevavior even though permutation is introduced earlier
    var level = 0;
    var target_unpermuted = 0;//The target is the doubled object
    var distractor_unpermuted = 2;//The distractor is the two feature object
    var other_unpermuted = 1;//The other is the one feature object
    var target_prop_unpermuted = [0,3,0,3];
    target_prop_unpermuted = target_prop_unpermuted[permutation];
    var distractor_prop_unpermuted = [3,0,3,0];
    distractor_prop_unpermuted = distractor_prop_unpermuted[permutation];
    var foil_prop_unpermuted = 0;//Not sure what this does
    var choice_names_unpermuted = ["Doubled_feature","One_feature","Two_features"];//Not sure what this does
}

if (scale_and_level == 12) {
    //The context coordination condition
    //Randomly choose between:
    var possibleExpt=[];
    possibleExpt[0] = [[1,1,1,0,0,0],[1,0,0,0,1,0]];
    possibleExpt[1] = [[1,1,1,0,0,0],[1,0,0,0,0,1]];
    possibleExpt[2] = [[1,1,1,0,0,0],[0,1,0,1,0,0]];
    possibleExpt[3] = [[1,1,1,0,0,0],[0,1,0,0,0,1]];
    possibleExpt[4] = [[1,1,1,0,0,0],[0,0,1,1,0,0]];
    possibleExpt[5] = [[1,1,1,0,0,0],[0,0,1,0,1,0]];
    possibleExpt[6] = [[0,0,0,1,1,1],[1,0,0,0,1,0]];
    possibleExpt[7] = [[0,0,0,1,1,1],[1,0,0,0,0,1]];
    possibleExpt[8] = [[0,0,0,1,1,1],[0,1,0,1,0,0]];
    possibleExpt[9] = [[0,0,0,1,1,1],[0,1,0,0,0,1]];
    possibleExpt[10]= [[0,0,0,1,1,1],[0,0,1,1,0,0]];
    possibleExpt[11]= [[0,0,0,1,1,1],[0,0,1,0,1,0]];


    permutation = random(0,11);
    expt=possibleExpt[permutation];
    
    //Setting this earlier for clarity w.r.t. the randomization
    //This enables unpermuted bevavior even though permutation is introduced earlier
    var level = 0;
    var target_unpermuted = 0;//The target is the doubled object
    var distractor_unpermuted = 1;//The distractor is the two feature object
    //var other_unpermuted = 2;//The other is the one feature object
    var target_prop_unpermuted = [0,0,0,0,0,0,4,4,4,4,4,4];
    target_prop_unpermuted = target_prop_unpermuted[permutation];
    var distractor_prop_unpermuted = [4,4,4,4,4,4,0,0,0,0,0,0];
    distractor_prop_unpermuted = distractor_prop_unpermuted[permutation];
    var foil_prop_unpermuted = 0;//Not sure what this does
    var choice_names_unpermuted = ["Tripled_feature","Two_features"];//Not sure what this does
    
}

if (scale_and_level == 13) {
    //The context coordination condition
    //Randomly choose between:
    var possibleExpt=[];
    possibleExpt[0]  = [[1,1,1,1,0,0,0,0],[1,0,0,0,0,1,0,0]];
    possibleExpt[1]  = [[1,1,1,1,0,0,0,0],[1,0,0,0,0,0,1,0]];
    possibleExpt[2]  = [[1,1,1,1,0,0,0,0],[1,0,0,0,0,0,0,1]];
    possibleExpt[3]  = [[1,1,1,1,0,0,0,0],[0,1,0,0,1,0,0,0]];
    possibleExpt[4]  = [[1,1,1,1,0,0,0,0],[0,1,0,0,0,0,1,0]];
    possibleExpt[5]  = [[1,1,1,1,0,0,0,0],[0,1,0,0,0,0,0,1]];
    possibleExpt[6]  = [[1,1,1,1,0,0,0,0],[0,0,1,0,0,1,0,0]];
    possibleExpt[7]  = [[1,1,1,1,0,0,0,0],[0,0,1,0,1,0,0,0]];
    possibleExpt[8]  = [[1,1,1,1,0,0,0,0],[0,0,1,0,0,0,0,1]];
    possibleExpt[9]  = [[1,1,1,1,0,0,0,0],[0,0,0,1,0,1,0,0]];
    possibleExpt[10] = [[1,1,1,1,0,0,0,0],[0,0,0,1,0,0,1,0]];
    possibleExpt[11] = [[1,1,1,1,0,0,0,0],[0,0,0,1,1,0,0,0]];
    possibleExpt[12] = [[0,0,0,0,1,1,1,1],[1,0,0,0,0,1,0,0]];
    possibleExpt[13] = [[0,0,0,0,1,1,1,1],[1,0,0,0,0,0,1,0]];
    possibleExpt[14] = [[0,0,0,0,1,1,1,1],[1,0,0,0,0,0,0,1]];
    possibleExpt[15] = [[0,0,0,0,1,1,1,1],[0,1,0,0,1,0,0,0]];
    possibleExpt[16] = [[0,0,0,0,1,1,1,1],[0,1,0,0,0,0,1,0]];
    possibleExpt[17] = [[0,0,0,0,1,1,1,1],[0,1,0,0,0,0,0,1]];
    possibleExpt[18] = [[0,0,0,0,1,1,1,1],[0,0,1,0,0,1,0,0]];
    possibleExpt[19] = [[0,0,0,0,1,1,1,1],[0,0,1,0,1,0,0,0]];
    possibleExpt[20] = [[0,0,0,0,1,1,1,1],[0,0,1,0,0,0,0,1]];
    possibleExpt[21] = [[0,0,0,0,1,1,1,1],[0,0,0,1,0,1,0,0]];
    possibleExpt[22] = [[0,0,0,0,1,1,1,1],[0,0,0,1,0,0,1,0]];
    possibleExpt[23] = [[0,0,0,0,1,1,1,1],[0,0,0,1,1,0,0,0]];

    permutation = random(0,23);
    expt=possibleExpt[permutation];
    
    //Setting this earlier for clarity w.r.t. the randomization
    //This enables unpermuted bevavior even though permutation is introduced earlier
    var level = 0;
    var target_unpermuted = 0;//The target is the doubled object
    var distractor_unpermuted = 1;//The distractor is the two feature object
    //var other_unpermuted = 2;//The other is the one feature object
    var target_prop_unpermuted = [0,0,0,0,0,0,0,0,0,0,0,0,5,5,5,5,5,5,5,5,5,5,5,5];
    target_prop_unpermuted = target_prop_unpermuted[permutation];
    var distractor_prop_unpermuted = [5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0,0,0,0,0,0,0,0];
    distractor_prop_unpermuted = distractor_prop_unpermuted[permutation];
    var foil_prop_unpermuted = 0;//Not sure what this does
    var choice_names_unpermuted = ["Quadrupled_feature","Two_features"];//Not sure what this does
    
}
if (scale_and_level == 14) {
    //The context coordination condition
    //Randomly choose between:
    var possibleExpt=[];
    possibleExpt[0]   = [[1,1,1,1,1,0,0,0,0,0],[1,0,0,0,0,0,1,0,0,0]];
    possibleExpt[1]   = [[1,1,1,1,1,0,0,0,0,0],[1,0,0,0,0,0,0,1,0,0]];
    possibleExpt[2]   = [[1,1,1,1,1,0,0,0,0,0],[1,0,0,0,0,0,0,0,1,0]];
    possibleExpt[3]   = [[1,1,1,1,1,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,1]];
    possibleExpt[4]   = [[1,1,1,1,1,0,0,0,0,0],[0,1,0,0,0,1,0,0,0,0]];
    possibleExpt[5]   = [[1,1,1,1,1,0,0,0,0,0],[0,1,0,0,0,0,0,1,0,0]];
    possibleExpt[6]   = [[1,1,1,1,1,0,0,0,0,0],[0,1,0,0,0,0,0,0,1,0]];
    possibleExpt[7]   = [[1,1,1,1,1,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,1]];
    possibleExpt[8]   = [[1,1,1,1,1,0,0,0,0,0],[0,0,1,0,0,1,0,0,0,0]];
    possibleExpt[9]   = [[1,1,1,1,1,0,0,0,0,0],[0,0,1,0,0,0,1,0,0,0]];
    possibleExpt[10]  = [[1,1,1,1,1,0,0,0,0,0],[0,0,1,0,0,0,0,0,1,0]];
    possibleExpt[11]  = [[1,1,1,1,1,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,1]];
    possibleExpt[12]  = [[1,1,1,1,1,0,0,0,0,0],[0,0,0,1,0,1,0,0,0,0]];
    possibleExpt[13]  = [[1,1,1,1,1,0,0,0,0,0],[0,0,0,1,0,0,1,0,0,0]];
    possibleExpt[14]  = [[1,1,1,1,1,0,0,0,0,0],[0,0,0,1,0,0,0,1,0,0]];
    possibleExpt[15]  = [[1,1,1,1,1,0,0,0,0,0],[0,0,0,1,0,0,0,0,0,1]];
    possibleExpt[16]  = [[1,1,1,1,1,0,0,0,0,0],[0,0,0,0,1,1,0,0,0,0]];
    possibleExpt[17]  = [[1,1,1,1,1,0,0,0,0,0],[0,0,0,0,1,0,1,0,0,0]];
    possibleExpt[18]  = [[1,1,1,1,1,0,0,0,0,0],[0,0,0,0,1,0,0,1,0,0]];
    possibleExpt[19]  = [[1,1,1,1,1,0,0,0,0,0],[0,0,0,0,1,0,0,0,1,0]];
    possibleExpt[20]  = [[0,0,0,0,0,1,1,1,1,1],[1,0,0,0,0,0,1,0,0,0]];
    possibleExpt[21]  = [[0,0,0,0,0,1,1,1,1,1],[1,0,0,0,0,0,0,1,0,0]];
    possibleExpt[22]  = [[0,0,0,0,0,1,1,1,1,1],[1,0,0,0,0,0,0,0,1,0]];
    possibleExpt[23]  = [[0,0,0,0,0,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,1]];
    possibleExpt[24]  = [[0,0,0,0,0,1,1,1,1,1],[0,1,0,0,0,1,0,0,0,0]];
    possibleExpt[25]  = [[0,0,0,0,0,1,1,1,1,1],[0,1,0,0,0,0,0,1,0,0]];
    possibleExpt[26]  = [[0,0,0,0,0,1,1,1,1,1],[0,1,0,0,0,0,0,0,1,0]];
    possibleExpt[27]  = [[0,0,0,0,0,1,1,1,1,1],[0,1,0,0,0,0,0,0,0,1]];
    possibleExpt[28]  = [[0,0,0,0,0,1,1,1,1,1],[0,0,1,0,0,1,0,0,0,0]];
    possibleExpt[29]  = [[0,0,0,0,0,1,1,1,1,1],[0,0,1,0,0,0,1,0,0,0]];
    possibleExpt[30]  = [[0,0,0,0,0,1,1,1,1,1],[0,0,1,0,0,0,0,0,1,0]];
    possibleExpt[31]  = [[0,0,0,0,0,1,1,1,1,1],[0,0,1,0,0,0,0,0,0,1]];
    possibleExpt[32]  = [[0,0,0,0,0,1,1,1,1,1],[0,0,0,1,0,1,0,0,0,0]];
    possibleExpt[33]  = [[0,0,0,0,0,1,1,1,1,1],[0,0,0,1,0,0,1,0,0,0]];
    possibleExpt[34]  = [[0,0,0,0,0,1,1,1,1,1],[0,0,0,1,0,0,0,1,0,0]];
    possibleExpt[35]  = [[0,0,0,0,0,1,1,1,1,1],[0,0,0,1,0,0,0,0,0,1]];
    possibleExpt[36]  = [[0,0,0,0,0,1,1,1,1,1],[0,0,0,0,1,1,0,0,0,0]];
    possibleExpt[37]  = [[0,0,0,0,0,1,1,1,1,1],[0,0,0,0,1,0,1,0,0,0]];
    possibleExpt[38]  = [[0,0,0,0,0,1,1,1,1,1],[0,0,0,0,1,0,0,1,0,0]];
    possibleExpt[39]  = [[0,0,0,0,0,1,1,1,1,1],[0,0,0,0,1,0,0,0,1,0]];
    

    permutation = random(0,39);
    expt=possibleExpt[permutation];
    
    //Setting this earlier for clarity w.r.t. the randomization
    //This enables unpermuted bevavior even though permutation is introduced earlier
    var level = 0;
    var target_unpermuted = 0;//The target is the doubled object
    var distractor_unpermuted = 1;//The distractor is the two feature object
    //var other_unpermuted = 2;//The other is the one feature object
    var target_prop_unpermuted =     [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6];
    target_prop_unpermuted = target_prop_unpermuted[permutation];
    var distractor_prop_unpermuted = [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    distractor_prop_unpermuted = distractor_prop_unpermuted[permutation];
    var foil_prop_unpermuted = 0;//Not sure what this does
    var choice_names_unpermuted = ["Quintupled_feature","Two_features"];//Not sure what this does
    
}

if (scale_and_level == 11) {
    //The context coordination condition
    //Randomly choose between:
    var possibleExpt=[];
    possibleExpt[0] = [[1,0,0,0],[1,0,0,1]];
    possibleExpt[1] = [[0,0,1,0],[1,0,0,1]];
    possibleExpt[2] = [[0,1,0,0],[0,1,1,0]];
    possibleExpt[3] = [[0,0,0,1],[0,1,1,0]];

    permutation = random(0,3);
    expt=possibleExpt[permutation];
    
    //Setting this earlier for clarity w.r.t. the randomization
    //This enables unpermuted bevavior even though permutation is introduced earlier
    var level = 0;
    var target_unpermuted = 0;//The target is the doubled object
    var distractor_unpermuted = 2;//The distractor is the two feature object
    var other_unpermuted = 1;//The other is the one feature object
    var target_prop_unpermuted = [0,3,0,3];
    target_prop_unpermuted = target_prop_unpermuted[permutation];
    var distractor_prop_unpermuted = [3,0,3,0];
    distractor_prop_unpermuted = distractor_prop_unpermuted[permutation];
    var foil_prop_unpermuted = 0;//Not sure what this does
    var choice_names_unpermuted = ["One_feature","Two_features"];//Not sure what this does
}


//  Level 0, scales - m2/r3
if (scale_and_level == 0) {
    var level = 0;
    var target_unpermuted = 2;
    var distractor_unpermuted = 1;
    var other_unpermuted = 0;
    var target_prop_unpermuted = 1;
    var distractor_prop_unpermuted = 2;
    var foil_prop_unpermuted = 0;
    var choice_names_unpermuted = ["foil","logical","target"];
}

//  Level 1, scales - m3/r2
if (scale_and_level == 1) {
    var level = 1;
    var target_unpermuted = 1;
    var distractor_unpermuted = 2;
    var other_unpermuted = 0;
    var target_prop_unpermuted = 2;
    var distractor_prop_unpermuted = 1;
    var foil_prop_unpermuted = 0;
    var choice_names_unpermuted = ["foil","target","logical"];
}

// Level 0, scales+ - m1/r3     
// Consider replacing "logical" for a second "foil", since neither alternative is strictly coherent
if (scale_and_level == 2) {
    var level = 0;
    var target_unpermuted = 2;
    var distractor_unpermuted = 1;
    var other_unpermuted = 0;
    var target_prop_unpermuted = 0;
    var distractor_prop_unpermuted = 1;
    var foil_prop_unpermuted = 2;
    var choice_names_unpermuted = ["foil","logical","target"];
}
// Level 1, scales+ - m3/r1
if (scale_and_level == 3) {
    var level = 1;
    var target_unpermuted = 0;
    var distractor_unpermuted = 1;
    var other_unpermuted = 0;
    var target_prop_unpermuted = 2;
    var distractor_prop_unpermuted = 1;
    var foil_prop_unpermuted = 0;
    var choice_names_unpermuted = ["target","logical","foil"];
}

// Level 2, scales+ - m2/r2
if (scale_and_level == 4) {
    var level = 2;
    var target_unpermuted = 1;
    var distractor_unpermuted = 2;
    var other_unpermuted = 0;
    var target_prop_unpermuted = 1;
    var distractor_prop_unpermuted = 0;
    var foil_prop_unpermuted = 2;
    var choice_names_unpermuted = ["foil","target","logical"];
}

// Compltetely underdetermined because the target feature is everywehre.
if (scale_and_level == 5) {
    var level = 0;
    var target_unpermuted = 0;
    var distractor_unpermuted = 1;
    var other_unpermuted = 2;
    var target_prop_unpermuted = 1;
    var distractor_prop_unpermuted = 0;
    var foil_prop_unpermuted = 2;
    var choice_names_unpermuted = ["single","twin","twin"];
}

if (scale_and_level == 6) {
    var level = 1;
    var target_unpermuted = 1;
    var distractor_unpermuted = 2;
    var other_unpermuted = 0;
    var target_prop_unpermuted = 0;
    var distractor_prop_unpermuted = 1;
    var foil_prop_unpermuted = 2;
    var choice_names_unpermuted = ["single","twin","twin"];
}

if (scale_and_level == 7) {
    var level = 2;
    var target_unpermuted = 1;
    var distractor_unpermuted = 2;
    var other_unpermuted = 0;
    var target_prop_unpermuted = 2;
    var distractor_prop_unpermuted = 1;
    var foil_prop_unpermuted = 0;
    var choice_names_unpermuted = ["single","twin","twin"];
}


// This is for the patch of colors series 
if (scale_and_level == 8) {
    var level = 3;
    var target_unpermuted = 2;
    var distractor_unpermuted = 1;
    var other_unpermuted = 0;
    var target_prop_unpermuted = 2;
    var distractor_prop_unpermuted = 1;
    var foil_prop_unpermuted = 0;
    var choice_names_unpermuted = ["twin_1","twin_2","odd_one"];
}



if (scale_and_level==12){
    var stims = ["plate"];
        //["boat","friend","pizza","snowman","sundae","Christmas tree"];

    var stims_plural = ["plates"];
        //["boats","friends","pizzas","snowmen","sundaes","Christmas trees"];

    var stims_props = [["fork1", "fork2", "fork3", "spoon1", "spoon2", "spoon3"]];
        //[["cabin","sail","motor"],
        //	   ["hat","glasses","mustache"],
        //	   ["mushrooms","olives","peppers"],
        //     ["hat","scarf","mittens"],
        //     ["cherry","whipped cream","chocolate"],
        //     ["lights","ornaments","star"]];
    var stims_prop_words_definite = [["a fork", "a fork", "a fork", "a spoon", "a spoon", "a spoon"]];
        //[["a cabin","a sail","a motor"],
        //		["a hat","glasses","a mustache"],
        //		["mushrooms","olives","peppers"],
        //      ["a hat","a scarf","mittens"],
        //      ["a cherry","whipped cream","chocolate sauce"],
        //		["lights","ornaments","a star"]];
    var stims_prop_words_indefinite = [["the fork", "the fork", "the fork", "the spoon", "the spoon", "the spoon"]];
        //[["the cabin","the sail","the motor"],
        //		["the hat","the glasses","the mustache"],
        //		["the mushrooms","the olives","the peppers"],
        //        ["the hat","the scarf","the mittens"],
        //        ["the cherry","the whipped cream","the chocolate sauce"],
        //		["the lights","the ornaments","the star"]];
    var stims_single_words = [["fork", "fork", "fork", "spoon", "spoon", "spoon"]];
        //[["cabin","sail","motor"],
        //        ["hat","glasses","mustache"],
        //        ["mushrooms","olives","peppers"],
        //        ["hat","scarf","mittens"],
        //        ["cherry","whipped-cream","chocolate"],
        //        ["lights","ornaments","star"]];
}else if (scale_and_level==13){
    var stims = ["plate"];
        //["boat","friend","pizza","snowman","sundae","Christmas tree"];

    var stims_plural = ["plates"];
        //["boats","friends","pizzas","snowmen","sundaes","Christmas trees"];

    var stims_props = [["fork4", "fork5", "fork6", "fork7", "spoon4", "spoon5", "spoon6", "spoon7"]];
        //[["cabin","sail","motor"],
        //	   ["hat","glasses","mustache"],
        //	   ["mushrooms","olives","peppers"],
        //     ["hat","scarf","mittens"],
        //     ["cherry","whipped cream","chocolate"],
        //     ["lights","ornaments","star"]];
    var stims_prop_words_definite = [["a fork", "a fork", "a fork", "a fork", "a spoon", "a spoon", "a spoon", "a spoon"]];
        //[["a cabin","a sail","a motor"],
        //		["a hat","glasses","a mustache"],
        //		["mushrooms","olives","peppers"],
        //      ["a hat","a scarf","mittens"],
        //      ["a cherry","whipped cream","chocolate sauce"],
        //		["lights","ornaments","a star"]];
    var stims_prop_words_indefinite = [["the fork", "the fork", "the fork", "the fork", "the spoon", "the spoon", "the spoon", "the spoon"]];
        //[["the cabin","the sail","the motor"],
        //		["the hat","the glasses","the mustache"],
        //		["the mushrooms","the olives","the peppers"],
        //        ["the hat","the scarf","the mittens"],
        //        ["the cherry","the whipped cream","the chocolate sauce"],
        //		["the lights","the ornaments","the star"]];
    var stims_single_words = [["fork", "fork", "fork", "fork", "spoon", "spoon", "spoon", "spoon"]];
        //[["cabin","sail","motor"],
        //        ["hat","glasses","mustache"],
        //        ["mushrooms","olives","peppers"],
        //        ["hat","scarf","mittens"],
        //        ["cherry","whipped-cream","chocolate"],
        //        ["lights","ornaments","star"]];
}else if (scale_and_level==14){
    var stims = ["plate"];
        //["boat","friend","pizza","snowman","sundae","Christmas tree"];

    var stims_plural = ["plates"];
        //["boats","friends","pizzas","snowmen","sundaes","Christmas trees"];

    var stims_props = [["fork8", "fork9", "fork10", "fork11", "fork12", "spoon8", "spoon9", "spoon10", "spoon11", "spoon12"]];
        //[["cabin","sail","motor"],
        //	   ["hat","glasses","mustache"],
        //	   ["mushrooms","olives","peppers"],
        //     ["hat","scarf","mittens"],
        //     ["cherry","whipped cream","chocolate"],
        //     ["lights","ornaments","star"]];
    var stims_prop_words_definite = [["a fork", "a fork", "a fork", "a fork", "a fork", "a spoon", "a spoon", "a spoon", "a spoon", "a spoon"]];
        //[["a cabin","a sail","a motor"],
        //		["a hat","glasses","a mustache"],
        //		["mushrooms","olives","peppers"],
        //      ["a hat","a scarf","mittens"],
        //      ["a cherry","whipped cream","chocolate sauce"],
        //		["lights","ornaments","a star"]];
    var stims_prop_words_indefinite = [["the fork", "the fork", "the fork", "the fork", "the fork", "the spoon", "the spoon", "the spoon", "the spoon", "the spoon"]];
        //[["the cabin","the sail","the motor"],
        //		["the hat","the glasses","the mustache"],
        //		["the mushrooms","the olives","the peppers"],
        //        ["the hat","the scarf","the mittens"],
        //        ["the cherry","the whipped cream","the chocolate sauce"],
        //		["the lights","the ornaments","the star"]];
    var stims_single_words = [["fork", "fork", "fork", "fork", "fork", "spoon", "spoon", "spoon", "spoon", "spoon"]];
        //[["cabin","sail","motor"],
        //        ["hat","glasses","mustache"],
        //        ["mushrooms","olives","peppers"],
        //        ["hat","scarf","mittens"],
        //        ["cherry","whipped-cream","chocolate"],
        //        ["lights","ornaments","star"]];
}
    
var stims_actions = [["look at", "looks at", "?1", "found"],
                    ["buy", "buys", "?2", "found"],
                    ["find", "finds", "?3", "found"]];
    //[["sail","rents","sailed", "rented"],
	//	     ["visit","chooses to visit","visited", "visited"],
	//	     ["eat","orders","ate", "eaten"],
	//	     ["decorate","makes", "decorated", "decorated"],
	//	     ["eat","makes","ate", "eaten"],
	//	     ["trim","buys","trimmed", "trimmed"]];
var stims_times =
    [["weekend","Week"],
		   ["Sunday","Week"],
		   ["Wednesday","Week"],
		   ["winter","Year"],
		   ["Friday","Week"],
		   ["Christmas","Year"]];


// In case the number of possible stimulus is changed and hence the stim_index may vary. So far we know it advance there
// are only 6 stimulus.
// var stim_index = random(0,stims.length-1);


if (scale_and_level<=8){
    // Permute the matrix randomly:
    var prop_perm = shuffle(range(0,expt[0].length-1));
    var target_perm = shuffle(range(0,expt.length-1));
    var color_order_permuted = shuffle(range(0,expt[0].length-1));
    //var target_perm = [0, 1, 2]    // When you want to have a neat order, you can hard code it. That gives you scale level 1 0-items, 1-item, 2-item order always
    var expt_perm = new Array();
    var choice_names = new Array();


    // Permute the second level and first... make into function
    for (var i=0; i<expt.length; i++) {
        expt_perm[i] = new Array()
        for (var j=0; j<expt[0].length; j++) {
            expt_perm[i][j] = expt[target_perm[i]][prop_perm[j]];
        }
        choice_names[i] = choice_names_unpermuted[target_perm[i]];
    }
}
if (scale_and_level>=9){
    // Don't permute props
    var prop_perm = range(0,expt[0].length-1);
    var target_perm = shuffle(range(0,expt.length-1));
    var color_order_permuted = range(0,expt[0].length-1);
    //var target_perm = [0, 1, 2]    // When you want to have a neat order, you can hard code it. That gives you scale level 1 0-items, 1-item, 2-item order always
    var expt_perm = new Array();
    var choice_names = new Array();


    // Permute the second level and first... make into function
    for (var i=0; i<expt.length; i++) {
        expt_perm[i] = new Array()
        for (var j=0; j<expt[0].length; j++) {
            expt_perm[i][j] = expt[target_perm[i]][prop_perm[j]];
        }
        choice_names[i] = choice_names_unpermuted[target_perm[i]];
    }
}

//Choose a stimulus
var stim_index = random(0,stims.length-1);
//var stim_index = 1;

var base = stims[stim_index];
var plural = stims_plural[stim_index];
var actions = stims_actions[stim_index];
var props = stims_props[stim_index];
//Changes which determiner is used
if (determiner == 1){
    var prop_words = stims_prop_words_definite[stim_index];
}
else if (determiner == 2){
    var prop_words = stims_prop_words_indefinite[stim_index];
}
var individual_prop_words = stims_single_words[stim_index];
var times = stims_times[stim_index];

var target = target_perm.indexOf(target_unpermuted);
var distractor = target_perm.indexOf(distractor_unpermuted);
var other = target_perm.indexOf(other_unpermuted);
var target_prop = prop_perm.indexOf(target_prop_unpermuted);
var distractor_prop = prop_perm.indexOf(distractor_prop_unpermuted);
var foil_prop = prop_perm.indexOf(foil_prop_unpermuted);

//These used to use prop_words instead of definite_props
var definite_props = stims_prop_words_definite[stim_index];
var actual_target_prop = definite_props[target_prop];
var actual_distractor_prop = definite_props[distractor_prop];
var actual_foil_prop = definite_props[foil_prop];


// create shuffled familiarization
fam_mat = new Array();
fam_perm = shuffle(range(0,fam_dist.length-1))
for (var i = 0; i < instances_in_familiarization; i++) {
    fam_mat[i] = new Array();
    for (var j = 0; j < expt[0].length; j++) {
    	fam_mat[i][j] = expt[fam_dist[fam_perm[i]]][prop_perm[j]];
    }
}
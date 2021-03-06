// tracker/app/models/question.js
/*jshint globalstrict:true */
'use strict';
import DS from "ember-data";

var Question = DS.Model.extend ({
  text: DS.attr('string'),
  context: DS.attr('string'),
  choices: DS.attr()
});

Question.reopenClass ({
  FIXTURES: [
  { id: 1, text: "Did you have any of the following symptoms today as a result of your MS? Please indicate Yes by checking the box.", context: 0,
    choices: [
      { id: 1, text: 'Loss of Co-ordination or Dexterity', value: 'locd', checked: false },
      { id: 2, text: 'Weakness or Heavyness in Your Arms', value: 'whArms', checked: false },
      { id: 3, text: 'Weakness or Heavyness in Your Legs', value: 'whLegs', checked: false },
      { id: 4, text: 'Unsteadyness or Loss of Balance', value: 'ulBal', checked: false },
      { id: 5, text: 'Altered or loss of sensation (eg numbness, tingling, pins and needles)', value: 'numbTing', checked: false },
      { id: 6, text: 'Problems with your bladder or bowel', value: 'bladBowel', checked: false },
      { id: 7, text: 'Difficulties thinking clearly, or forgetting things', value: 'cogForget', checked: false },
      { id: 8, text: 'Fatigue or lack of energy', value: 'Fatigue', checked: false },
      { id: 9, text: 'Choking or coughing when eating or drinking', value: 'chokeCough', checked: false },
      { id: 10, text: 'Muscle stiffness or spasms', value: 'stiffSpasm', checked: false },
      { id: 11, text: 'Blurred, double or shaky vision', value: 'vision', checked: false },
      { id: 12, text: 'Pain', value: 'pain', checked: false },
      { id: 13, text: 'Feeling sad or down', value: 'sad', checked: false },
      { id: 14, text: 'Feeling frustrated', value: 'frustrated', checked: false }
    ] },
  { id: 2, text: "Loss of Co-ordination or Dexterity", context: 1,
    choices: [
      { id: 1, text: 'Loss of Co-ordination or Dexterity', value: 'locd', checked: false },
      { id: 2, text: 'Weakness or Heavyness in Your Arms', value: 'whArms', checked: false },
      { id: 3, text: 'Weakness or Heavyness in Your Legs', value: 'whLegs', checked: false },
      { id: 4, text: 'Unsteadyness or Loss of Balance', value: 'ulBal', checked: false },
      { id: 5, text: 'Altered or loss of sensation (eg numbness, tingling, pins and needles)', value: 'numbTing', checked: false },
      { id: 6, text: 'Problems with your bladder or bowel', value: 'bladBowel', checked: false },
      { id: 7, text: 'Difficulties thinking clearly, or forgetting things', value: 'cogForget', checked: false },
      { id: 8, text: 'Fatigue or lack of energy', value: 'Fatigue', checked: false },
      { id: 9, text: 'Choking or coughing when eating or drinking', value: 'chokeCough', checked: false },
      { id: 10, text: 'Muscle stiffness or spasms', value: 'stiffSpasm', checked: false },
      { id: 11, text: 'Blurred, double or shaky vision', value: 'vision', checked: false },
      { id: 12, text: 'Pain', value: 'pain', checked: false },
      { id: 13, text: 'Feeling sad or down', value: 'sad', checked: false },
      { id: 14, text: 'Feeling frustrated', value: 'frustrated', checked: false }
    ] },
  { id: 3, text: "Weakness or Heavyness in Your Arms", context: 1,
    choices: [
      { id: 1, text: 'Loss of Co-ordination or Dexterity', value: 'locd', checked: false },
      { id: 2, text: 'Weakness or Heavyness in Your Arms', value: 'whArms', checked: false },
      { id: 3, text: 'Weakness or Heavyness in Your Legs', value: 'whLegs', checked: false },
      { id: 4, text: 'Unsteadyness or Loss of Balance', value: 'ulBal', checked: false },
      { id: 5, text: 'Altered or loss of sensation (eg numbness, tingling, pins and needles)', value: 'numbTing', checked: false },
      { id: 6, text: 'Problems with your bladder or bowel', value: 'bladBowel', checked: false },
      { id: 7, text: 'Difficulties thinking clearly, or forgetting things', value: 'cogForget', checked: false },
      { id: 8, text: 'Fatigue or lack of energy', value: 'Fatigue', checked: false },
      { id: 9, text: 'Choking or coughing when eating or drinking', value: 'chokeCough', checked: false },
      { id: 10, text: 'Muscle stiffness or spasms', value: 'stiffSpasm', checked: false },
      { id: 11, text: 'Blurred, double or shaky vision', value: 'vision', checked: false },
      { id: 12, text: 'Pain', value: 'pain', checked: false },
      { id: 13, text: 'Feeling sad or down', value: 'sad', checked: false },
      { id: 14, text: 'Feeling frustrated', value: 'frustrated', checked: false }
    ] }
  ]
});

/*  { id: 4, text: "Weakness or Heavyness in Your Legs", context: 1 },
  { id: 5, text: "Unsteadyness or Loss of Balance", context: 1 },
  { id: 6, text: "Altered or loss of sensation (eg numbness, tingling, pins and needles)", context: 1 },
  { id: 7, text: "Problems with your bladder or bowel", context: 1 },
  { id: 8, text: "Difficulties thinking clearly, or forgetting things", context: 1 },
  { id: 9, text: "Fatigue or lack of energy", context: 1 },
  { id: 10, text: "Choking or coughing when eating or drinking", context: 1 },
  { id: 11, text: "Muscle stiffness or spasms", context: 1 },
  { id: 12, text: "Blurred, double or shaky vision", context: 1 },
  { id: 13, text: "Pain", context: 1 },
  { id: 14, text: "Feeling sad or down", context: 1 },
  { id: 15, text: "Feeling frustrated", context: 1 },
  { id: 16, text: "To what extent did MS stop you from doing what you wanted to do today?", context: 0 },
  { id: 17, text: "Compared with what you usually do, how much were you able to do today?", context: 0 },
  { id: 18, text: "On the basis of how your MS has been, how would you describe today?", context: 0 },
  { id: 19, text: "How would you describe your health today?", context: 0 },
  { id: 20, text: "Compared to yesterday, how would you describe your health today?", context: 0 },
  { id: 21, text: "Do physically demanding tasks?", context: 2 },
  { id: 22, text: "Grip things tightly (e.g. turning on taps)?", context: 2 },
  { id: 23, text: "Carry things?", context: 2 },
  { id: 24, text: "Difficulties moving about indoors?", context: 3 },
  { id: 25, text: "Tremor of your arms or legs?", context: 3 },
  { id: 26, text: "Your body not doing what you want it to do?", context: 3 },
  { id: 27, text: "Having to depend on others to do things for you?", context: 3 },
  { id: 28, text: "Problems with your balance?", context: 3 },
  { id: 29, text: "Being clumsy?", context: 3 },
  { id: 30, text: "Stiffness?", context: 3 },
  { id: 31, text: "Heavy arms and/or legs?", context: 3 },
  { id: 32, text: "Spasms in your limbs?", context: 3 },
  { id: 33, text: "Limitations in your social and leisure activities at home?", context: 3 },
  { id: 34, text: "Being stuck at home more than you would like to be?", context: 3 },
  { id: 35, text: "Difficulties using your hands in everyday tasks?", context: 3 },
  { id: 36, text: "Having to cut down the amount of time you spent on work or other daily activities?", context: 3 },
  { id: 37, text: "Problems using transport (e.g. car, bus, train, taxi, etc.)?", context: 3 },
  { id: 38, text: "Taking longer to do things?", context: 3 },
  { id: 39, text: "Difficulty doing things spontaneously (e.g. going out on the spur of the moment)?", context: 3 },
  { id: 40, text: "Needing to go to the toilet urgently?", context: 3 },
  { id: 41, text: "Feeling unwell?", context: 3 },
  { id: 42, text: "Problems sleeping?", context: 3 },
  { id: 43, text: "Feeling mentally fatigued?", context: 3 },
  { id: 44, text: "Worries related to your MS?", context: 3 },
  { id: 45, text: "Feeling anxious or tense?", context: 3 },
  { id: 46, text: "Feeling irritable, impatient, or short tempered?", context: 3 },
  { id: 47, text: "Problems concentrating?", context: 3 },
  { id: 48, text: "Lack of confidence?", context: 3 },
  { id: 49, text: "Feeling depressed?", context: 3 },
  { id: 50, text: "Is there anything else that happened today that you want to mention? (please describe below)", context: 0 },
  { id: 51, text: "Other Comments", context: 0 }
];*/

export default Question;

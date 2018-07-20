$(document).ready(function() {
    // All your code goes here

  var Yes;
$(".button-yes").click(function() {
  $(".button-yes").addClass("button-yes-no--selected");
  $(".button-no, .button-yes").addClass("button-yes-no--disabled");
  $(".button-yes").attr("disabled", true);
  $(".button-no").attr("disabled", true);
  $(".notes").text(yesNotes[count]);
  $(".notes").show();
  $(".button-next").show();
});
var No;
$(".button-no").click(function() {
  var Yes;
  $(".button-yes").click(function() {
    $(".button-yes").addClass("button-yes-no--selected");
    $(".button-no, .button-yes").addClass("button-yes-no--disabled");
    $(".button-yes").attr("disabled", true);
    $(".button-no").attr("disabled", true);
    $(".notes").text(yesNotes[count]);
    $(".notes").show();
    $(".button-next").show();
  });
  var No;
  $(".button-no").click(function() {
    $(".button-no").addClass("button-yes-no--selected");
    $(".button-no, .button-yes").addClass("button-yes-no--disabled");
    $(".button-yes").attr("disabled", true);
    $(".button-no").attr("disabled", true);
    $(".notes").text(noNotes[count]);
    $(".notes").show();
    $(".button-next").show();
  });

  var count = 0;
  $(".button-next").click(function() {
    count = count + 1;
    $(".notes").hide();
    $(".button-next").hide();
    $(".button-yes").removeClass("button-yes-no--selected");
    $(".button-no").removeClass("button-yes-no--selected");
    $(".button-yes").attr("disabled", false);
    $(".button-no").attr("disabled", false);

    // end of survey
    if (count > questions.length) {
      // show end
      $(".end").show();

      $(".button-yes, .button-no, .question").hide();
    } else {
      $(".question").text(questions[count]);
    }
  });

  var questions = [
    "1. Is English your first language?",

    "2.Does one or both of your parents have a college degree?",

    "3. Can you find Band-Aids at mainstream stores designed to blend in with or match your skin tone?",

    "4. Would you think twice about calling the police when trouble occurs?",

    "5. Does your family  have health insurance?",

    "6. Have you been a victim of sexual harassment?",

    "7. Can you show affection for your romantic partner in public without fear of ridicule or violence, take one step forward?",

    "8. Have you ever skipped a meal or were hungry because there was not enough money to buy food?",

    "9. Has someone ever spoken for you when you did not want them to do so?"
  ];
  var yesNotes = [
    "Wow, you don’t speak English really well? is just one offensive rhetoric that should be avoided. So take a step forward and remember that speaking English gives you an advantage. According to linguisticpulse.com, speaking English as your native tongues give a person: 1.easier access to social, political, and educational institutions 2.access to an additional form of capital 3.the ability to avoid having one’s speech perceived negatively. SO congratulations! You are part of the 1.5 billion people who speak English in this world!",

    "Universities are the bastions of privilege. With exorbitant fees and cultural disconnects in these institutions, the significance of a university degree shows a power that is equivalent to that of Ivory Towers. As Jamie, The Ignorant American addresses through their work, Whites are 78% more likely to be accepted to the same university as equally qualified people of color.",

    "Flesh-colour has always been something that is represented of you. This means you have a privilege and it is #whiteprivilege. Products are readily available that suit the colour of white people’s skin, they are a national standard...",

    "Lucky you, you belong to the majority of privileged people who don’t have to be afraid they might be wrongfully searched or even arrested just because you are at the wrong place at the wrong time.",

    "We are happy to hear that you have access to appropriate health care. Unfortunately, millions of people still don’t have the same privilege and have to think twice about getting the medical help they need. Please take a step forward!",

    "We are sorry for having to ask this question. It may be triggering but you are not alone! According to UN Women & WHO, 1 in 3 women worldwide have experienced sexual harassment (physical or sexual) within their lifetime. It’s sad to know that you’re part of the statistics.",

    "If you’ve answered Yes that means that you are part of a privileged group of people that can freely express their romantic feelings to their partner in public without having to fear being attacked. Not everybody is as lucky as you, please take one step forward!",

    "We’re sorry to hear that. According to Feeding America, even in countries as wealthy as the U.S.A. nearly 13 million kids are facing hunger 14. You are not alone.",

    "someone-text here"
  ];
  var noNotes = [
    "If you have an accent, it means you know how to speak another language, so never feel shy about how good or bad your English is. Unfortunately though, due to societal structures today and the tales of colonial pasts. You don’t belong to the 20% of the world’s 7.5 billion inhabitants who can speak English, putting you at a disadvantage when reading signs and participating in educational and occupational events, especially in places that are English-speaking.",

    "This shows that you are not privileged as a person whose parents did obtain a college degree! This does not, in any way mean, mean you are not on a road to success.",

    "We see you! According to an article in the New York Times, ‘Nude     is Not One Color’ customers have been demanding and the brands (especially within the cosmetics industry) are starting to listen, but this doesn’t mean that your required product is readily available and distributed everywhere. Mainstream media might want to alienate you  This means spaces and industries are alienating you.",

    "Depending on the color of your skin you are more likely to be searched by the police, even if you haven’t done anything wrong. In New York City, for example, between 2005 and 2008, 80% of NYPD stops were of blacks and Latinos, while only 10% of stops were of whites - even though POC were not more likely to carry any forbidden items than their white fellow citizens.Plus,i f things come to a head young black boys/men are 21 times more likely to be to be shot and killed by the police than young white boys/men, according to ProPublica",

    "You are one of millions of people who don’t have health insurance. According to the Henry J. Kaiser Foundation about 27.6 million people are still uninsured.",

    " We are happy to hear this! Due to high levels of sexual abuse, as witnessed through the #metoo campaign this year, we are happy to know that there are people in this world who don’t have to fall victim to such atrocities. You fall out of the 75% of women group who have fallen victim to sexual harassment (that is 2 billion women in this world over the age of 18). You stay where you are.",

    "We feel you. According to a study by the Federal Bureau of Investigation L.G.B.T. people are even twice as likely to be targeted as African-Americans, and the rate of hate crimes against them has surpassed that of crimes against Jews 13. No privilege here, please stay where you’re at.",

    "That’s great. This privilege might mean that your body and mind do not have to worry about getting the strength you need to learn and grow in order to face your everyday-challenges. Enough energy to take a step forward!",

    "no someone text here"
  ];

  $(".question").text(questions[0]);
 $(".button-no").addClass("button-yes-no--selected");
  $(".button-no, .button-yes").addClass("button-yes-no--disabled");
  $(".button-yes").attr("disabled", true);
  $(".button-no").attr("disabled", true);
  $(".notes").text(noNotes[count]);
  $(".notes").show();
  $(".button-next").show();
});

var count = 0;
$(".button-next").click(function() {
  count = count + 1;
  $(".notes").hide();
  $(".button-next").hide();
  $(".button-yes").removeClass("button-yes-no--selected");
  $(".button-no").removeClass("button-yes-no--selected");
  $(".button-yes").attr("disabled", false);
  $(".button-no").attr("disabled", false);

  // end of survey
  if (count > questions.length) {
    // show end
    $(".end").show();

    $(".button-yes, .button-no, .question").hide();
  } else {
    $(".question").text(questions[count]);
  }
});

var questions = [
  "1. Is English your first language?",

  "2.Does one or both of your parents have a college degree?",

  "3. Can you find Band-Aids at mainstream stores designed to blend in with or match your skin tone?",

  "4. Would you think twice about calling the police when trouble occurs?",

  "5. Does your family  have health insurance?",

  "6. Have you been a victim of sexual harassment?",

  "7. Can you show affection for your romantic partner in public without fear of ridicule or violence, take one step forward?",

  "8. Have you ever skipped a meal or were hungry because there was not enough money to buy food?",

  "9. Has someone ever spoken for you when you did not want them to do so?"
];
var yesNotes = [
  "Wow, you don’t speak English really well? is just one offensive rhetoric that should be avoided. So take a step forward and remember that speaking English gives you an advantage. According to linguisticpulse.com, speaking English as your native tongues give a person: 1.easier access to social, political, and educational institutions 2.access to an additional form of capital 3.the ability to avoid having one’s speech perceived negatively. SO congratulations! You are part of the 1.5 billion people who speak English in this world!",

  "Universities are the bastions of privilege. With exorbitant fees and cultural disconnects in these institutions, the significance of a university degree shows a power that is equivalent to that of Ivory Towers. As Jamie, The Ignorant American addresses through their work, Whites are 78% more likely to be accepted to the same university as equally qualified people of color.",

  "Flesh-colour has always been something that is represented of you. This means you have a privilege and it is #whiteprivilege. Products are readily available that suit the colour of white people’s skin, they are a national standard...",

  "Lucky you, you belong to the majority of privileged people who don’t have to be afraid they might be wrongfully searched or even arrested just because you are at the wrong place at the wrong time.",

  "We are happy to hear that you have access to appropriate health care. Unfortunately, millions of people still don’t have the same privilege and have to think twice about getting the medical help they need. Please take a step forward!",

  "We are sorry for having to ask this question. It may be triggering but you are not alone! According to UN Women & WHO, 1 in 3 women worldwide have experienced sexual harassment (physical or sexual) within their lifetime. It’s sad to know that you’re part of the statistics.",

  "If you’ve answered Yes that means that you are part of a privileged group of people that can freely express their romantic feelings to their partner in public without having to fear being attacked. Not everybody is as lucky as you, please take one step forward!",

  "We’re sorry to hear that. According to Feeding America, even in countries as wealthy as the U.S.A. nearly 13 million kids are facing hunger 14. You are not alone.",

  "someone-text here"
];
var noNotes = [
  "If you have an accent, it means you know how to speak another language, so never feel shy about how good or bad your English is. Unfortunately though, due to societal structures today and the tales of colonial pasts. You don’t belong to the 20% of the world’s 7.5 billion inhabitants who can speak English, putting you at a disadvantage when reading signs and participating in educational and occupational events, especially in places that are English-speaking.",

  "This shows that you are not privileged as a person whose parents did obtain a college degree! This does not, in any way mean, mean you are not on a road to success.",

  "We see you! According to an article in the New York Times, ‘Nude     is Not One Color’ customers have been demanding and the brands (especially within the cosmetics industry) are starting to listen, but this doesn’t mean that your required product is readily available and distributed everywhere. Mainstream media might want to alienate you  This means spaces and industries are alienating you.",

  "Depending on the color of your skin you are more likely to be searched by the police, even if you haven’t done anything wrong. In New York City, for example, between 2005 and 2008, 80% of NYPD stops were of blacks and Latinos, while only 10% of stops were of whites - even though POC were not more likely to carry any forbidden items than their white fellow citizens.Plus,i f things come to a head young black boys/men are 21 times more likely to be to be shot and killed by the police than young white boys/men, according to ProPublica",

  "You are one of millions of people who don’t have health insurance. According to the Henry J. Kaiser Foundation about 27.6 million people are still uninsured.",

  " We are happy to hear this! Due to high levels of sexual abuse, as witnessed through the #metoo campaign this year, we are happy to know that there are people in this world who don’t have to fall victim to such atrocities. You fall out of the 75% of women group who have fallen victim to sexual harassment (that is 2 billion women in this world over the age of 18). You stay where you are.",

  "We feel you. According to a study by the Federal Bureau of Investigation L.G.B.T. people are even twice as likely to be targeted as African-Americans, and the rate of hate crimes against them has surpassed that of crimes against Jews 13. No privilege here, please stay where you’re at.",

  "That’s great. This privilege might mean that your body and mind do not have to worry about getting the strength you need to learn and grow in order to face your everyday-challenges. Enough energy to take a step forward!",

  "no someone text here"
];

$(".question").text(questions[0]);



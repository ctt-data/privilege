
$( document ).ready(function() {
	// All your code goes here
var scoreYes = 0;
$(".button-yes").click(function() {
  scoreYes = scoreYes + 1;
  $(".button-yes").addClass("button-yes-no--selected");
  $(".button-yes").attr("disabled", true);
   $(".button-no").attr("disabled", true);
  $(".notes").text(yesNotes[count]);
  $(".notes").show();
  $(".button-next").show();
});
var scoreNo = 0;
$(".button-no").click(function() {
  scoreNo = scoreNo + 1;
  $(".button-no").addClass("button-yes-no--selected");
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

    // show result-w.i.p-
    $(".result").show();
    $("#scoreYes").text(scoreYes);
    $("#scoreNo").text(scoreNo);
    $("#scoreYes").width(scoreYes * 50 + "px");
    $("#scoreNo").width(scoreNo * 50 + "px");
    $(".button-yes, .button-no, .question, score").hide();
    

var questions = [
  "Is English your first language?",
  "Does one or both of your parents have a college degree?",
  "Can you find Band-Aids at mainstream stores designed to blend in with or match your skin tone?",
  "Can you show affection for you romantic partner in public without fear of ridicule pr violence",
  "Does your family  have health insurance?",
];
var yesNotes= [
  "yes note 1- text goes here",
  "yes note 2- text goes here",
  "yes note 3- text goes here",
  "yes note 4- text goes here",
  "yes note 5- text goes here",
  
];
var noNotes= [
  "no note 1- text goes here",
  "no note 2- text goes here",
  "no note 3- text goes here",
  "no note 4- text goes here",
  "no note 5- text goes here",
 
];

$(".question").text(questions[0]);

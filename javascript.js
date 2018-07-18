
$( document ).ready(function() {
	// All your code goes here
	
    $("#main_title").text("My Title!")
});

var scoreYes = 0;
$(".button-yes").click(function() {
  scoreYes = scoreYes + 1;
});
var scoreNo = 0;
$(".button-no").click(function() {
  scoreNo = scoreNo + 1;
});
var count = 0;
$(".button-yes, .button-no").click(function(){
  count=count+1;
  if(count>questions.length){
    // show result
    $("#scoreYes").text(scoreYes);
    $("#scoreNo").text(scoreNo);
    $(".button-yes, .button-no, .question").hide();
  }else {
  $(".question").text(questions[count]);
  }
});

var questions = ["Are you right handed?",
                 "Is English your first language?",
                 "Does one or both of your parents have a college degree?",
                 "Can you find Band-Aids at mainstream stores designed to blend in with or match your skin tone?",
                 "Do you rely, or have relied, primarily on public transportation?",
                 "Have you attended previous schools with people you felt were like yourself?",
                 "Do you constantly feel unsafe walking alone at night?",
                 "Does your household employs help as servants, gardeners, etc.?",
                 "Are you able to move through the world without fear of sexual assault?",
                 "Have you studied the culture of your ancestors in elementary school?",
                 "Have you ever been able to play a significant role in a project or activity because of a talent you          gained previously?",  
                 
                ];

$(".question").text(questions[0]);


$( document ).ready(function() {
	// All your code goes here
	
    $("#main_title").text("My Title!")
});

var score = 0;
$("#q1_yes").click(function() {
  score = score + 1;
  $("#score").text("Score: " + score)
  $("#score").addClass("invisible")
});
var score2 = 0;
$("#q1_no").click(function() {
  score2 = score2 + 1;
  $("#score2").text("score: "+score2)
});
var score=0;
$("#q2_yes").click(function(){
  score=score+1;
  $("#score").text("score:"+score)
                   
                   });
var score= 0;
$("#q2_no").click(function(){
  score2=score2+1;
$("#score2").text("score:"+score2)  
});

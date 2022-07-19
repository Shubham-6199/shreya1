

$(".love").click(function(){

  var tom1= new Audio("love.mp3.mp3");
  tom1.play();
  $("h1").text("I Love You Shreya❤💙").css("color" ,"#D61C4E");
  $("button").css("color","#A10035");
  $("body").css({"background-image":"url(hand.jpeg)"});
});
$(".sorry").click(function(){

  var tom2= new Audio("sorry.mp3");
  tom2.play();
  $("h1").text("I am Sorry Shreya").css("color" ,"#FFB4B4");
  $("button").css("color","#A10035");
    $("body").css({"background-image":"url(shreya1.jpeg)"});


});

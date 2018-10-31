$(document).ready(function(){
  
  var correctAnswers = 0;
  

  //Setting up correct sound

  
  var correctSound = document.createElement('audio');
   correctSound.setAttribute('src', 'http://brouserex.com/curtin/payment_success.m4a');

  var errorSound = document.createElement('audio');
   errorSound.setAttribute('src', 'http://brouserex.com/curtin/payment_failure.m4a');

  // Quiz 1

  //Correct Answer
  $(".correctq1").click(function() {
    $(this).addClass('correct');
    $(this).attr('disabled', 'disabled');
    //alert( "correct");
    $('.next-btn').removeAttr('disabled');
    correctSound.play();
  });

  //Incorrect Answer
  $(".incorrectq1").click(function() {
    //alert("incorrect");
    $(this).addClass('incorrect');
    errorSound.play();
  });



  // Quiz 2

  //Correct Answer
  $(".correctq2").click(function() {
    $(this).addClass('correct');
    $(this).attr('disabled', 'disabled');
    //alert( "correct");
    $('.next-btn2').removeAttr('disabled');
    correctSound.play();
  });

  //Incorrect Answer
  $(".incorrectq2").click(function() {
   // alert("incorrect");
   $(this).addClass('incorrect');
   errorSound.play();
  });



  // Quiz 3


  //Correct Answer
  $(".correctq3").click(function() {
    $(this).addClass('correct');
    $(this).attr('disabled', 'disabled');
    //alert( "correct");
    $('.next-btn3').removeAttr('disabled');
    correctSound.play();
  });

  //Incorrect Answer
  $(".incorrectq3").click(function() {
    //alert("incorrect");
    $(this).addClass('incorrect');
    errorSound.play();
  });



  // Quiz 4

  //correct answer
  $(".correctq4").click(function() {
    $(this).addClass('correct');
    $(this).attr('disabled', 'disabled');
    //alert("correct");
    $('.next-btn4').removeAttr('disabled');
    correctSound.play();
  });

  //Incorrect Answer
  $(".incorrectq4").click(function() {
    //alert("incorrect");
    $(this).addClass('incorrect');
    errorSound.play();
  });



  // Quiz 5

  //Correct Answer
  $(".correctq5").click(function() {
    $(this).addClass('correct');
    $(this).attr('disabled', 'disabled');
    //alert( "correct");
    $('.next-btn5').removeAttr('disabled');
    correctSound.play();
  });

  //Incorrect Answer
  $(".incorrectq5").click(function() {
    //alert("incorrect");
    $(this).addClass('incorrect');
    errorSound.play();
  });

  // Quiz 6

  function disableNextBtn(){
    $('.next-btn6').removeAttr('disabled'); 
  }

  //Q1

  $(".clock-answer1").draggable();

  $(".clock-drop1").droppable({
    drop: function(event, ui){
      
      var box = ui.draggable;
      var boxClock = box.attr("data-box-clock");

      if(boxClock == '04.39PM'){
        //CORRECT        
        $(".clock-answer1").draggable("disable");
        correctSound.play();

        correctAnswers++;
        console.log("correct answers = "+correctAnswers);
        if(correctAnswers == 5){
          disableNextBtn();
        }
      }else {
        //alert("incorrect!");
        errorSound.play();
      }
    }
  });

  //Q2

  $(".clock-answer2").draggable();

  $(".clock-drop2").droppable({
    drop: function(event, ui){
      var box = ui.draggable;
      var boxClock = box.attr("data-box-clock");

      if(boxClock == '03.39PM'){
        //CORRECT
        //alert("correct!");
        $(".clock-answer2").draggable("disable");
        correctSound.play();

        correctAnswers++;
        console.log("correct answers = "+correctAnswers);
        if(correctAnswers == 5){
          disableNextBtn();
        }
      }else {
        //alert("incorrect!");
        errorSound.play();
      }
    }
  });


  //Q3

  $(".clock-answer3").draggable();

  $(".clock-drop3").droppable({
    drop: function(event, ui){
      var box = ui.draggable;
      var boxClock = box.attr("data-box-clock");

      if(boxClock == '02.39PM'){
        //CORRECT
        //alert("correct!");
        $(".clock-answer3").draggable("disable");
        correctSound.play();

        correctAnswers++;
        console.log("correct answers = "+correctAnswers);
        if(correctAnswers == 5){
          disableNextBtn();
        }
      }else {
        //alert("incorrect!");
        errorSound.play();
      }
    }
  });


  //Q4

  $(".clock-answer4").draggable();

  $(".clock-drop4").droppable({
    drop: function(event, ui){
      var box = ui.draggable;
      var boxClock = box.attr("data-box-clock");

      if(boxClock == '08.39AM'){
        //CORRECT
        //alert("correct!");
        $(".clock-answer4").draggable("disable");
        correctSound.play();

        correctAnswers++;
        console.log("correct answers = "+correctAnswers);
        if(correctAnswers == 5){
          disableNextBtn();
        }
      }else {
        //alert("incorrect!");
        errorSound.play();
      }
    }
  });


  //Q5

  $(".clock-answer5").draggable();

  $(".clock-drop5").droppable({
    drop: function(event, ui){
      var box = ui.draggable;
      var boxClock = box.attr("data-box-clock");

      if(boxClock == '10.39AM'){
        //CORRECT
       // alert("correct!");
       $(".clock-answer5").draggable("disable");        
        correctSound.play();

        correctAnswers++;
        console.log("correct answers = "+correctAnswers);
        if(correctAnswers == 5){
          disableNextBtn();
        }
      }else {
        //alert("incorrect!");
        errorSound.play();
      }
    }
  });
    
  });


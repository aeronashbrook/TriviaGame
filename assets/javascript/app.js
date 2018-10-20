//finish questions
//hide questions/start game at the end of timer
//get value of radio to add to correct if correct else add to incorrect
$(document).ready(function(){
var correct = 0;
var incorrect = 0;
var timeleft = 30;


$("#startgame").on('click',  function() {
    $("#start").hide();
    var gameTimer = setInterval(function(){
    timeleft--;
    document.getElementById("countdown").textContent = "Time left: " + timeleft;
    if(timeleft <= 0)
        clearInterval(gameTimer);
        trigger();
    },1000);
    $('#questions').show(); 
});

    function trigger(){
        if (timeleft <= 0){
            checker();
        }
    }
    
    function checker() {
        $("#questions").hide();
        $("#countdown").hide();

    if (document.getElementById('Q1').checked){
        correct++;
        $('#test').text("Correct answers: " + correct)
        console.log(correct)
    }
    else {
        incorrect++;
        $('#test2').text("Incorrect answers: " + incorrect)
        console.log(incorrect)
    }

    if (document.getElementById('Q2').checked){
        correct++;
        $('#test').text("Correct answers: " + correct)
        console.log(correct)
    }
    else {
        incorrect++;
        $('#test2').text("Incorrect answers: " + incorrect)
        console.log(incorrect)
    }

    if (document.getElementById('Q3').checked){
        correct++;
        $('#test').text("Correct answers: " + correct)
        console.log(correct)
    }
    else {
        incorrect++;
        $('#test2').text("Incorrect answers: " + incorrect)
        console.log(incorrect)
    }

    if (document.getElementById('Q4').checked){
        correct++;
        $('#test').text("Correct answers: " + correct)
        console.log(correct)
    }
    else {
        incorrect++;
        $('#test2').text("Incorrect answers: " + incorrect)
        console.log(incorrect)
    }

    if (document.getElementById('Q5').checked){
        correct++;
        $('#test').text("Correct answers: " + correct)
        console.log(correct)
    }
    else {
        incorrect++;
        $('#test2').text("Incorrect answers: " + incorrect)
        console.log(incorrect)
    }
   
};

});
















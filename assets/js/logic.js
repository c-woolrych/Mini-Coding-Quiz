var timeEl = document.getElementById("time");
var startQuiz = document.getElementById("start");
var questions = document.getElementById("questions");


questions.append()

// when start button clicked, timer starts
startQuiz.addEventListener("click", function(event){
    timer();
})

// timer function
var secondsLeft = 60;

function timer() {
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

function firstQ() {
    var question = ['What does HTML stand for?']
    var answers = ['Hole Text Making Language', 'Hyper Text Making Language', 'Hyper Text Markup Language'];

    question = document.getElementById("question-title");
    answers = document.getElementById("choices");

}
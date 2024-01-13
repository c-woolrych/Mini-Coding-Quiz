var timeEl = document.getElementById("time");
var startQuiz = document.getElementById("start");
var questions = document.getElementById("questions");
var question = document.getElementById("question-title");
var choices = document.getElementById("choices");

questions.append(question, choices);

// when start button clicked, timer starts
startQuiz.addEventListener("click", function(event){
    document.getElementById('questions').style.display = 'block';
    timer();
    firstQ();

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

// first question
function firstQ() {
    question.textContent = ['What does HTML stand for?'];
    choices = ['Hole Text Making Language', 'Hyper Text Making Language', 'Hyper Text Markup Language'];
    function makeButtons() {
        for (var i=0; i < choices.length; i++) {
        var button = document.createElement('button');
        button.innerHTML = choices[i];
        question.appendChild(button);
        }
    } makeButtons()
}
// choices.addEventListener("click", function(event){
//     if (choices[0, 1]) {
//         displayMessage('Incorrect');
//     } else if (choices[2]) {
//         displayMessage('Correct!');
//     }
// })

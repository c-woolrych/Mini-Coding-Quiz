var timeEl = document.getElementById("time");
var startQuiz = document.getElementById("start");

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



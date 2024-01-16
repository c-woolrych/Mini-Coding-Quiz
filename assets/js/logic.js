var timeEl = document.getElementById("time");
var startQuiz = document.getElementById("start");
var nextQ = document.getElementById("questions");

// when start button clicked, timer starts
startQuiz.addEventListener("click", function(event){
    document.getElementById('questions').style.display = 'block';
    timer();
    firstQ();

})

// //buton color change when answer clicked
// button.addEventListener("click", function() {
//     if (correct) {
//         button.style.backgroundColor = "green";
//     } else if (incorrect) {
//         button.style.backgroundColor = "red";
//     }
// });



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



var timeEl = document.getElementById("time");
var secondsLieft = 60;

function timer() {
    var timerInterval = setInterval(function(){
        secondsLieft--;

        if (secondsLieft === 0) {
            clearInterval(timerInterval);
        }
    })
}
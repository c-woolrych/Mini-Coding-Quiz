var questions = document.getElementById("questions");
var question = document.getElementById("question-title");
var choices = document.getElementById("choices");
var correct = document.getElementById("choices");
var incorrect = document.getElementById("choices");

questions.append(question, choices);
// choices.append(correct, incorrect);

// first question
function firstQ() {
    question.textContent = ['What does HTML stand for?'];
    choices.nodeValue = [incorrect[0]] + [correct[0]] + [incorrect[1]];
    correct = ['Hyper Text Markup Language'];
    incorrect = ['Hole Text Making Language', 'Hyper Text Making Language'];

    function makeButtons() {
        for (var i=0; i < correct.length; i++) {
        var button = document.createElement('button');
        button.innerHTML = correct;
        choices.appendChild(button);
        }
        for (var i=0; i < incorrect.length; i++) {
            var button = document.createElement('button');
            button.innerHTML = incorrect;
            choices.appendChild(button);
            }
    } makeButtons()

}
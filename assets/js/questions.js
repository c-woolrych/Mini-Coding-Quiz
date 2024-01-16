var questions = document.getElementById("questions");
var question = document.getElementById("question-title");
var choices = document.getElementById("choices");
var correctButton = document.getElementById("choices");
var incorrectButton = document.getElementById("choices");


// button.append(correctButton, incorrectButton);
questions.append(question, choices);
// choices.append(correct, incorrect);

// first question
function firstQ() {
    question.textContent = ['What does HTML stand for?'];

    // functions for correct answer
    function createCorrectButton() {
        correctButton = document.createElement("button");
    correctButton.textContent = 'Hyper Text Markup Language';
    document.body.append(correctButton);
    return correctButton;
}
correctA = createCorrectButton();
    correctA.addEventListener("click", function() {
    correctA.style.backgroundColor = "green";
});

//functions for incorrect answers
function createIncorrectButton1() {
    incorrectButton = document.createElement("button");
    incorrectButton.textContent = 'Hole Text Making Language';
    document.body.append(incorrectButton);
    return incorrectButton;
}
incorrectA1 = createIncorrectButton1();
    incorrectA1.addEventListener("click", function() {
        incorrectA1.style.backgroundColor = "red";
    });

    function createIncorrectButton2() {
        incorrectButton = document.createElement("button");
        incorrectButton.textContent = 'Hyper Text Making Language';
        document.body.append(incorrectButton);
        return incorrectButton;
    }
    incorrectA2 = createIncorrectButton2();
        incorrectA2.addEventListener("click", function() {
            incorrectA2.style.backgroundColor = "red";
        });
}

//function for second question
function secondQ() {
    question.textContent = ['preventDefault() means the event should not be carried out.'];
    correct = ['False'];
    incorrect = ['True'];

        // functions for correct answer
    function createCorrectButton() {
        correctButton = document.createElement("button");
        correctButton.textContent = 'False';
        document.body.append(correctButton);
        return correctButton;
    }
    correctA = createCorrectButton();
        correctA.addEventListener("click", function() {
        correctA.style.backgroundColor = "green";
    });

    //function for incorrect answer
    function createIncorrectButton() {
        incorrectButton = document.createElement("button");
        incorrectButton.textContent = 'True';
        document.body.append(incorrectButton);
        return incorrectButton;
    }
    incorrectA = createIncorrectButton();
        incorrectA.addEventListener("click", function() {
            incorrectA.style.backgroundColor = "red";
        });
}
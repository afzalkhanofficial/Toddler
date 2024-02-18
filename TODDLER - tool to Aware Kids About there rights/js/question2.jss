function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Child Labour is a violation of children's rights.", ["True", "False"], "True"),

 new Question("Every child has the right to education", ["True", "False"], "True"),
    

    new Question("What is the right of children to have access to clean water, nutritious food and health care?", ["Right to Health","Right to Speak"], "Right to Health"),
    

    new Question("What phone number should you call as a child when you are in need?", ["1098","101"], "1098"),
    new Question("What is the age limit for marriage for males and females according to Prohibition of Child Marriage Act?", ["Male-21 , Female-18","Male-18 , Female-14"], "Male-21 , Female-18"),
    new Question("Which right states that free and compulsory education is compulsory for children?", ["Right to education","Right to speak"], "Right to education"),
    new Question("What should you do if a stranger offers you some sweets?", ["Tell your parents","Take Sweets",], "Tell your parents"),
    
    
    
    ];


var quiz = new Quiz(questions);


populate();
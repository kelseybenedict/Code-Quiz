// variable for questions
var quizQuestions = [
    {
        question: "Which one of these is NOT a type of JavaScript variable scope?",
        answers: ["A: Global", "B: Local", "C: Lexical", "D: Regular"],
        correctAnswer: "D: Regular"
    },
    {
        question: "Which one of these corresponds to JavaScript array syntax?",
        answers: ["A: []", "B: {}", "C: ()", "D: //"],
        correctAnswer: "A: []"
    },
    {
        question: "What is jQuery?",
        answers: ["A: A JavaScript method", "B: A Javascript library", "C: A Javascript function", "D: A Javascript object"],
        correctAnswer: "B: A Javascript library"
    },
    {
        question: "What primitive data type is True/False an exmaple of?",
        answers: ["A: boolean", "B: string", "C: number", "D: null"],
        correctAnswer: "A: boolean"
    },
    {
        question: "What command is used in the terminal to add your locally changes files to your published Github repo?",
        answers: ["A: git add", "B: git clone", "C: git push", "D: git commit"],
        correctAnswer: "C: git push"
    }

];
// getting html elements 
var quiz = document.getElementById("quiz");
var results = document.getElementById("results");
var message = document.getElementById("message");
var buttonDiv = document.getElementById("buttonDiv");
var timerEl = document.getElementById("timerEl");
var scoreboard = document.getElementById("scoreboard");

// creating a start button
var startBtn = document.createElement("button");
startBtn.setAttribute("type", "button");
startBtn.setAttribute("class", "btn btn-primary btn-lg");
startBtn.textContent = "Start";
buttonDiv.appendChild(startBtn);


// global variables for code below
var timeRemaining = 60;
var score = 0;
var allScores = [];
var questionIndex = 0;
var currentQuestion = quizQuestions[questionIndex];
// function to start timer
function startTimer() {
    if (timeRemaining < 60){
        timeRemaining = 60;
    }
    var clock = setInterval(function () {
        timeRemaining--;
        if (timeRemaining <= 0) {
            console.log("time remaining " + timeRemaining)
            clearInterval(clock);
            endQuiz();
            return;
        }
        timerEl.textContent = timeRemaining;

    }, 1000)

};

function askQuestion() {
    // displaying question
    quiz.innerHTML = "<h3>" + currentQuestion.question + "</h3>";
    for (var i = 0; i < currentQuestion.answers.length; i++) {
        //console.log(currentQuestion.answers[i]);
        var answersBtn = document.createElement("button");
        answersBtn.textContent = currentQuestion.answers[i];
        answersBtn.addEventListener("click", clickBtn);
        quiz.appendChild(answersBtn);
    }
}
// function to run the quiz
function startQuiz() {
    questionIndex = 0;
    score = 0;
    // starting the clock
    startTimer();
    quiz.textContent = "";
    askQuestion();
    

};
// when the user clicks an answer choice
function clickBtn() {
    // creating new div for feedback message 
    var feedback = document.createElement("div");
    feedback.textContent = "";
    quiz.textContent = "";
    quiz.appendChild(feedback);
    // if user selects the right choice, say it's correct, update score
    if (this.textContent === currentQuestion.correctAnswer) {
        feedback.textContent = "Correct!";
        score++
        questionIndex++
    }
    else {
        feedback.textContent = "Wrong!";
        // decrease by 10 seconds
        timeRemaining = timeRemaining - 10;
        questionIndex++

    }

    // if check so I don't go out of question range
    if (questionIndex >= quizQuestions.length) {
        timeRemaining = 1;
        return;
    }
    currentQuestion = quizQuestions[questionIndex];
    setTimeout(askQuestion, 1000);
}
// function to update display, ask for user initials
function updateDisplay() {
    var initials = prompt("Please enter your initials to check out the rankings");
    if (!initials || initials == null){
            alert("Please enter initials");
            return;
        }
    var userData = {
        initials: initials,
        score: score
    };
    
    allScores.push(userData);
    window.localStorage.setItem("scoreboard", JSON.stringify(allScores));
    allScores = JSON.parse(localStorage.getItem("scoreboard"));
    allScores.forEach((element) => {
        var scoreDiv = document.createElement("div");
        scoreDiv.textContent = `Initials: ${element.initials}, Score: ${element.score} `
        quiz.appendChild(scoreDiv);


    })
};
function getLocalScores() {

    // local storage .getItem and store in global array, update display
    localStorage.setItem("scoreboard", JSON.stringify(allScores));
    allScores = JSON.parse(localStorage.getItem("scoreboard"));
};
// function for the end of the game
function endQuiz() {
    // show scoreboard
    quiz.innerHTML = "<h3> Scoreboard </h3>";
    // display local storage scores from storage
    //getLocalScores();
    updateDisplay();
    //startQuiz();
    return;
};

// event listener for start button 
startBtn.addEventListener("click", startQuiz);
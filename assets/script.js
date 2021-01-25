// variable for questions
var quizQuestions = [
    {
        question: "Which one of these is NOT a type of JavaScript variable scope?",
        answers: ["A: Global", "B: Local","C: Lexical","D: Regular"],
        correctAnswer: "D: Regular"
    },
    {
        question: "Which one of these corresponds to JavaScript array syntax?",
        answers: ["A: []","B: {}","C: ()", "D: //"],
        correctAnswer: "A: []"
    },
    {
        question: "What is jQuery?",
        answers: ["A: A JavaScript method","B: A Javascript library","C: A Javascript function", "D: A Javascript object"],
        correctAnswer: "B: A Javascript library"
    },
    {
        question: "What primitive data type is True/False an exmaple of?",
        answers: ["A: boolean","B: string", "C: number", "D: null"],
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

// creating a start button
var startBtn = document.createElement("button");
startBtn.setAttribute("type", "button");
startBtn.setAttribute("class", "btn btn-primary btn-lg");
startBtn.textContent = "Start";
buttonDiv.appendChild(startBtn);

// global variables for code below
var timeRemaining = 5;
var score = 0;
var allScores = [];
var questionIndex = 0;
var currentQuestion = quizQuestions[questionIndex];
// function to start timer
function startTimer(){
    var clock = setInterval(function() {
        timeRemaining--;
        if(timeRemaining <= 0){
            clearInterval(clock);
            endQuiz();
        }
        timerEl.textContent = timeRemaining;
        
    }, 1000)

};

// function to run the quiz
function startQuiz(){
    // starting the clock
    startTimer();
    quiz.textContent = "";
    
    function askQuestion(){
        // displaying question
        quiz.innerHTML = "<h3>" + currentQuestion.question + "</h3>";
        for (var i = 0; i < currentQuestion.answers.length; i++){
            //console.log(currentQuestion.answers[i]);
            var answersBtn = document.createElement("button");
            answersBtn.textContent = currentQuestion.answers[i];
            answersBtn.addEventListener("click", clickBtn);
            quiz.appendChild(answersBtn);
        
        }

    } askQuestion();

    
};
// when the user clicks an answer choice
function clickBtn(){
    // creating new div for feedback message 
    var feedback = document.createElement("div");
    feedback.textContent = "";
    quiz.textContent = "";
    quiz.appendChild(feedback);
    // if user selects the right choice, say it's correct, update score
    if(this.textContent === currentQuestion.correctAnswer){
        feedback.textContent = "Correct!";
        score++
        questionIndex++
    }
    else{
        feedback.textContent = "Wrong!";
        // decrease by 10 seconds
        questionIndex++
       
    } 
    questionIndex++
    
    // if check so I don't go out of question range
    if(questionIndex >= quizQuestions.length){
        endQuiz();
        return;
    }
    currentQuestion= quizQuestions[questionIndex];
    setTimeout(startQuiz, 1000);
   
      
}

// function for the end of the game, to collect score and name, end the timer?
function endQuiz(){

    console.log("done")
};
// put all questions into an array, get index of each question. set an index = 0 in a variable, then increment through each question


// event listener for start button 
startBtn.addEventListener("click", startQuiz);
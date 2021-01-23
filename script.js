// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score


// event listener for start button - open up the code quiz questions
// use an array for questions, separate arrays for answers?
// for loop to cycle through
var questions = ["Which one of these is NOT a type of JavaScript variable scope?", "Which one of these corresponds to JavaScript array syntax?", "What is jQuery?", "What primitive data type is True/False an exmaple of?", "What command is used in the terminal to add your locally changes files to your published Github repo?"];
var answers = [["Global", "Local", "Lexical", "Regular"], ["[]", "{}", "()", "//"], ["A JavaScript method", "A Javascript library", "A Javascript function", "A Javascript object"], ["boolean", "string", "number", "null"], ["git add", "git clone", "git push", "git commit"]];

var startBtn = document.getElementById("start");
var quizPage = document.getElementById("quiz");
//var options = document.getElementById("answers");

startBtn.addEventListener("click", function () {
    for (i = 0; i < questions.length; i++) {
        quizPage.innerHTML = "<h3>" + questions[i] + "</h3>";
        var options = document.createElement("div");
        options.textContent = answers[i];
        console.log(answers[i]);
        quizPage.appendChild(options);
        for(j = 0; j < answers[i].length; j++){
            options.innerHTML = "<button>" + answers[i][j] + "</button>";
        }
    }
})
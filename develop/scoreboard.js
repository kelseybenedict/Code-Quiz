var scoreboard = document.getElementById("scoreboard");
allScores = [];
function showScores() {
    //localStorage.setItem("scoreboard", JSON.stringify(allScores));
    allScores = JSON.parse(localStorage.getItem("scoreboard"));
    allScores.forEach((element) => {
        var scoreDiv = document.createElement("div");
        scoreDiv.textContent = `Initials: ${element.initials}, Score: ${element.score} `
        scoreboard.appendChild(scoreDiv);


    })
}

showScores();



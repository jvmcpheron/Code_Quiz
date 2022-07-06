let highscoreSection = document.getElementById("highscores");
let highscoreEntry = localStorage.getItem('username') + ": " + localStorage.getItem('score');

let printHighscore = ()=>{
    highscoreSection.textContent = highscoreEntry;
}

printHighscore();
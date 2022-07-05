const Question = [{
    id: 0,
    q: "Inside which HTML element do we place the JavaScript?",
    a: [{text: "<script>" , isCorrect: true},
    {text: "<link>" , isCorrect: false},
    {text: "<js>" , isCorrect: false},
    {text: "<connect>" , isCorrect: false}]
},
{
    id: 1,
    q: "Where should you put the JavaScript in HTML code?",
    a: [{text: "At the top, because it needs the JavaScript to run the HTML correctly", isCorrect: false},
    {text: "It doesn't matter. Both will run fine, regardless of order", isCorrect: false},
    {text: "You don't put JavaScript in the HTML code.", isCorrect: false},
    {text: "At the bottom, so that all of the HTML is run before the JavaScript", isCorrect: true}]},
{
    id: 2,
    q: "What is a if statement used for?",
    a: [{text:"It is used to get user input", isCorrect: false},
    {text:"It checks the code for errors", isCorrect: false},
    {text:"It is used for the computer to determine whether or not to run a line of code", isCorrect: true},
    {text:"There is no such thing as an if statement, it's called an elif in JavaScript", isCorrect: false}]},
    {
        id: 3,
        q: "question?",
        a: [{text:"answer", isCorrect: false},
        {text:"answer", isCorrect: false},
        {text:"answe", isCorrect: true},
        {text:"answe", isCorrect: false}]
}];


const next = document.getElementsByClassName("next")[0];

let points = 0;
let id = 0;

function iterate (id) {
  
    var result = document.getElementsByClassName('result');

    const question = document.getElementById('question')

    question.innerText = Question[id].q;

    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');

    op1.innerText = Question[id].a[0].text;
    op2.innerText = Question[id].a[1].text;
    op3.innerText = Question[id].a[2].text;
    op4.innerText = Question[id].a[3].text;

    op1.value = Question[id].a[0].isCorrect;
    op2.value = Question[id].a[1].isCorrect;
    op3.value = Question[id].a[2].isCorrect;
    op4.value = Question[id].a[3].isCorrect;

    var selected = "";

    op1.addEventListener("click", () =>{
        selected = op1.value;
    });
    op2.addEventListener("click", () =>{
        selected = op2.value;
    });
    op3.addEventListener("click", () =>{
        selected = op3.value;
    });
    op4.addEventListener("click", () =>{
        selected = op4.value;
    });
    id++
    next.onclick = () =>{
        console.log("id" + id);
        if (selected === "true") {
             result[0].style.color = "green";
            points++
            selected = "";
            console.log("if")


        } 
        else {
             result[0].style.color = "red";
            if (points > 0){points = points - 1;};
             selected = "";
             console.log("if")


            
         } 
         console.log("points" + points);
         console.log("run time =" + runTime);
         if (id < 3){
            iterate(id);
         }else{
             console.log("end");
         }

        
    }
    
}


let runTime = 0;

const startBtn = document.getElementsByClassName("startBtn")[0];

//timer code
// startBtn.addEventListener("click", () => {
//     let timer = document.getElementById("timer");
//     let timeleft = 20;
//     let downloadTimer = setInterval(function(){
//         if(timeleft >= 0){
//             timer.textContent = timeleft;
//             console.log(timeleft);
//             timeleft -= 1;
//         } else{
//             clearInterval(downloadTimer);
//         }

//         }, 1000);
// })

startBtn.onclick = () => {
    let timer = document.getElementById("timer");
    let timeleft = 20;
    let downloadTimer = setInterval(function(){
        if(timeleft >= 0){
            timer.textContent = timeleft;
            console.log(timeleft);
            timeleft -= 1;
        } else{
            clearInterval(downloadTimer);
        }

        }, 1000);
}


startBtn.addEventListener("click", () => {
//quiz run code
    points = 0;
    console.log("check 1");
    id = 0;
    console.log("run check" );
    iterate(id);
    
  
})



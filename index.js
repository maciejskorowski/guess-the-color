const colorSpan = document.getElementById("color");
const boxes = document.querySelectorAll('.box__color');
const spanMess = document.getElementById("divMessage");
const counterBox = document.getElementById('counterMessage');

let correctAnswer;
let correctCounter = 0;
let allCounter = 0;
let colors = [];

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const init =()=>{
    colors = [
        `rgb(${randomNumber(0,255)}, ${randomNumber(0,255)}, ${randomNumber(0,255)})`,
        `rgb(${randomNumber(0,255)}, ${randomNumber(0,255)}, ${randomNumber(0,255)})`,
        `rgb(${randomNumber(0,255)}, ${randomNumber(0,255)}, ${randomNumber(0,255)})`,
    ]
    
    boxes.forEach((el, index) => {
        el.style.backgroundColor = colors[index];
    })
    
    correctAnswer = colors[randomNumber(0,2)];
    colorSpan.innerHTML = correctAnswer.toUpperCase();
}

const checkCorrectAnswer = (e) => {
    if (e.target.style.backgroundColor === correctAnswer) {
        
        spanMess.innerHTML = "GOOD JOB!";
        spanMess.style.color = "green";
        
        boxes.forEach(el => {
            el.style.backgroundColor = correctAnswer;
        })

        correctCounter++;
        allCounter++;
        init();
        
    } else {
        spanMess.innerHTML = "TRY AGAIN";
        spanMess.style.color = "red";
        
        allCounter++;
        init();
    }
    counterBox.innerHTML = `SCORE: ${correctCounter}/${allCounter}`;
}

boxes.forEach(el => {
    el.addEventListener('click', (event) => checkCorrectAnswer(event));
})
init();


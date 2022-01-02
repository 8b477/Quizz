let question = document.getElementById('question');

let imgPop = document.getElementById('img-pop');

let btn = document.getElementById('btn');

// let inputOne = document.getElementById('flexRadioDefault1');
// let inputTwo = document.getElementById('flexRadioDefault2');

let answerOne = document.getElementById('answerOne');
let answerTwo = document.getElementById('answerTwo');

class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
    goodAnswer(choice){
        return this.answer === choice;
    }
}

let questions = [
    new Question("Qui est ce ?",["Bradley cooper","Mon boulanger"],"Bradley cooper"),
    new Question("Qui est ce ?",["Brad Pitt","Mon père"],"Brad Pitt"),
    new Question("Qui est ce ?",["leonardo dicaprio","Ramzy"],"leonardo dicaprio")
];

console.log(questions)

let score = 0;

btn.addEventListener('click',function (){
    if(document.getElementById('flexRadioDefault1').checked){
        console.log("ok")
        score++;
        imgPop.src = "./pictures/Bradpitt.jpg";
        answerOne.innerText = "Brad Pitt";
        answerTwo.innerText = "Mon père";
    }
    else if(document.getElementById('flexRadioDefault2').checked){
        console.log("not ok")
    }
})
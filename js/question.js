const questions = [
    {
        question: 'What keyword is used to declare a variable in JavaScript? Choose all the correct answer.',
        answers: [
            { text: "let", correct: true },
            { text: "variable", correct: false },
            { text: "const", correct: true },
            { text: "var", correct: true },
        ]
    },
    {
        question: 'In JavaScript, which of the following is not a primitive data type?',
        answers: [
            { text: "Answer 1", correct: true },
            { text: "Answer 2", correct: false },
            { text: "Answer 3", correct: false },
            { text: "Answer 4", correct: false },
        ]
    },
    {
        question: 'Enter Your Email',
        answers: [
            { text: "Answer 1", correct: true },
            { text: "Answer 2", correct: false },
            { text: "Answer 3", correct: false },
            { text: "Answer 4", correct: false },
        ]
    },
    {
        question: 'Enter Your Phone Number',
        answers: [
            { text: "Answer 1", correct: true },
            { text: "Answer 2", correct: false },
            { text: "Answer 3", correct: false },
            { text: "Answer 4", correct: false },
        ]
    },
    {
        question: 'Enter Your Address',
        answers: [
            { text: "Answer 1", correct: true },
            { text: "Answer 2", correct: false },
            { text: "Answer 3", correct: false },
            { text: "Answer 4", correct: false },
        ]
    },
    {
        question: 'Enter Your City',
        answers: [
            { text: "Answer 1", correct: true },
            { text: "Answer 2", correct: false },
            { text: "Answer 3", correct: false },
            { text: "Answer 4", correct: false },
        ]
    },
    {
        question: 'Enter Your State',
        answers: [
            { text: 'Answer 1', correct: true },
            { text:'Answer 2', correct: false },
            { text: 'Answer 3', correct: false },
            { text: 'Answer 4', correct: false },
        ]
    }

];

const questionElement = document.getElementById('question')
const answerButtons= document.getElementById('answer-buttons')
const nextButton = document.getElementById('next-btn')

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}   

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {  
    let selectedButton = e.target;
    let correct = selectedButton.dataset.correct==="true";
    if (correct) {
       selectedButton.classList.add('correct');
         score++;
    }
    else {
        selectedButton.classList.add('wrong');
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct) {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block';
}

function showScore() {
    resetState();
    questionElement.innerHTML = 'Your final Score is ' + score;
    nextButton.innerHTML = 'Retake';
    nextButton.style.display = 'block';
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
       showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
});

startQuiz();
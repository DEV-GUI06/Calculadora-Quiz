// quiz.js

const questions = [
    { question: "Qual é 5 + 7?", options: [10, 12, 14, 15], answer: 12 },
    { question: "Qual é 15 - 8?", options: [5, 6, 7, 8], answer: 7 },
    { question: "Qual é 6 * 7?", options: [42, 36, 48, 54], answer: 42 },
    { question: "Qual é 49 / 7?", options: [7, 8, 9, 10], answer: 7 },
    { question: "Qual é log(100)?", options: [1, 2, 3, 4], answer: 2 },
    { question: "Qual é 9 + 8?", options: [15, 16, 17, 18], answer: 17 },
    { question: "Qual é 20 - 6?", options: [12, 14, 16, 18], answer: 14 },
    { question: "Qual é 3 * 5?", options: [10, 12, 15, 18], answer: 15 },
    { question: "Qual é 81 / 9?", options: [7, 8, 9, 10], answer: 9 },
    { question: "Qual é log(1000)?", options: [2, 3, 4, 5], answer: 3 }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    const options = document.getElementById('options');
    options.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        options.appendChild(button);
    });
}

function checkAnswer(answer) {
    if (answer === questions[currentQuestionIndex].answer) {
        score++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById('question').innerText = 'Quiz concluído!';
        document.getElementById('options').innerHTML = '';
        document.getElementById('score').innerText = `Pontuação final: ${score}/${questions.length}`;
        document.getElementById('next').style.display = 'none';
        document.getElementById('restart').style.display = 'inline-block'; // Mostrar botão de recomeçar
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('next').style.display = 'inline-block'; // Mostrar botão de próxima pergunta
    document.getElementById('restart').style.display = 'none'; // Esconder botão de recomeçar
    loadQuestion();
}

// Carregar a primeira pergunta ao iniciar
loadQuestion();

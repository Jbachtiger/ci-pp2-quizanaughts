// Quiz code - Credit Web Dev Simplified - base code logic amended from his tutorial. Code has been modified and extra features/components added to it.

//Declared constant variables
const nextButton = document.getElementById('next-btn');
const quizQuestions = document.getElementById('quiz-questions');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const questionCounterText = document.getElementById('question-counter');
const totalCorrectAnswersText = document.getElementById('score-tally');
const maxQuestions = 15;
const InnerProgressBar = document.getElementById("inner-progress-bar");
const OuterProgressBar = document.getElementById("outer-progress-bar");
const countDownTimer = document.getElementById('timer');
const welcomeHeading = document.getElementById('welcome-heading');
const welcomeIntro = document.getElementById('welcome-intro');

// Declared let variables
let shuffledQuestions;
let currentQuestionIndex;
let score = 0;
let questionCounter = 0;
let quizTimer;


// Click event for next button to increment to next question
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    nextQuestion();
})

// Welcome text for quiz menu
welcomeHeading.innerText = "Are you ready space adventurers?";
welcomeIntro.innerText = "It's time for you to devle deep into space and put your knowledge to the test. Good luck!";

// Starts game
function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    openModalButton.classList.add('hide');
    contactUsButton.classList.add('hide');
    homeButton.classList.add('hide');
    welcomeHeading.classList.add('hide');
    welcomeIntro.classList.add('hide');
    nextButton.classList.remove('hide');
    quizQuestions.classList.remove('hide');
    questionCounterText.classList.remove('hide');
    totalCorrectAnswersText.classList.remove('hide');
    OuterProgressBar.classList.remove('hide');
    countDownTimer.classList.remove('hide');
    nextQuestion();
    timer();
}

// Get's question and shuffles it. Also adds question counter and score text as well as increments the question.
function nextQuestion() {
    resetQuiz();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    questionCounter++;
    questionCounterText.innerText = `Question: ${questionCounter}/${maxQuestions}`;
    totalCorrectAnswersText.innerText = `Score ${score}`;
    // Updated progress bar
    InnerProgressBar.style.width = `${(questionCounter / maxQuestions) * 100}%`;
}


// Countdown timer
function timer() {
    let timeleft = 60;
    quizTimer = setInterval(function() {
        timeleft--;
        document.getElementById('timer').textContent = `Time: ${timeleft} sec`;
        if (timeleft <= 0) {
            alert(`Oh no! You've run out of time. You scored ${score}/${maxQuestions}. Why not play again and see if you can finish the quiz!`);
            startButton.innerText = 'Play Again';
            startButton.addEventListener('click', startButton)
            startButton.classList.remove('hide');
            score = 0, questionCounter = 0;
            nextButton.classList.add('hide');
            clearInterval(quizTimer);
            const btns = document.querySelectorAll("#answer-buttons .btn");
            btns.forEach(btn => btn.style.pointerEvents = 'none');
        }
    }, 1000);
}

// Shows questions and answers in quiz
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer)
        answerButtons.appendChild(button)
    })

}

// Resets questions and answers to default state each time a new question is set
function resetQuiz() {
    nextButton.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);

    }
}

/*
Checks to see if player has selected correct or wrong answer. Changes button colour depeding on the result.
*/
function selectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct;
    let answerButton = document.getElementsByClassName('btn');
    for (let i = 0; i < answerButton.length; i++) {
        answerButton[i].removeEventListener('click', selectAnswer);
    }
    if (correct) {
        selectedButton.style.backgroundColor = "green";
        score++;
    } else {
        selectedButton.style.backgroundColor = "red";
    }
    // Checks to see if player is on last question and if so gives them a play again option. Resets scores and countdown timer.
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Play Again';
        startButton.addEventListener('click', startButton)
        score = 0, questionCounter = 0;
        startButton.classList.remove('hide');
        homeButton.classList.remove('hide');
        clearInterval(quizTimer);
    }
}
// Quiz code - Credit Web Dev Simplified - base code logic amended from his tutorial. Code has been modified and extra features/components added to it.

//Declared constant variables
const nextButton = document.getElementById('next-btn');
const quizQuestions = document.getElementById('quiz-questions');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const questionCounterText = document.getElementById('question-counter');
const totalCorrectAnswersText = document.getElementById('score-tally');
const maxQuestions = 15;
const innerProgressBar = document.getElementById('inner-progress-bar');
const outerProgressBar = document.getElementById('outer-progress-bar');
const countDownTimer = document.getElementById('timer');
const welcomeHeading = document.getElementById('welcome-heading');
const welcomeIntro = document.getElementById('welcome-intro');

// Declared let variables
let shuffledQuestions;
let currentQuestionIndex;
let score;
let questionCounter;
let quizTimer;

// Intro text for quiz
welcomeHeading.innerText = "Are you ready space adventurers?";
welcomeIntro.innerText = "It's time for you to devle deep into space and put your knowledge to the test. Good luck!";

// Click event for next button to increment to next question
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    nextQuestion();
})

// Starts game
function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    score = 0;
    questionCounter = 0;
    openModalButton.classList.add('hide');
    contactUsButton.classList.add('hide');
    homeButton.classList.add('hide');
    welcomeHeading.classList.add('hide');
    welcomeIntro.classList.add('hide');
    nextButton.classList.remove('hide');
    quizQuestions.classList.remove('hide');
    questionCounterText.classList.remove('hide');
    totalCorrectAnswersText.classList.remove('hide');
    outerProgressBar.classList.remove('hide');
    countDownTimer.classList.remove('hide');
    nextQuestion();
    initTimer();
}

// Get's question and shuffles it. Also adds question counter and score text as well as increments the question.
function nextQuestion() {
    refreshUIForNextQuestion();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    questionCounter++;
    questionCounterText.innerText = `Question: ${currentQuestionIndex + 1}/${maxQuestions}`;
    totalCorrectAnswersText.innerText = `Score ${score}`;
    // Updated progress bar
    innerProgressBar.style.width = `${(questionCounter / maxQuestions) * 100}%`;
}


// Countdown timer
function initTimer() {
    let timeleft = 60;
    quizTimerRef = setInterval(function() {
        timeleft--;
        document.getElementById('timer').textContent = `Time: ${timeleft} sec`;
        if (timeleft <= 0) {
            alert(`Oh no! You've run out of time. You scored ${score}/${maxQuestions}. Why not play again and see if you can finish the quiz!`);
            startButton.innerText = 'Play Again';
            startButton.addEventListener('click', startButton)
            startButton.classList.remove('hide');
            nextButton.classList.add('hide');
            clearInterval(quizTimerRef);
            const btns = document.querySelectorAll("#answer-buttons .btn");
            btns.forEach(btn => btn.style.pointerEvents = 'none');
        }
    }, 1000);
}

// Shows questions and answers in quiz
function showQuestion() {
    const question = shuffledQuestions[currentQuestionIndex];
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', onAnswerClick)
        answerButtons.appendChild(button)
    })

}

// Resets questions and answers to default state each time a new question is set
function refreshUIForNextQuestion() {
    nextButton.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);

    }
}

// Once an answer has been selected remove click ability from remaining answer buttons

function removeClickListenersFromButtons(buttons) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].removeEventListener("click", onAnswerClick);
    }
}

/*
Checks to see if player has selected correct or wrong answer. Changes button colour depeding on the result.
*/
function onAnswerClick(event) {
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct;
    let answerButton = document.getElementsByClassName('btn');
    removeClickListenersFromButtons(answerButton);
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
        startButton.classList.remove('hide');
        homeButton.classList.remove('hide');
        clearInterval(quizTimerRef);
    }
}
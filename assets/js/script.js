// Modal - Credit Florin Pop Youtube video guide. Walkthrough helped create modal and code was used and modified for project.
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show')
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show')
});

// Contact us button
document.getElementById("contact-btn").onclick = function() {
    location.href = "contact.html";
};

// Home button
document.getElementById("home-btn").onclick = function() {
    location.href = "index.html";
};

// Quiz code

//Declared constant variables
const startButton = document.getElementById("start-btn");
const howToPlayButton = document.getElementById("open");
const contactUsButton = document.getElementById('contact-btn');
const nextButton = document.getElementById('next-btn');
const homeButton = document.getElementById('home-btn');
const quizQuestions = document.getElementById('quiz-questions');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');

// Declared let variables
let shuffledQuestions;
let currentQuestionIndex;

//Click event to start game
startButton.addEventListener('click', startGame);

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
    howToPlayButton.classList.add('hide');
    contactUsButton.classList.add('hide');
    homeButton.classList.add('hide');
    nextButton.classList.remove('hide');
    quizQuestions.classList.remove('hide');
    nextQuestion();
}

// Get's question and shuffles it
function nextQuestion() {
    resetQuiz();
    showQuestion(shuffledQuestions[currentQuestionIndex]);

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
    if (correct) {
        selectedButton.style.backgroundColor = "green";
    } else {
        selectedButton.style.backgroundColor = "red";
    }
    // Checks to see if player is on last question and if so gives them a play again option
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Play Again';
        startButton.classList.remove('hide');
        homeButton.classList.remove('hide');
    }
}

function incrementScore() {

}

function incrementIncorrectAnswer() {

}

// List of questions
const questions = [{
        question: 'How many planets do we have in our solar system?',
        answers: [{
                text: '8',
                correct: true
            },
            {
                text: '6',
                correct: false
            }, {
                text: '3',
                correct: false
            }, {
                text: '10',
                correct: false
            }
        ]
    }, {
        question: 'The closest planet to the Earth is?',
        answers: [{
                text: 'Venus',
                correct: true
            },
            {
                text: 'Pluto',
                correct: false
            }, {
                text: 'Mars',
                correct: false
            }, {
                text: 'Jupitor',
                correct: false
            }
        ]
    }, {
        question: 'Which planet is the hottest?',
        answers: [{
                text: 'Saturn',
                correct: false
            },
            {
                text: 'Earth',
                correct: false
            }, {
                text: 'Venus',
                correct: true
            }, {
                text: 'Mercury',
                correct: false
            }
        ]
    }, {
        question: 'Which planet is the coldest?',
        answers: [{
                text: 'Uranus',
                correct: false
            },
            {
                text: 'Earth',
                correct: false
            }, {
                text: 'Mars',
                correct: false
            }, {
                text: 'Neptune',
                correct: true
            }
        ]
    }

    , {
        question: 'Which planet is famous for having big rings?',
        answers: [{
                text: 'Earth',
                correct: false
            },
            {
                text: 'Saturn',
                correct: false
            }, {
                text: 'Mercury',
                correct: false
            }, {
                text: 'Jupitur',
                correct: true
            }
        ]
    }, {
        question: 'What planet is known as the red planet?',
        answers: [{
                text: 'Mars',
                correct: true
            },
            {
                text: 'Venus',
                correct: false
            }, {
                text: 'Uranus',
                correct: false
            }, {
                text: 'Neptune',
                correct: false
            }
        ]
    }


]
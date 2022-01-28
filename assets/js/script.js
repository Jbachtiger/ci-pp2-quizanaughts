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
const questionCounterText = document.getElementById('question-counter');
const totalCorrectAnswersText = document.getElementById('score-tally');
const maxQuestions = 15;
const InnerProgressBar = document.getElementById("inner-progress-bar");
const OuterProgressBar = document.getElementById("outer-progress-bar");

// Declared let variables
let shuffledQuestions;
let currentQuestionIndex;
let score = 0;
let questionCounter = 0;

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
    questionCounterText.classList.remove('hide');
    totalCorrectAnswersText.classList.remove('hide');
    OuterProgressBar.classList.remove('hide');
    nextQuestion();
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
    const answerButton = document.getElementsByClassName('btn');
    for (let i = 0; i < answerButton.length; i++) {
        answerButton[i].removeEventListener('click', selectAnswer);
    }
    if (correct) {
        selectedButton.style.backgroundColor = "green";
        score++;
    } else {
        selectedButton.style.backgroundColor = "red";
    }
    // Checks to see if player is on last question and if so gives them a play again option
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Play Again';
        startButton.addEventListener('click', startButton)
        score = 0, questionCounter = 0;
        startButton.classList.remove('hide');
        homeButton.classList.remove('hide');
    }
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
    },
    {
        question: 'Have humans ever walked on Mars?',
        answers: [{
                text: 'Yes',
                correct: false
            },
            {
                text: 'No',
                correct: true
            }
        ]
    },
    {
        question: 'Who was the first person to walk on the moon?',
        answers: [{
                text: 'Neil Armstrong ',
                correct: true
            },
            {
                text: 'Elon Musk',
                correct: false
            }, {
                text: 'William Shatner',
                correct: false
            }, {
                text: 'Tim Peake',
                correct: false
            }
        ]
    },
    {
        question: "What is the name of NASA's most famous space telescope?",
        answers: [{
                text: 'Strong Telescope',
                correct: false
            },
            {
                text: 'Space Telescope',
                correct: false
            }, {
                text: 'Hubble Space Telescope',
                correct: true
            }, {
                text: 'Astro Telescope',
                correct: false
            }
        ]
    },
    {
        question: "Earth is located in which galaxy?",
        answers: [{
                text: 'The Mars Galaxy',
                correct: false
            },
            {
                text: 'The Milky Way Galaxy',
                correct: false
            }, {
                text: 'The Snickers Galaxy',
                correct: true
            }, {
                text: 'The Stars Galaxy',
                correct: false
            }
        ]
    },
    {
        question: 'Is the sun a star or a planet?',
        answers: [{
                text: 'Star',
                correct: true
            },
            {
                text: 'Planet',
                correct: false
            }
        ]
    },
    {
        question: 'Have humans ever walked on Mars?',
        answers: [{
                text: 'Yes',
                correct: false
            },
            {
                text: 'No',
                correct: true
            }
        ]
    },
    {
        question: 'Is the planet Neptune bigger than Earth?',
        answers: [{
                text: 'Yes ',
                correct: true
            },
            {
                text: 'No',
                correct: false
            }

        ]
    },
    {
        question: 'Does the sun orbit the Earth?',
        answers: [{
                text: 'Yes',
                correct: false
            },
            {
                text: 'No',
                correct: true

            }
        ]
    },
    {
        question: 'Can humans breathe normally in space?',
        answers: [{
                text: 'Yes',
                correct: false
            },
            {
                text: 'No',
                correct: true

            }
        ]
    }

]
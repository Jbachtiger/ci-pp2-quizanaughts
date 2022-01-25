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

// Quiz code

//Declared constant variables
const startButton = document.getElementById("start-btn");
const howToPlayButton = document.getElementById("open");
const contactUsButton = document.getElementById ('contact-btn');
const nextButton = document.getElementById('next-btn');
const homeButton = document.getElementById('home-btn');
const quizQuestions = document.getElementById('quiz-questions');


//Click event to start game
startButton.addEventListener('click', startGame);

// Starts game
function startGame () {
    startButton.classList.add('hide');
    howToPlayButton.classList.add('hide');
    contactUsButton.classList.add('hide');
    homeButton.classList.remove('hide');
    nextButton.classList.remove('hide');
    quizQuestions.classList.remove('hide');
}

function nextQuestion () {

}

function selectAnswer () {

}

function incrementScore () {

}

function incrementIncorrectAnswer () {

}

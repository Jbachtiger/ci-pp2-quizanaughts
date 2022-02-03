// Modal - Credit Florin Pop Youtube video guide. Walkthrough helped create modal and code was used and modified for project.
const openModalButton = document.getElementById('open-modal-button');
const howToModalContainer = document.getElementById('how-to-modal-container');
const closeButtonInModal = document.getElementById('close');
const startButton = document.getElementById("start-btn");
const contactUsButton = document.getElementById('contact-btn');
const homeButton = document.getElementById('home-btn');


openModalButton.addEventListener('click', () => {
    howToModalContainer.classList.add('show');
});

closeButtonInModal.addEventListener('click', () => {
    howToModalContainer.classList.remove('show');
});

// // Contact us button
document.getElementById("contact-btn").onclick = function() {
    location.href = "contact.html";
};

// Home button
document.getElementById("home-btn").onclick = function() {
    location.href = "index.html";
};

//Click event to start game
startButton.addEventListener('click', startGame);
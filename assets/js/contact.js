// Prepopulating form fields
let fname = document.getElementById("name");
fname.value = "John Bachtiger";

let email = document.getElementById("email");
email.value = "jbachtiger@gmail.com";

let comments = document.getElementById("more-info");
comments.value = "Please let us know how we can help and what you thought of the quiz!";

// Handling form submission
let contactForm = document.getElementById("contact-form");
contactForm.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();
    let fullName = contactForm.elements['name'].value;
    let email = contactForm.elements['email'].value;
    let message = contactForm.elements['more-info'].value;

    let html = `
    <p>Hi ${fullName}!! Thanks so much for sending us a message and for your interest in our quiz! We'll respond to ${email} as soon as possible. For your reference, please see your submitted message below:</p>
    <p>${message}</p>
  `;

    let playerResponse = document.getElementById('playerResponse');
    playerResponse.innerHTML = html;
    playerResponse.style.display = 'block';
}
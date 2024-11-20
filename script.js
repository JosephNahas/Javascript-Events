let hoverButton = document.getElementById('hover-btn');
let hoverMessage = document.getElementById('hover-msg');

hoverButton.addEventListener('mouseenter', function(){
    hoverMessage.innerHTML = 'Hi there!';
});

hoverButton.addEventListener('mouseleave', function(){
    hoverMessage.innerHTML = 'Come back!';
});

let keyInput = document.getElementById('keyboard');
let keyGuess = document.getElementById('guess');

keyInput.addEventListener('keydown', function(event){
    
    if (event.key != ' ')
        keyGuess.innerHTML = event.key;
    else
        keyGuess.innerHTML = 'Spacebar';
});

let form = document.getElementById('form');
let submitMessage = document.getElementById('submit-msg');
let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');
let option1 = document.getElementById('1');
let option2 = document.getElementById('2');
let option3 = document.getElementById('3');

form.addEventListener('submit', function(event){

    event.preventDefault();

    if ((firstName.value != '' && firstName.value.trim().length != 0) && (lastName.value != '' && lastName.value.trim().length != 0) && (option1.checked || option2.checked || option3.checked))
        submitMessage.innerHTML = 'Form Submitted!';
    else
        submitMessage.innerHTML = 'Fill out the form first!';
});
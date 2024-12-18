
//---------------Hover Events--------------------
let hoverButton = document.getElementById('hover-btn');
let hoverMessage = document.getElementById('hover-msg');

hoverButton.addEventListener('mouseenter', function(){
    hoverMessage.innerHTML = 'Hi there!';
});

hoverButton.addEventListener('mouseleave', function(){
    hoverMessage.innerHTML = 'Come back!';
});

//---------------Keyboard events--------------------
let keyInput = document.getElementById('keyboard');
let keyGuess = document.getElementById('guess');

keyInput.addEventListener('keydown', function(event){
    
    if (event.key != ' ')
        keyGuess.innerHTML = event.key;
    else
        keyGuess.innerHTML = 'Spacebar';
});


//------------------Form events--------------------------
let form = document.getElementById('form');
let submitMessage = document.getElementById('submit-msg');
let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');
let option1 = document.getElementById('1');
let option2 = document.getElementById('2');
let option3 = document.getElementById('3');

form.addEventListener('submit', function(event){

    event.preventDefault();
// validate form by making sure the text inputs are not empty and are not comprised of only whitespace
    if ((firstName.value != '' && firstName.value.trim().length != 0) && (lastName.value != '' && lastName.value.trim().length != 0) && (option1.checked || option2.checked || option3.checked))
        submitMessage.innerHTML = 'Form Submitted!';
    else
        submitMessage.innerHTML = 'Fill out the form first!';
});

//------------------------Focus events---------------------
let focusInput = document.getElementById('focus');
let focusResult = document.getElementById('focus-result');

focusInput.addEventListener('focus', function() {
    focusResult.innerHTML = 'Input focused!';
});

focusInput.addEventListener('blur', function(){
    focusResult.innerHTML = 'Focus lost!';
});


//-----------------Event Delegation--------------------
let fruits = document.getElementById('fruits');
let favoriteFruit = document.getElementById('favorite-fruit');

fruits.addEventListener('click', function(event){
    if (event.target.tagName === 'BUTTON')
        favoriteFruit.innerHTML = event.target.innerHTML;
});
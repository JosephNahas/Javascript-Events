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
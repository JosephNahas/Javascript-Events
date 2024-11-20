let hoverButton = document.getElementById('hover-btn');
let hoverMessage = document.getElementById('hover-msg');

hoverButton.addEventListener('mouseenter', function(){
    hoverMessage.innerHTML = 'Hi there!';
});

hoverButton.addEventListener('mouseleave', function(){
    hoverMessage.innerHTML = 'Come back!';
});
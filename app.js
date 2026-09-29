'use strict';

const switcher = document.querySelector('.botao-tema');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('noite');
    
    if (document.body.classList.contains('noite')) {
        this.textContent = "☀️";
    } else {
        this.textContent = "🌙";
    }
    
    console.log('Classes atuais do body:', document.body.className);
});

import { salvarTema, carregarTema } from './storage.js';

export function iniciarTema() {
    const switcher = document.querySelector('.botao-tema');

    if (!switcher) return;

    const temaSalvo = carregarTema();

    if (temaSalvo === 'noite') {
        document.body.classList.add('noite');
        switcher.textContent = '☀️';
    }

    switcher.addEventListener('click', function() {
        document.body.classList.toggle('noite');

        if (document.body.classList.contains('noite')) {
            this.textContent = '☀️';
            salvarTema('noite');
        } else {
            this.textContent = '🌙';
            salvarTema('dia');
        }
    });
}

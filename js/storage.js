export function salvarTema(modo) {
    localStorage.setItem('tema', modo);
}

export function carregarTema() {
    return localStorage.getItem('tema');
}

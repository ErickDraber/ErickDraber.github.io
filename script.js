// Gerador de estrelas dinâmico
const sky = document.getElementById('sky');
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 3 + 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    sky.appendChild(star); // Adiciona a estrela ao céu
}

// Define a data de início
const dataInicial = new Date('2023-08-30T20:50:00');

// Função para calcular o tempo passado
function calcularTempoPassado() {
    const dataAtual = new Date();
    let anos = dataAtual.getFullYear() - dataInicial.getFullYear();
    let meses = dataAtual.getMonth() - dataInicial.getMonth();
    let dias = dataAtual.getDate() - dataInicial.getDate();
    let horas = dataAtual.getHours() - dataInicial.getHours();
    let minutos = dataAtual.getMinutes() - dataInicial.getMinutes();
    let segundos = dataAtual.getSeconds() - dataInicial.getSeconds();

    // Ajusta valores negativos
    if (segundos < 0) {
        minutos--;
        segundos += 60;
    }
    if (minutos < 0) {
        horas--;
        minutos += 60;
    }
    if (horas < 0) {
        dias--;
        horas += 24;
    }
    if (dias < 0) {
        meses--;
        const ultimoMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0);
        dias += ultimoMes.getDate();
    }
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    return { anos, meses, dias, horas, minutos, segundos };
}

// Atualiza o contador na tela
function atualizarContador() {
    const { anos, meses, dias, horas, minutos, segundos } = calcularTempoPassado();
    document.getElementById('contador').innerText = `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

atualizarContador();
setInterval(atualizarContador, 1000); // Atualiza o contador a cada segundo

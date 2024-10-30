// Defina a data inicial aqui
const dataInicial = new Date('2023-09-30'); // Substitua YYYY-MM-DD pela data desejada

function calcularTempoPassado() {
    const dataAtual = new Date();
    let anos = dataAtual.getFullYear() - dataInicial.getFullYear();
    let meses = dataAtual.getMonth() - dataInicial.getMonth();
    let dias = dataAtual.getDate() - dataInicial.getDate();
    let horas = dataAtual.getHours() - dataInicial.getHours();
    let minutos = dataAtual.getMinutes() - dataInicial.getMinutes();
    let segundos = dataAtual.getSeconds() - dataInicial.getSeconds();

    // Ajusta o valor de segundos, minutos, horas, dias e meses quando estão negativos
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
        const ultimoDiaDoMesPassado = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate();
        dias += ultimoDiaDoMesPassado;
    }
    
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    return { anos, meses, dias, horas, minutos, segundos };
}

function atualizarContador() {
    const { anos, meses, dias, horas, minutos, segundos } = calcularTempoPassado();
    document.getElementById('contador').innerText = `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

// Atualiza o contador ao carregar a página e depois a cada segundo
atualizarContador();
setInterval(atualizarContador, 1000);

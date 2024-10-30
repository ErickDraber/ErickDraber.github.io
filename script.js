// Defina a data inicial aqui
const dataInicial = new Date('2023-09-30'); // Substitua YYYY-MM-DD pela data que você vai fornecer

function calcularTempoPassado() {
    const dataAtual = new Date();
    let anos = dataAtual.getFullYear() - dataInicial.getFullYear();
    let meses = dataAtual.getMonth() - dataInicial.getMonth();
    let dias = dataAtual.getDate() - dataInicial.getDate();
    let horas = dataAtual.getHours() - dataInicial.getHours();
    let minutos = dataAtual.getMinutes() - dataInicial.getMinutes();
    let segundos = dataAtual.getSeconds() - dataInicial.getSeconds();

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

function atualizarContador() {
    const { anos, meses, dias, horas, minutos, segundos } = calcularTempoPassado();
    document.getElementById('contador').innerText = `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

atualizarContador();
setInterval(atualizarContador, 1000); // Atualiza a cada segundo

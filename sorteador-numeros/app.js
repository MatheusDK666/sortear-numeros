
function sortear() {
    quantidade = parseInt(document.getElementById('quantidade').value);
    de = parseInt(document.getElementById('de').value);
    ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numeroSorteado;

    if (quantidade <= 0) {
        alert('A quantidade de números a serem sorteados deve ser maior que zero!');
        return;
    }
    if (de > ate) {
        alert('O valor inicial deve ser menor que o valor final!');
        return;
    }
    if (quantidade > (ate - de + 1)) {
        alert('A quantidade de números a serem sorteados deve ser menor ou igual ao intervalo!');
        return;
    }
    if ( isNaN(quantidade) || isNaN(de) || isNaN(ate) ) {
        alert('Preencha todos os campos!');
        return;
    }
    for (let i = de; i <= ate; i++) {
        numeroSorteado = obterNumeroAleatorio(de, ate);
        if (sorteados.includes(numeroSorteado)) {
            continue;
        }
        if (sorteados.length === quantidade) {
            break;
        } 
        sorteados.push(numeroSorteado);
    }

    let textoNumeroSorteado = quantidade > 1 ? 'Números sorteados: ' : 'Número sorteado: ';
    document.getElementById('resultado').innerHTML = `${textoNumeroSorteado} ${sorteados.join(', ')}`;
    console.log(sorteados);
    alterarStatusBotao();
    desabilitarBotaoSortear();
}

function obterNumeroAleatorio(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
        botao.removeAttribute('disabled');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
        botao.setAttribute('disabled', 'disabled');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
    desabilitarBotaoSortear();
}

function desabilitarBotaoSortear() {
    let botao = document.getElementById('btn-sortear');
    if (botao.classList.contains('container__botao')){
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
        botao.setAttribute('disabled', 'disabled');
    } else {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
        botao.removeAttribute('disabled');
    }
}
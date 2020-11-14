import { IMC } from './modelos';

class Banco {
    constructor() {
        this.altura = null;
        this.listaImc = [];
    }
}

const banco = new Banco();

const salvarAltura = (altura) => {
    banco.altura = altura;
}

const getAltura = () => {
    return banco.altura;
}

const salvarIMC = (imc) => {
    // Armazenda a altura par facilitar novos lançamentos.
    salvarAltura(new Number(imc.altura));
    banco.listaImc.push(imc);
}

const excluirImc = (id, atualizaListaTela) => {
    let novaLista = banco.listaImc.filter((_imc) => _imc.id !== id);
    banco.listaImc = novaLista;
    if (atualizaListaTela) atualizaListaTela(banco.listaImc);
}

const getImc = (id) => {
    return (listarIMCs().filter((_imc) => { return _imc.id == `${id}` }))[0];
}

// Percorre os registros presentes no localStorage
// monta uma lista de objetos IMC com do dados de I.M.C.
// encontrados e retorna a lista
const listarIMCs = () => {

    // Object.keys(AsyncStorage)
    //     .filter(id !== "altura")
    //     .forEach(chave => {
    //         let imcStr = AsyncStorage.getItem(chave);
    //         let imcJSON = JSON.parse(imcStr);
    //         listaImc.push(imcJSON);
    //     });

    return banco.listaImc;
}

// Percorre a lista de I.M.C. e calcula e retorn
// a média do valor dos registros encontrados
const calcularMedia = () => {
    let soma = 0;

    let listaImc = listarIMCs();

    if (listaImc.length == 0) return 0;

    listaImc.forEach((imc) => { soma += imc.imc; });

    return (new Number(soma / listaImc.length));
}

// Calcula o valor que o gráfico deve indicar
// apesar das faixas possuírem laguras diferentes,
// o gráfico trata todas com a mesma largura para visualização
// respeitando os valores correspondentes.
const calcularValorGrafico = () => {
    let media = calcularMedia();
    let valorGrafico = 0;
    let numeroFaixa = null;

    if (media >= 40) {
        valorGrafico = 100;
        numeroFaixa = 6;
    } else {
        let baseFaixa = 0;
        let larguraFaixa = 0;
        let larguraColuna = 100 / 7;

        if (media >= 35) {
            baseFaixa = 35;
            larguraFaixa = 39.99 - baseFaixa;
            numeroFaixa = 5
        } else if (media >= 30) {
            baseFaixa = 30;
            larguraFaixa = 34.99 - baseFaixa;
            numeroFaixa = 4
        } else if (media >= 25) {
            baseFaixa = 25;
            larguraFaixa = 29.99 - baseFaixa;
            numeroFaixa = 3
        } else if (media >= 18.50) {
            baseFaixa = 18.50;
            larguraFaixa = 24.99 - baseFaixa;
            numeroFaixa = 2;
        } else if (media >= 17) {
            baseFaixa = 17;
            larguraFaixa = 18.49 - baseFaixa;
            numeroFaixa = 1;
        } else {
            larguraFaixa = 17;
            numeroFaixa = 0;
        }

        let valorIncremento = media - baseFaixa;
        let preenchimentoIncremento = ((valorIncremento / larguraFaixa) * larguraColuna);
        valorGrafico = ((numeroFaixa * larguraColuna) + preenchimentoIncremento);
    }

    return { valor: valorGrafico, faixa: numeroFaixa };
}

const cadastroValido = (peso, altura) => {
    let msgs = "";

    if (peso === "")
        msgs += "O campo 'Peso' deve ser preenchido!\n";

    if (altura === "")
        msgs += "O campo 'Altura' deve ser preenchido!\n";

    if (isNaN(new Number(peso))) {
        msgs += "O campo 'Peso' deve ser numérico!\n";
    } else if (new Number(peso) < 0) {
        msgs += "O campo 'Peso' deve ser positivo!\n";
    }

    if (isNaN(new Number(altura))) {
        msgs += "O campo 'Altura' deve ser numérico!\n";
    } else if (new Number(altura) < 0) {
        msgs += "O campo 'Altura' deve ser positivo!\n";
    } else if (new Number(altura) > 4) {
        msgs += "A altura deve ser dada em metros.\nExemplo: 1,75.\nA Altura deve ser, no máximo, 4m.";
    }

    return msgs;
}

export {
    salvarAltura,
    getAltura,
    salvarIMC,
    excluirImc,
    getImc,
    listarIMCs,
    cadastroValido,
    calcularMedia,
    calcularValorGrafico
}
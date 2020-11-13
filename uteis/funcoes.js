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
    atualizaListaTela(banco.listaImc);
}

const getImc = (id) => {
    return banco.listaImc.filter((_imc) => _imc.id === imc.id);
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
}
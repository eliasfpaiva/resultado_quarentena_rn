import { AsyncStorage } from 'react-native';
import { IMC } from './modelos';

// Percorre os registros presentes no localStorage
// monta uma lista de objetos IMC com do dados de I.M.C.
// encontrados e retorna a lista
const listarIMCs = () => {
    let listaImc = [];

    // Object.keys(AsyncStorage)
    //     .filter(id !== "altura")
    //     .forEach(chave => {
    //         let imcStr = AsyncStorage.getItem(chave);
    //         let imcJSON = JSON.parse(imcStr);
    //         listaImc.push(imcJSON);
    //     });

    return listaImc;
}

const salvarIMC = (setLista, imc) => {
    AsyncStorage.setItem(imc.id, JSON.stringify(imc));
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
    listarIMCs,
    salvarIMC,
    cadastroValido
}
import React from 'react';
import { IMC } from './modelos';

// Percorre os registros presentes no localStorage
// monta uma lista de objetos IMC com do dados de I.M.C.
// encontrados e retorna a lista
const listarIMCs = () => {
    let listaImc = [];

    Object.keys(localStorage)
        .filter(chave !== "altura")
        .forEach(chave => {
            let imcStr = localStorage.getItem(chave);
            let imcJSON = JSON.parse(imcStr);
            listaImc.push(imcJSON);
        });

    return listaImc;
}

export {
    listarIMCs
}
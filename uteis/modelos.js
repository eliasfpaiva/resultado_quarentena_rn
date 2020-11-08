// Classe para padronização do conteúdo de modal
class ConteudoModal {
    constructor(titulo, texto) {
        this.titulo = titulo;
        this.texto = texto;
    }
}

// Classe para padronização de dados I.M.C.
class IMC {

    constructor(peso, altura, sexo) {
        let data = new Date();
        // Armazenda a altura par facilitar novos lançamentos.
        localStorage.setItem('altura', new Number(altura));

        // Gera um ID a partir da data no momento do registro
        this.id = data.getTime();
        this.peso = new Number(peso);
        this.altura = new Number(altura);
        // Monta uma data no formato mais comum para exibição
        this.data = data.getDate() + '/' + ((data.getMonth() + 1).toString().padStart(2, '0')) + '/' + data.getFullYear();
        // Calcula e armazena o I.M.C.
        this.imc = new Number((new Number(this.peso) / (new Number(this.altura) * new Number(this.altura))).toFixed(2));
    }
}

export {
    ConteudoModal,
    IMC
}
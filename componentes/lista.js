import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { listarIMCs } from '../uteis/funcoes';
import balanca from '../assets/imagens/balanca_bonita.png';

export default function Lista() {
    const [valorGrafico, setValorGrafico] = useState(50);
    const [listaIMC, setListaIMC] = useState([]);

    useEffect(() => {
        let lista = ['asdfasf'];//listarIMCs();
        setListaIMC(lista);
    }, []);

    return (
        <React.Fragment>
            <View style={estilos.conteudo}>
                {listaIMC.length === 0 ?
                    <View style={estilos.listaVazia}>
                        <Image style={estilos.balanca} source={balanca} resizeMethod="resize" resizeMode="contain" />
                        <Text style={estilos.textoLabel}>Nenhum I.M.C. cadastrado!</Text>
                        <Text style={estilos.textoLabel}>Vamos iniciar o controle?</Text>
                    </View> :
                    <View style={estilos.lista}>
                        <View style={[estilos.listaLinha, estilos.listaCabecalho]}>
                            <Text style={[estilos.listaColuna, estilos.colunaCabecaolho]}>I.M.C.</Text>
                            <Text style={[estilos.listaColuna, estilos.colunaCabecaolho]}>Data</Text>
                            <Text style={[estilos.listaColuna, estilos.colunaCabecaolho]}></Text>
                        </View>
                        <ScrollView>
                        </ScrollView>
                    </View>
                }
            </View>
            <View style={estilos.rodape}>
                <TouchableOpacity style={estilos.botao} onPress={() => console.log('asdf')}>
                    <Text style={estilos.textoBotao}>Novo I.M.C.</Text>
                </TouchableOpacity>
                <Text style={estilos.labelMedia}>{valorGrafico ? `Média: ${valorGrafico}` : 'Média'}</Text>
                <View style={estilos.progress}>
                    <View style={[estilos.progressPreenchida, { flex: (valorGrafico / 100) }]}></View>
                    <View style={{ flex: (1 - (valorGrafico / 100)) }}></View>
                </View>
                <View style={estilos.graduacao}>
                    <Text style={estilos.graduacaoTexto}>M.A.P.</Text>
                    <Text style={estilos.graduacaoTexto}>AB.P.</Text>
                    <Text style={estilos.graduacaoTexto}>P.N.</Text>
                    <Text style={estilos.graduacaoTexto}>AC.P.</Text>
                    <Text style={estilos.graduacaoTexto}>O.1</Text>
                    <Text style={estilos.graduacaoTexto}>O.2</Text>
                    <Text style={estilos.graduacaoTexto}>O.3</Text>
                </View>
            </View>
        </React.Fragment>
    );
}

const estilos = StyleSheet.create({
    conteudo: {
        flex: 1
    },
    listaVazia: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        opacity: 0.3,
        paddingBottom: 50
    },
    listaCabecalho: {
        padding: 5,
        borderBottomColor: '#00f9f9',
        borderBottomWidth: 1
    },
    colunaCabecaolho: {
        fontSize: 20,
        fontWeight: "bold"
    },
    listaColuna: {
        flex: 1,
        textAlign: "center"
    },
    balanca: {
        width: '90%',
        flex: 1,
    },
    botao: {
        backgroundColor: '#2a9d8f',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 10,
        borderRadius: 10
    },
    textoLabel: {
        color: '#000',
        fontSize: 25,
        fontWeight: "bold"
    },
    listaLinha: {
        flexDirection: "row",
        width: '100%'
    },
    textoBotao: {
        color: '#5ff',
        fontSize: 20,
        fontWeight: "bold"
    },
    rodape: {
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#077",
    },
    progress: {
        flexDirection: "row",
        width: '90%',
        marginBottom: 2,
        height: 10,
        borderColor: "#00f9f9",
        borderWidth: 1,
        borderRadius: 5
    },
    progressPreenchida: {
        backgroundColor: "#00f9f9",
    },
    graduacao: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: "space-between",
    },
    graduacaoTexto: {
        fontSize: 20,
        flex: 1,
        textAlign: "center",
        height: 25
    },
    labelMedia: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 2
    }
});
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { listarIMCs, excluirImc, getAltura } from '../uteis/funcoes';
import balanca from '../assets/imagens/balanca_bonita.png';
import { ConteudoModal } from '../uteis/modelos';

export default function Lista(props) {
    const [valorGrafico, setValorGrafico] = useState(50);
    const [listaIMC, setListaIMC] = useState([]);

    const modais = [
        new ConteudoModal('Muito abaixo do peso', 'Abaixo de 17'),
        new ConteudoModal('Abaixo do peso', 'Entre 17 e 18,49'),
        new ConteudoModal('Peso normal', 'Entre 18,50 e 24,99'),
        new ConteudoModal('Acima do peso', 'Entre 25 e 29,99'),
        new ConteudoModal('Obesidade I', 'Entre 30 e 34,99'),
        new ConteudoModal('Obesidade II (Severa)', 'Entre 35 e 39,99'),
        new ConteudoModal('Obesidade III (Mórbida)', '40 ou mais'),
    ];

    const mostrarModal = (modal) => {
        props.setConteudoModal(modais[modal]);
        props.setMostrarModal(true);
    }

    const lista = () => {
        return listaIMC.map((imc) => {
            return <View style={[estilos.listaLinha, estilos.listaCabecalho]}>
                <Text style={[estilos.listaColuna, estilos.colunaCabecaolho]}>I.M.C.</Text>
                <Text style={[estilos.listaColuna, estilos.colunaCabecaolho]}>Data</Text>
                <Text style={[estilos.listaColuna, estilos.colunaCabecaolho]}>{listaIMC.length}</Text>
            </View>
        });
    }

    useEffect(() => { setListaIMC(listarIMCs()); }, []);

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
                        <View style={[estilos.listaCabecalho]}>
                            <Text style={[estilos.listaColuna, estilos.colunaCabecaolho]}>I.M.C.</Text>
                            <Text style={[estilos.listaColuna, estilos.colunaCabecaolho]}>Data</Text>
                            <Text style={[estilos.listaColuna, estilos.colunaCabecaolho, { fontSize: 15 }]}>{`Registros: ${listaIMC.length}`}</Text>
                        </View>
                        <ScrollView style={estilos.scroll}>
                            {listaIMC.map((_imc) => {
                                return <View key={_imc.id} style={estilos.listaLinha}>
                                    <Text style={[estilos.listaColuna, estilos.texto]}>{`${_imc.imc}`}</Text>
                                    <Text style={[estilos.listaColuna, estilos.texto]}>{`${_imc.data}`}</Text>
                                    <TouchableOpacity style={[estilos.botao, estilos.cancelar]} onPress={() => { excluirImc(_imc.id, setListaIMC); }}>
                                        <Text style={[estilos.texto, estilos.textoBotao]}>Excluir</Text>
                                    </TouchableOpacity>
                                </View>
                            }
                            )}
                        </ScrollView>
                    </View>
                }
            </View>
            <View style={estilos.rodape}>
                <TouchableOpacity style={estilos.botao} onPress={() => props.setMostrarTela(1)}>
                    <Text style={estilos.textoBotao}>Novo I.M.C.</Text>
                </TouchableOpacity>
                <Text style={estilos.labelMedia}>{valorGrafico ? `Média: ${valorGrafico}` : 'Média'}</Text>
                <View style={estilos.progress}>
                    <View style={[estilos.progressPreenchida, { flex: (valorGrafico / 100) }]}></View>
                    <View style={{ flex: (1 - (valorGrafico / 100)) }}></View>
                </View>
                <View style={estilos.graduacao}>
                    <Text style={estilos.graduacaoTexto} onPress={() => { mostrarModal(0); }}>M.A.P.</Text>
                    <Text style={estilos.graduacaoTexto} onPress={() => { mostrarModal(1); }}>AB.P.</Text>
                    <Text style={estilos.graduacaoTexto} onPress={() => { mostrarModal(2); }}>P.N.</Text>
                    <Text style={estilos.graduacaoTexto} onPress={() => { mostrarModal(3); }}>AC.P.</Text>
                    <Text style={estilos.graduacaoTexto} onPress={() => { mostrarModal(4); }}>O.1</Text>
                    <Text style={estilos.graduacaoTexto} onPress={() => { mostrarModal(5); }}>O.2</Text>
                    <Text style={estilos.graduacaoTexto} onPress={() => { mostrarModal(6); }}>O.3</Text>
                </View>
            </View>
        </React.Fragment>
    );
}

const estilos = StyleSheet.create({
    fundoPreto: {
        backgroundColor: "black",
    },
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
        borderBottomWidth: 1,
        flexDirection: "row",
        width: '100%',
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
        width: '100%',
        height: 50,
        justifyContent: "center",
        alignItems: "center",
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
    },
    cancelar: {
        backgroundColor: "#ef233c",
        borderColor: "#de122b",
        borderWidth: 1,
        marginHorizontal: 5,
    },
    texto: {
        fontSize: 20,
    },
    scroll: {
        paddingBottom: 5,
    }
});
import React, { useState } from 'react';
import { Text, View, StyleSheet, Linking, Modal, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import Corpo from './corpo';
import '../uteis/modelos';

export default function Principal() {
    const [mostrarModal, setMostrarModal] = useState(true);
    const [lista, setLista] = useState([]);
    const [conteudoModal, setConteudoModal] = useState(null);

    const acessaRelatorioOMS = () => {
        Linking.openURL("https://www.who.int/nutrition/publications/obesity/WHO_TRS_894/en/");
    }

    return (
        <React.Fragment>
            <Modal visible={mostrarModal} transparent={true}>
                <View style={estilos.fundoModal}>
                    <View style={estilos.janelaModal}>
                        <View style={estilos.linhaModal}>
                            <Text style={[estilos.texto, estilos.tituloModal]}>{conteudoModal?.titulo}</Text>
                        </View>
                        <View style={[estilos.linhaModal, estilos.conteudoModal]}>
                            <Text style={[estilos.texto, estilos.textoModal]}>{conteudoModal?.texto}</Text>
                        </View>
                        <View style={estilos.linhaModal}>
                            <TouchableOpacity style={estilos.botao} onPress={() => { setMostrarModal(!mostrarModal) }}>
                                <Text style={[estilos.texto, estilos.textoBotao]}>Voltar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={estilos.fundo}>
                <View style={estilos.cabecalho}>
                    <Text style={estilos.titulo}>RESULTADOS DA QUARENTENA</Text>
                    <Text style={estilos.alerta}>Classificação de I.M.C. obtida no relatório da O.M.S.</Text>
                    <Text style={estilos.alerta}>Obesiy: Preventing and managing the global epidemic, para acessa-lo</Text>
                    <Text style={[estilos.alerta, estilos.link]} onPress={acessaRelatorioOMS}>clique aqui.</Text>
                    <Text style={estilos.alerta}>OBS.: ESTA APLICAÇÃO NÃO SUBSTITUI UM DIAGNÓSTICO MÉDICO</Text>
                </View>
                <Corpo lista={lista} />
            </View>
        </React.Fragment>
    );
}

const estilos = StyleSheet.create({
    fundo: {
        flex: 1,
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        marginTop: Constants.statusBarHeight,
    },
    cabecalho: {
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#077",
        paddingTop: 2,
        paddingBottom: 5
    },
    titulo: {
        fontSize: 25
    },
    tituloModal: {
        fontSize: 35,
        textAlign: "center"
    },
    alerta: {
        fontSize: 12
    },
    link: {
        textDecorationLine: "underline",
        color: "#0bb",
        fontSize: 15
    },
    fundoModal: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    janelaModal: {
        flex: 0.3,
        backgroundColor: '#0ff',
        width: '60%',
        maxWidth: 300,
        borderRadius: 10,
        borderColor: '#0aa',
        borderWidth: 3,
        justifyContent: 'space-evenly',
        padding: 10
    },
    botao: {
        flex: 0.7,
        width: '50%',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderRadius: 10,
        borderColor: '#0aa',
        borderWidth: 3,
    },
    texto: {
        color: '#2a9d8f',
    },
    textoModal: {
        fontSize: 25,
        textAlign: "center"
    },
    textoBotao: {
        fontSize: 30,
        fontWeight: "bold"
    },
    conteudoModal: {
        borderBottomColor: '#2a9d8f',
        borderBottomWidth: 1,
        borderTopColor: '#2a9d8f',
        borderTopWidth: 1,
    },
    linhaModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
import React from 'react';
import { Text, View, StyleSheet, Linking } from 'react-native';
import Constants from 'expo-constants';
import CorpoLista from './corpoLista';

export default function Principal() {
    return (
        <View style={estilos.fundo}>
            <View style={estilos.cabecalho}>
                <Text style={estilos.titulo}>RESULTADOS DA QUARENTENA</Text>
                <Text style={estilos.alerta}>Classificação de I.M.C. obtida no relatório da O.M.S.</Text>
                <Text style={estilos.alerta}>Obesiy: Preventing and managing the global epidemic, para acessa-lo</Text>
                <Text style={[estilos.alerta, estilos.link]} onPress={() => Linking.openURL("https://www.who.int/nutrition/publications/obesity/WHO_TRS_894/en/")}>clique aqui.</Text>
                <Text style={estilos.alerta}>OBS.: ESTA APLICAÇÃO NÃO SUBSTITUI UM DIAGNÓSTICO MÉDICO</Text>
            </View>
            <CorpoLista />
        </View>
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
    alerta: {
        fontSize: 12
    },
    link: {
        textDecorationLine: "underline",
        color: "#0bb",
        fontSize: 15
    }
});
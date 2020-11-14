import React, { useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import balanca from '../assets/imagens/balanca_bonita.png';

export default function QrCode({ setMostrarTela }) {
    useEffect(() => setMostrarTela(0), []);
    return (
        <View style={estilos.painel}>
            {/* <Image style={estilos.balanca} source={balanca} resizeMethod="resize" resizeMode="contain" />
            <View style={estilos.linha}>
                <TouchableOpacity style={[estilos.botao, estilos.voltar]} onPress={() => { console.log("asdfas") }}>
                    <Text style={[estilos.texto, estilos.textoBotaoVoltar]}>Voltar</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    );
}

const estilos = StyleSheet.create({
    painel: {
        flex: 1,
        width: '100%',
        alignItems: "center",
    },
    linha: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        width: '100%',
        paddingHorizontal: 20,
        flex: 1
    },
    balanca: {
        width: '90%',
        flex: 2,
    },
    texto: {
        fontSize: 30,
    },
    botao: {
        flex: 0.48,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        height: 45,
        marginTop: 40
    },
    voltar: {
        backgroundColor: "#00f5f5",
        borderColor: "#088",
        borderWidth: 1
    },
    textoBotaoVoltar: {
        color: '#2a9d8f',
        textAlign: "center",
        fontWeight: "bold",
        flex: 1
    }
});
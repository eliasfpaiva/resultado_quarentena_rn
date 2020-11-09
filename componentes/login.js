import React from 'react';
import Constants from 'expo-constants';
import * as LocalAuthentication from 'expo-local-authentication';
import { Button, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Logo from '../assets/icones/android-icon-192x192.png';

export default function Login({ setAutenticado }) {
    const autenticar = async () => {
        let auted = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Autorização',
        });
        if (auted.success) setAutenticado(true);
    };

    return (
        <View style={estilos.fundo}>
            <Image source={Logo} />
            <View style={estilos.titulo}>
                <Text style={estilos.texto}>Resultados da</Text>
                <Text style={estilos.texto}>Quarentena</Text>
            </View>
            <TouchableOpacity style={estilos.botao} onPress={autenticar}>
                <Text style={[estilos.texto, estilos.textoVerde]}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const estilos = StyleSheet.create({
    fundo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: Constants.statusBarHeight,
    },
    titulo: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 60
    },
    texto: {
        fontSize: 35,
        fontWeight: "bold"
    },
    botao: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#088",
        borderColor: "#077",
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 60,
        borderRadius: 20
    },
    textoVerde: {
        color: '#0ff'
    }
});
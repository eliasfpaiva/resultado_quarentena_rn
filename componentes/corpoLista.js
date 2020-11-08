import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default function CorpoLista() {
    return (
        <View style={estilos.corpo}>
            <View style={estilos.conteudo}></View>
            <View style={estilos.rodape}></View>
        </View>
    );
}

const estilos = StyleSheet.create({
    corpo: {
        flex: 1
    }
})
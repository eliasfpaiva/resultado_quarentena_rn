import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

export default function CorpoLista() {
    const [valorGrafico, setValorGrafico] = useState(50);

    return (
        <View style={estilos.corpo}>
            <View style={estilos.conteudo}></View>
            <View style={estilos.rodape}>
                <Text style={estilos.labelMedia}>{valorGrafico ? `Média: ${valorGrafico}` : 'Média'}</Text>
                <View style={estilos.progress}>
                    <View style={[estilos.progressPreenchida, { flex: (valorGrafico / 100) }]}></View>
                    <View style={{ flex: (1 - (valorGrafico / 100)) }}></View>
                </View>
                {/* <Progress.Bar progress={valorGrafico ? valorGrafico / 100 : null} style={estilos.progress} color={'rgba(0, 250, 250, 1)'} indeterminate={valorGrafico === null} indeterminateAnimationDuration={2000} /> */}
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
        </View>
    );
}

const estilos = StyleSheet.create({
    corpo: {
        flex: 1,
        width: '100%',
    },
    conteudo: {
        flex: 1
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
        marginBottom: 2,
    },
    graduacaoTexto: {
        fontSize: 20
    },
    labelMedia: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 2
    }
})
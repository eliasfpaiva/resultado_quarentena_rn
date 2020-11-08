import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Cadastro from './cadastro';
import Lista from './lista';

export default function Corpo() {
    const [mostrarTela, setMostrarTela] = useState(1);

    return (
        <View style={estilos.corpo}>
            {
                mostrarTela === 0 ? <Lista /> :
                    (mostrarTela === 1 ? <Cadastro></Cadastro> : (
                        (mostrarTela === 2 ? <View></View> : (
                            <View></View>
                        )
                        )
                    )
                    )
            }
        </View>
    );
}

const estilos = StyleSheet.create({
    corpo: {
        flex: 1,
        width: '100%',
    },
})
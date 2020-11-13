import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Cadastro from './cadastro';
import Visualizacao from './visualizacao';
import Lista from './lista';
import QrCode from './qrCode';

export default function Corpo(props) {
    const [mostrarTela, setMostrarTela] = useState(0);
    const [imcSelecionado, setImcSelecionado] = useState();

    useEffect(() => { setMostrarTela(2) }, [imcSelecionado]);

    return (
        <View style={estilos.corpo}>
            {
                mostrarTela === 0 ? <Lista setMostrarTela={setMostrarTela} setImcSelecionado={setImcSelecionado} {...props} /> :
                    (mostrarTela === 1 ? <Cadastro setMostrarTela={setMostrarTela} {...props} /> : (
                        (mostrarTela === 2 ? <Visualizacao setMostrarTela={setMostrarTela} imcSelecionado={imcSelecionado} /> : (
                            <QrCode setMostrarTela={setMostrarTela} />
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
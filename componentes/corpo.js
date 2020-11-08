import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Lista from './lista';

export default function Corpo() {
    return (
        <View style={estilos.corpo}>
            <Lista />
        </View>
    );
}

const estilos = StyleSheet.create({
    corpo: {
        flex: 1,
        width: '100%',
    },
})
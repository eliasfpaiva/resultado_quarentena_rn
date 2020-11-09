import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { salvarIMC, cadastroValido } from '../uteis/funcoes';
import { ConteudoModal, IMC } from '../uteis/modelos';

export default function Cadastro(props) {
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();

    const salvar = () => {
        let erros = cadastroValido(peso, altura);
        if (erros.length === 0) {
            salvarIMC(null, new IMC(peso, altura));
        } else {
            props.setConteudoModal(new ConteudoModal('Preenchimento inválido', erros));
            props.setMostrarModal(true);
        }
        // voltar();
    }

    const voltar = () => {
        props.setMostrarTela(0);
    }

    return (
        <React.Fragment>
            <View style={estilos.painel}>
                <View style={estilos.linha}>
                    <Text style={[estilos.label, estilos.texto]}>Peso:</Text>
                    <TextInput style={[estilos.entrada, estilos.texto]} placeholder="kg" keyboardType="number-pad" maxLength={5}
                        defaultValue={peso} onChangeText={(peso) => setPeso(peso.replace(',', '.'))} />
                </View>
                <View style={estilos.linha}>
                    <Text style={[estilos.label, estilos.texto]}>Altura:</Text>
                    <TextInput style={[estilos.entrada, estilos.texto]} placeholder="m" keyboardType="number-pad" maxLength={5}
                        defaultValue={altura} onChangeText={(altura) => setAltura(altura.replace(',', '.'))} />
                </View>
                <View style={estilos.linha}>
                    <TouchableOpacity style={[estilos.botao, estilos.cancelar]} onPress={voltar}>
                        <Text style={[estilos.texto, estilos.textoBotao]}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[estilos.botao, estilos.salvar]} onPress={salvar}>
                        <Text style={[estilos.texto, estilos.textoBotao]}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </React.Fragment>
    );
}

const estilos = StyleSheet.create({
    painel: {
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 10
    },
    linha: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        height: 70,
        width: '100%',
        paddingHorizontal: 20
    },
    entrada: {
        textAlign: "center",
        flex: 2,
        borderColor: "#00f9f9",
        borderWidth: 1,
        height: "90%",
        borderRadius: 10
    },
    label: {
        textAlign: "center",
        flex: 1
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
        height: 45
    },
    textoBotao: {
        color: "#00F9F9",
        textAlign: "center",
        fontWeight: "bold",
        flex: 1
    },
    cancelar: {
        backgroundColor: "#ef233c",
        borderColor: "#de122b",
        borderWidth: 1
    },
    salvar: {
        backgroundColor: "#2a9d8f",
        borderColor: "#198c7e",
        borderWidth: 1
    }
});
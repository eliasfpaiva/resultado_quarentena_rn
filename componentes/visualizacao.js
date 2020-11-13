import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { excluirImc, getImc, listarIMCs } from '../uteis/funcoes';

export default function Visualizacao({ setMostrarTela, imcSelecionado }) {
    const [imc, setImc] = useState();

    useEffect(() => {
        let _imc = getImc(imcSelecionado);
        setImc(_imc);
    }, []);

    const excluir = () => {
        excluirImc(imc.id);
        voltar();
    }

    const voltar = () => {
        setMostrarTela(0);
    }

    const toString = (valor) => {
        return JSON.stringify(valor);
    }

    return (
        <React.Fragment>
            <View style={estilos.painel}>
                <View style={estilos.linha}>
                    <Text style={[estilos.label, estilos.texto]}>Peso:</Text>
                    <View style={estilos.campo}>
                        {/* <Text style={[estilos.entrada, estilos.texto]}>{toString(imc.peso)}</Text> */}
                    </View>
                </View>
                <View style={estilos.linha}>
                    <Text style={[estilos.label, estilos.texto]}>Altura:</Text>
                    <View style={estilos.campo}>
                        {/* <Text style={[estilos.entrada, estilos.texto]}>{imc.altura}</Text> */}
                    </View>
                </View>
                <View style={[estilos.linha, estilos.linhaData]}>
                    {/* <Text style={estilos.textoData}>Data: {imc.data}</Text> */}
                </View>
                <View style={[estilos.linha, estilos.linhaIMC]}>
                    {/* <Text style={estilos.texto}>I.M.C.: {imc.imc}</Text> */}
                </View>
                <View style={estilos.linha}>
                    <TouchableOpacity style={[estilos.botao, estilos.cancelar]} onPress={() => { excluir() }}>
                        <Text style={[estilos.texto, estilos.textoBotao]}>Excluir</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[estilos.botao, estilos.voltar]} onPress={() => { voltar() }}>
                        <Text style={[estilos.texto, estilos.textoBotaoVoltar]}>Voltar</Text>
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
    linhaData: {
        justifyContent: "center",
        height: 30,
    },
    linhaIMC: {
        justifyContent: "center",
        height: 50,
    },
    campo: {
        flex: 2,
        borderColor: "#00f9f9",
        borderWidth: 1,
        height: "90%",
        borderRadius: 10,
        justifyContent: "center",
        alignContent: "center"
    },
    entrada: {
        textAlign: "center",
    },
    label: {
        textAlign: "center",
        flex: 1
    },
    texto: {
        fontSize: 30,
    },
    textoData: {
        fontSize: 20,
        marginTop: 10
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
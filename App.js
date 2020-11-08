import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './componentes/login';
import Principal from './componentes/principal';
import * as LocalAuthentication from 'expo-local-authentication';

export default function App() {
  const [compativel, setCompativel] = useState(false);
  const [autenticavel, setAutenticavel] = useState(false);
  const [autenticado, setAutenticado] = useState(false);

  async function verificaCompatibilidade() {
    let comp = await LocalAuthentication.hasHardwareAsync();
    if (comp) setCompativel(true);
    let aut = await LocalAuthentication.isEnrolledAsync();
    if (aut) setAutenticavel(true);
  }

  useEffect(() => {
    verificaCompatibilidade();
  }, []);

  return (
    <View style={styles.container}>
      { !compativel || !autenticavel || autenticado ?
        (<Principal />) :
        (<Login setAutenticado={setAutenticado} />)
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0bb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

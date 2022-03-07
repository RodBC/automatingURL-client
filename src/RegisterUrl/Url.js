import React, { useState, useEffect } from 'react';
import { View, Image, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

import logo from '../../assets/logo.png';

export function SetURL({ navigation }) {
  //Nome, base url e imagem url


  const [NomeServidor, setNome] = useState('');
  const [BaseURL, setBaseURL] = useState('');
  const [BaseIMAGE, setBaseIMAGE] = useState('');

  async function handleSubmit() {
    console.log(NomeServidor)
    console.log(BaseURL)
    console.log(BaseIMAGE)
    }

  // async function handleAsyncStorage(){
  //   //armazenar valor no cache
  //   await AsyncStorage.setItem("@Nome", NomeServidor)
  //   await AsyncStorage.setItem("@Url", BaseURL)
  //   await AsyncStorage.setItem("@Imagem", BaseIMAGE)
  //   getData();
  // }

  // async function getData(){
  //   const NomeAsync = await AsyncStorage('@Nome')
  //   if (NomeAsync){
  //     setNome(NomeAsync)
  //   }
  //   const UrlAsync = await AsyncStorage('@Url')
  //   if (UrlAsync){
  //     setBaseURL(UrlAsync)
  //   }
  //   const ImagemAsync = await AsyncStorage('@Imagem')
  //     if (ImagemAsync){
  //       setBaseIMAGE(ImagemAsync)
  //       }
  //   }

  //   useEffect(() => {
  //     getData()
  //   }, [])
  

  // useEffect(() => {
  //   AsyncStorage.getItem('user').then(user => {
  //     if (user) {
  //       navigation.navigate('List');
  //     }
  //   })
  // }, []);

  // async function handleSubmit() {

  //   await AsyncStorage.setItem('BaseURL', BaseURL);
  //   await AsyncStorage.setItem('BaseIMAGE', BaseIMAGE);

  //   navigation.navigate('List');
  // }

    // await AsyncStorage.setItem('BaseURL', BaseURL)
    // await AsyncStorage.setItem('BaseIMAGE', BaseIMAGE)

    // await AsyncStorage.getItem('BaseURL')
  

  return (
    <KeyboardAvoidingView enabled={Platform.OS === 'ios'} behavior="padding" style={styles.container}>
      <View>
        <Image source={logo} />
        <View style={styles.form}>
          <Text style={styles.label}>Nome do Servidor *</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome do Servidor"
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
            value={NomeServidor}
            onChangeText={setNome}
          />
          <Text style={styles.label}>Sua URL *</Text>
          <TextInput
            style={styles.input}
            placeholder="Sua URL"
            placeholderTextColor="#999"
            autoCapitalize="none"
            autoCorrect={false}
            value={BaseURL}
            onChangeText={setBaseURL}
          />
          <Text style={styles.label}>Sua ImagemURL *</Text>
          <TextInput
            style={styles.input}
            placeholder="URL da sua Imagem"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            value={BaseIMAGE}
            onChangeText={setBaseIMAGE}
          />
          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Salvar Credenciais</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30,
  },

  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  },

  button: {
    height: 42,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
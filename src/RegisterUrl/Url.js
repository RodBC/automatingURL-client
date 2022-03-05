import React, { useState, useEffect } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import {AsyncStorage} from '@react-native-community/async-storage'

import logo from '../../assets/logo.png';

export function SetURL({ navigation }) {
  //base url e imagem url


  const [BaseURL, setBaseURL] = useState('');
  const [BaseIMAGE, setBaseIMAGE] = useState('');

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


return (
        <View>
          <Image source={logo} />
    
          <View style={styles.form}>
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
    {/* onPress={handleSubmit} */}
            <TouchableOpacity  style={styles.button}>
              <Text style={styles.buttonText}>Salvar credenciais</Text>
            </TouchableOpacity>
          </View>
    </View>
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
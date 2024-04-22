import React, {useState} from 'react';
import { Button, View, Pressable, Text } from 'react-native';

import { styles } from './BatButtonStyle';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../services/passService';

import * as Clipboard from 'expo-clipboard';


export function BatButton() {
  const [pass, setPass] = useState('')

  function handleGenButton(){
    let token = generatePass()
    setPass(token)
  }

  function handleCopy(){
    Clipboard.setStringAsync(pass)
  }

  return (
    < >
        <BatTextInput pass={pass}/>
        <Pressable 
          style = {styles.button}
          onPress={handleGenButton}
        >
          <Text style={styles.text}> 🎲 Gerar  </Text>
        </Pressable>
        <Pressable 
          style = {styles.button}
          onPress={handleCopy}
        >
          <Text style={styles.text}> 🐱 Copiar</Text>
        </Pressable>
    </>
  );
}
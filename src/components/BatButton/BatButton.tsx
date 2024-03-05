import React from 'react';
import { Button, View, Pressable, Text } from 'react-native';

import { styles } from './BatButtonStyle';

export function BatButton() {
  return (
    <View >
        
        <Pressable 
          style = {styles.button}
          onPress={()=>{"fui pressionado"}}
        >
          <Text style={styles.text}>Gerar</Text>
        </Pressable>
        <Pressable 
          style = {styles.button}
          onPress={()=>{console.log("fui pressionado")}}
        >
          <Text style={styles.text}>🐱 Copiar</Text>
        </Pressable>
    </View>
  );
}
import React from 'react';
import { Button, View } from 'react-native';

import { styles } from './BatButtonStyle';

export function BatButton() {
  return (
    <View style = {styles.container}>
        <Button
            title = "Gerar Senha"
            color='#E4BB3D'
            
        />
    </View>
  );
}
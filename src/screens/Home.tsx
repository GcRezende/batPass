import React from 'react';
import { View} from 'react-native';
import { StatusBar } from 'expo-status-bar';



import { styles } from './HomeStyle';
import { BatLogo } from '../components/BatLogo/BatLogo';
import { BatTextInput } from '../components/BatTextInput/BatTextInput';
import { BatButton } from '../components/BatButton/BatButton';


export function Home() {
  return (
    <View style={styles.appContainer}>
        <View style={styles.logoContainer}>
            <BatLogo/>
        </View>
        <View style={styles.inputContainer}>
            <BatTextInput/>
            
        </View>
        <BatButton/>
       <StatusBar style="light"/>
    </View>
  );
}
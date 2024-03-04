import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    appContainer: 
    {
      flex: 1,
      backgroundColor: '#222222',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    logoContainer:
    {
        backgroundColor: '#888888',
        flexDirection:'column',
        borderBlockColor: 'black',
        borderWidth: 3,
        justifyContent:'center',
        alignSelf:'center',
        padding:27,
        marginBottom:33,
    },

    inputContainer:
    {
      width:'75%',
      borderColor: 'white',
      borderWidth: 2,
    }
  });
  
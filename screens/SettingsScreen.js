import { View, Text, StyleSheet} from 'react-native';
import React from 'react';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/core'
import { Button } from 'react-native-elements';
import { theme } from '../core/theme';

export default function settings() {

  const navigation = useNavigation()

  const logout = ()=> {
    auth
    .signOut()
    .then(() =>{
        navigation.replace("StartScreen")
    })
    .catch(error => alert(error.message))
    }

  return (
    <View style={styles.container}>
        <View style={styles.containerCenter}>
            <Text style={styles.text}>Email: {auth.currentUser?.email}</Text>
            <Button style={styles.button}
                title="Logout" 
                onPress={logout}
                buttonStyle={{backgroundColor: theme.colors.primary}}
            >
            Log out
            </Button>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black', 
    },
    containerCenter: {
        flex: 1,
        color: 'white',
        backgroundColor: 'black',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    text:{
        color: 'white'
    },
    button: {
        padding: 20,
    },
});
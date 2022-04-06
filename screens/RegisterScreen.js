import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { auth } from '../firebase'
import { theme } from '../core/theme'
import { useNavigation } from '@react-navigation/core'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
          if(user) {
              navigation.replace("Home")
          }
      })
      return unsubscribe
  }, [])

  const inscription =() => {
      auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials =>{
          const user = userCredentials.user;
          console.log("Inscrit en tant que ",user.email);
      })
      .catch(error => alert(error.message))
  }
    return (
      <Background>
        <Logo />
        <Header>Create Account</Header>
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email}
          onChangeText={text => setEmail(text)}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          returnKeyType="done"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <Button
          mode="contained"
          onPress={inscription}
          style={{ marginTop: 24 }}
        >
          Sign Up
        </Button>
        <View style={styles.row}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </Background>
    )
  }

export default Register
  

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})

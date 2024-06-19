import React, { useState } from 'react'
import { Text, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { TextInputComponent } from '../../Components/TextInput';
import { ButtonComponents } from '../../Components/ButtonComponents copy';
import { estilo } from './style';

export default function Login() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmail = (value: string) => {
    setEmail(value)
    console.log('Valor do email: ' + value)
  }

  const handlePassword = (value: string) => {
    setPassword(value)
    console.log('Valor da senha: ', value);
  }

  const handleLogin = () => {
    if(email) {

    } else {
      Alert.alert("Credenciais invalidas!")
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <View style={estilo.container}>

    
      <Text style={estilo.title}> NETFLIX </Text>

      <TextInputComponent
        recebendoFuncao={handleEmail}
        recebendoValue={email}
        recebendoPlaceHolder=" Digite seu email: "
      />
    
      <TextInputComponent
        recebendoFuncao={handlePassword}
        recebendoValue={password}
        recebendoPlaceHolder=" Digite sua senha: "
        recebendoTipoDoInput={true}
      />
      <ButtonComponents title=' ENTRAR ' recebendoFuncao={handleLogin} />

    </View>
  </TouchableWithoutFeedback>

  )
};

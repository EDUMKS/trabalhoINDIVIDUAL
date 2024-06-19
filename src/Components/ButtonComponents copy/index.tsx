import React from 'react';
import {  Text, TouchableOpacity } from 'react-native'
import { estilobotao } from './style';
import { PropsButton } from './type';

export function ButtonComponents({recebendoFuncao, title}: PropsButton) {

  return (
    <>
      <TouchableOpacity style={estilobotao.button} onPress={recebendoFuncao}>

        <Text style={estilobotao.textButton}>
          {title}
        </Text>
      </TouchableOpacity>
    </>
  )
}
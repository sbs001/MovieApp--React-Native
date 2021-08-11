import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BackgroundStyle } from './BackgroundStyle';


interface Props {
  children: JSX.Element | JSX.Element[]
}

export default function Background({ children }: Props) {

  return (
    <View style={BackgroundStyle.ctn} >
      <LinearGradient
       colors={['gray','black','white']}
        style={{...StyleSheet.absoluteFillObject}}
        end={{x:0.7,y:0.7}}
      />
      {children}
    </View>
  )
}
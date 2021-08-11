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
       colors={['purple','grey',]}
        style={{...StyleSheet.absoluteFillObject}}
      />
      {children}
    </View>
  )
}
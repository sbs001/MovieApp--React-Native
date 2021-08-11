import React from 'react';
import { Image, Text, View } from 'react-native';
import { Cast } from '../../interfaces/MovieCredits';
import { CastItemStyle } from './CastItemStyle';


interface Props {
  actor: Cast,
}

export default function CastItem({ actor }: Props) {

  const uri = "https://image.tmdb.org/t/p/w500" + actor.profile_path;

  return (
    <View style={CastItemStyle.ctn}>
      <Image source={{ uri }} style={CastItemStyle.img}/>

      <View>
        <Text style={CastItemStyle.title}>{actor.name}</Text>
        <Text style={CastItemStyle.character}>{actor.character}</Text>
      </View>
    </View>
  )
}
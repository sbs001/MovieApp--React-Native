import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Cast } from '../../interfaces/MovieCredits';
import { MovieDetailFull } from '../../interfaces/MovieDetail';
import { Ionicons } from '@expo/vector-icons';
import { MovieDetailStyle } from './MovieDetailStyles';
import CastItem from '../Casting/CastItem';


interface Props {
  data: MovieDetailFull,
  cast: Cast[],
}

export default function MovieDetail({ cast, data }: Props) {

  return (
    <View style={MovieDetailStyle.ctn}>
      <View style={MovieDetailStyle.viewVote}>
        <Ionicons name='star-outline' color='grey' size={20} style={{ marginRight: 10 }} />
        <Text>{data.vote_average}</Text>

        <Text> - {data.genres.map(genre => genre.name).join(', ')}</Text>
      </View>

      <Text style={MovieDetailStyle.title}>Resume</Text>
      <Text style={{ fontSize: 16 }}>{data.overview}</Text>

      <Text style={MovieDetailStyle.title}>Budget</Text>
      <Text>USD {data.budget}</Text>

      <Text style={MovieDetailStyle.title}>Actors</Text>
      <FlatList
        data={cast}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <CastItem actor={item} />}
        horizontal
        style={MovieDetailStyle.flatList}
      />
    </View>
  )
}
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Movie } from '../../interfaces/ApiResponse';
import MovieCard from '../MovieCard/MovieCard';
import { HorizontalSliderStyles } from './HorizontalSliderStyles';

interface Props {
  title?: string,
  movies: Movie[],
}


export default function HorizontalSlider({ title, movies }: Props) {

  return (
    <View style={!title ? { height: 210 } : HorizontalSliderStyles.flatListCtn}>

      {title && <Text style={HorizontalSliderStyles.title}>{title}</Text>}

      <FlatList
        data={movies}
        renderItem={({ item }: any) => <MovieCard movie={item} width={140} height={200} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Movie } from '../../interfaces/ApiResponse';
import { MovieCardStyle } from './MovieCardStyles';
import { useNavigation } from '@react-navigation/native';

interface Props {
  movie: Movie;
  width?: number,
  height?: number
}

export default function MovieCard({ movie, width, height }: Props) {

  const uri = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  const nav = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => nav.navigate('Detail', movie)}
      activeOpacity={0.8}
    >
      <View style={[width ? { width, height } : MovieCardStyle.viewImage, MovieCardStyle.separation]}>
        <Image source={{ uri }} style={MovieCardStyle.image} />
      </View>
    </TouchableOpacity >
  )
}
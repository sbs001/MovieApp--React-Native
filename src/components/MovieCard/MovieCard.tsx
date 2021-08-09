import React from 'react';
import { Image, View } from 'react-native';
import { Movie } from '../../interfaces/nowPlaying';
import { MovieCardStyle } from './MovieCardStyles';

interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {

  const uri = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <View style={MovieCardStyle.viewImage}>
      <Image source={{ uri }} style={MovieCardStyle.image} />
    </View>
  )
}
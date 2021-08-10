import React from 'react';
import { Image, View } from 'react-native';
import { Movie } from '../../interfaces/ApiResponse';
import { MovieCardStyle } from './MovieCardStyles';

interface Props {
  movie: Movie;
  width?: number,
  height?: number
}

export default function MovieCard({ movie, width, height }: Props) {

  const uri = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <View style={ [width ? {width, height}: MovieCardStyle.viewImage, MovieCardStyle.separation] }>
      <Image source={{ uri }} style={MovieCardStyle.image} />
    </View >
  )
}
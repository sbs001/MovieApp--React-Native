import React from "react";
import { Dimensions } from "react-native";
import { ActivityIndicator, Text, View } from "react-native";
import Carousel from 'react-native-snap-carousel';
import MovieCard from "../../components/MovieCard/MovieCard";
import { useMovies } from "../../hooks/useMovies";



const windowWidth = Dimensions.get('window').width

export default function HomeScreen() {

  const { moviesNowPlaying, loading } = useMovies();

  if (loading) return <View><ActivityIndicator color='grey' size={70} /></View>

  return (
    <View>
      <View style={{ height: 440 }}>
        <Carousel
          data={moviesNowPlaying}
          renderItem={({ item }: any) => <MovieCard movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300}
        />
      </View>

      
    </View>
  )
}
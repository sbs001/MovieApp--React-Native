import React from "react";
import { Dimensions, FlatList } from "react-native";
import { ActivityIndicator, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Carousel from 'react-native-snap-carousel';
import HorizontalSlider from "../../components/HorizontalSlider/HorizontalSlider";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useMovies } from "../../hooks/useMovies";


const windowWidth = Dimensions.get('window').width

export default function HomeScreen() {

  const { moviesNowPlaying, loading } = useMovies();

  if (loading) return <View><ActivityIndicator color='grey' size={70} /></View>

  return (
    <ScrollView>
      <View>
        <View style={{ height: 440 }}>
          <Carousel
            data={moviesNowPlaying}
            renderItem={({ item }: any) => <MovieCard movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
          />
        </View>

        <HorizontalSlider title='Popular Movies' movies={moviesNowPlaying} />
        <HorizontalSlider  movies={moviesNowPlaying} />

        <HorizontalSlider title='Popular Movies' movies={moviesNowPlaying} />

        

      </View>
    </ScrollView>
  )
}
import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { ActivityIndicator, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from 'react-native-snap-carousel';
import Background from "../../components/Backgroound/Background";
import HorizontalSlider from "../../components/HorizontalSlider/HorizontalSlider";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useMovies } from "../../hooks/useMovies";
import { HomeStyles } from "./HomeScreenStyles";



const windowWidth = Dimensions.get('window').width

export default function HomeScreen() {

  const { nowPlaying, popupar, upcoming, top_rated, loading } = useMovies();


  if (loading) return <View style={HomeStyles.loading}><ActivityIndicator color='grey' size={70} /></View>
  return (
    <Background>
      <ScrollView>
        <SafeAreaView>
          <View style={{ height: 440 }}>
            <Carousel
              data={nowPlaying}
              renderItem={({ item }: any) => <MovieCard movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
            />
          </View>

          <HorizontalSlider title='Top Rated' movies={top_rated} />
          <HorizontalSlider title='Popular Movies' movies={popupar} />
          <HorizontalSlider title='Upcoming' movies={upcoming} />

        </SafeAreaView>
      </ScrollView>
    </Background>
  )
}
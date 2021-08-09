import React from "react";
import { Dimensions, FlatList } from "react-native";
import { ActivityIndicator, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Carousel from 'react-native-snap-carousel';
import MovieCard from "../../components/MovieCard/MovieCard";
import { useMovies } from "../../hooks/useMovies";
import { HomeStyles } from "./HomeScreenStyles";



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

        <View style={HomeStyles.flatListCtn}>
          <Text style={HomeStyles.title}>Popular Movies</Text>
          <FlatList
            data={moviesNowPlaying}
            renderItem={({ item }: any) => <MovieCard movie={item} width={140} height={200} />}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
     
      </View>
    </ScrollView>
  )
}
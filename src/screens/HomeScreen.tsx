import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import MovieCard from "../components/MovieCard/MovieCard";
import { useMovies } from "../hooks/useMovies";

export default function HomeScreen() {

  const { moviesNowPlaying, loading} = useMovies();

  if (loading) return <View><ActivityIndicator color='grey' size={70}/></View>

  return (
    <View>
      <MovieCard movie={moviesNowPlaying[0]} />
    </View>
  )
}
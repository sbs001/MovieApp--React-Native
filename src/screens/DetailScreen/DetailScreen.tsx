import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { ActivityIndicator, Image, Text, TouchableOpacity, TouchableOpacityBase, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParams } from "../../navigation/Navigation";
import { DetailScreenStyle } from "./DetailScreenStyles";
import { useMovieDetail } from "../../hooks/useMovieDetail";
import MovieDetail from "../../components/MovieDetails/MovieDetail";
import { Ionicons } from '@expo/vector-icons';

interface Props extends StackScreenProps<RootStackParams, 'Detail'> { }

export default function DetailScreen({ route, navigation }: Props) {

  const uri = "https://image.tmdb.org/t/p/w500" + route.params.poster_path;
  const { loading, detail, cast } = useMovieDetail(route.params.id);

  return (
    <ScrollView>
      <SafeAreaView>

        <TouchableOpacity style={DetailScreenStyle.backButton} onPress={() => navigation.pop()}>
          <Ionicons
            name="arrow-back-circle-outline"
            size={50}
            color={'white'}
          />
        </TouchableOpacity>

        <View style={DetailScreenStyle.viewImage}>
          <Image source={{ uri }} style={DetailScreenStyle.image} />
        </View>

        <Text style={DetailScreenStyle.title}>{route.params.title}</Text>

        {loading ? <ActivityIndicator size={35} color='grey' /> : <MovieDetail data={detail!} cast={cast!} />}

      </SafeAreaView>
    </ScrollView>
  )
}
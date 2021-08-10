import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParams } from "../../navigation/Navigation";
import { DetailScreenStyle } from "./DetailScreenStyles";
import { Ionicons } from '@expo/vector-icons';
import { useMovieDetail } from "../../hooks/useMovieDetail";

interface Props extends StackScreenProps<RootStackParams, 'Detail'> { }

export default function DetailScreen({ route }: Props) {

  const uri = "https://image.tmdb.org/t/p/w500" + route.params.poster_path;
  const details = useMovieDetail(route.params.id);

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={DetailScreenStyle.viewImage}>
          <Image source={{ uri }} style={DetailScreenStyle.image} />
        </View>

        <Text style={DetailScreenStyle.title}>{route.params.title}</Text>
        <Ionicons name='star-outline' color='grey' size={20} style={{ marginLeft: 10 }} />
      </SafeAreaView>
    </ScrollView>
  )
}
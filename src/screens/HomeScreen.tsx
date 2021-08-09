import React from "react";
import { useEffect } from "react";
import { Text, View } from "react-native";
import movieApi from "../api/MovieApi";
import { NowPlaying } from "../interfaces/nowPlaying";

export default function HomeScreen(){

  useEffect(()=>{
    movieApi.get<NowPlaying>('/now_playing')
    .then(res => console.log(res.data))
  },[]);


  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}
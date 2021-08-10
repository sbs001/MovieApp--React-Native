import { useState } from "react";
import { useEffect } from "react";
import movieApi from "../api/MovieApi";
import { ApiResponse, Movie, } from "../interfaces/ApiResponse";

interface Movies {
  nowPlaying: Movie[],
  popupar: Movie[],
  top_rated: Movie[],
  upcoming: Movie[],
}

export const useMovies = () => {

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movies>({
    nowPlaying: [],
    popupar: [],
    top_rated: [],
    upcoming: [],
  })

  const getMovies = async () => {
    setMovies({
      nowPlaying: (await movieApi.get<ApiResponse>('/now_playing')).data.results,
      popupar: (await movieApi.get<ApiResponse>('/popular')).data.results,
      top_rated: (await movieApi.get<ApiResponse>('/top_rated')).data.results,
      upcoming: (await movieApi.get<ApiResponse>('/upcoming')).data.results
    });
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...movies,
    loading
  }

}
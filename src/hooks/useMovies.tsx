import { useState } from "react";
import { useEffect } from "react";
import movieApi from "../api/MovieApi";
import { ApiResponse, Movie, } from "../interfaces/ApiResponse";


export const useMovies = () => {

  const [loading, setLoading] = useState(true);
  const [moviesNowPlaying, setMoviesNowPlaying] = useState<Movie[]>([])
  const [moviesPopular, setMoviesPopular] = useState<Movie[]>([])
  const [moviesTopRated, setMoviesTopRated] = useState<Movie[]>([])
  const [moviesUpcoming, setMoviesUpcoming] = useState<Movie[]>([])

  const getMovies = async () => {
    setMoviesNowPlaying((await movieApi.get<ApiResponse>('/now_playing')).data.results);
    setMoviesPopular((await movieApi.get<ApiResponse>('/popular')).data.results);
    setMoviesTopRated((await movieApi.get<ApiResponse>('/top_rated')).data.results);
    setMoviesUpcoming((await movieApi.get<ApiResponse>('/upcoming')).data.results);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return {
    moviesNowPlaying,
    moviesPopular,
    moviesTopRated,
    moviesUpcoming,
    loading
  }

}
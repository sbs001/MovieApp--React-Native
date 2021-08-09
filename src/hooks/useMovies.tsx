import { useState } from "react";
import { useEffect } from "react";
import movieApi from "../api/MovieApi";
import { Movie, NowPlaying } from "../interfaces/nowPlaying";


export const useMovies = () => {

  const [loading, setLoading] = useState(true);
  const [moviesNowPlaying, setMoviesNowPlaying] = useState<Movie[]>([])

  const getMovies = async () => {
    setMoviesNowPlaying((await movieApi.get<NowPlaying>('/now_playing')).data.results);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return {
    moviesNowPlaying,
    loading
  }

}
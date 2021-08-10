import { useEffect } from "react"
import { useState } from "react"
import movieApi from "../api/MovieApi"
import { Cast, MovieCredits } from "../interfaces/MovieCredits"
import { MovieDetailFull } from "../interfaces/MovieDetail"

interface MovieDetail {
  loading: boolean,
  data?: MovieDetailFull,
  cast?: Cast[]

}

export const useMovieDetail = (id: number) => {

  const [detail, setDetail] = useState<MovieDetail>({ loading: true })

  useEffect(() => {

    movieApi.get<MovieDetailFull>('/' + id)
      .then(res => setDetail({ ...detail, data: res.data }))
      .then(() => movieApi.get<MovieCredits>(`/${id}/credits`))
      .then(res => setDetail({ ...detail, loading: false, cast: res.data.cast }))
  }, [])

  return {
    detail
  }
}
import { useEffect } from "react"
import { useState } from "react"
import movieApi from "../api/MovieApi"
import { Cast, MovieCredits } from "../interfaces/MovieCredits"
import { MovieDetailFull } from "../interfaces/MovieDetail"

interface MovieDetail {
  loading: boolean,
  detail?: MovieDetailFull,
  cast?: Cast[]

}

export const useMovieDetail = (id: number) => {

  const [details, setDetails] = useState<MovieDetail>({loading:true})

  const getDetails = async() =>{
    setDetails({
      detail: (await movieApi.get<MovieDetailFull>(`/${id}`)).data,
      cast:  (await movieApi.get<MovieCredits>(`/${id}/credits`)).data.cast,
      loading:false,
    })
  }

  useEffect(() => {
    getDetails();
  }, [])

  return {
    ...details
  }
}
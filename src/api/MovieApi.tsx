import axios from "axios";

const movieApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "d6ae98e48ba55139582c3f08ad1f06e3",
    language: "en-US",
  }
});

export default movieApi;
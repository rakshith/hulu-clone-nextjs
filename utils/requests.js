const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRating: {
    title: "Top Rated",
    url: `/trending/all/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchActionMovies: {
    title: "Trending",
    url: `/trending/all/movie?api_key=${API_KEY}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/trending/all/mvoie?api_key=${API_KEY}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/trending/all/movie?api_key=${API_KEY}&lwith_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/trending/all/movie?api_key=${API_KEY}&lwith_genres=10749`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/trending/all/movie?api_key=${API_KEY}&lwith_genres=9648`,
  },
  fetchScifi: {
    title: "Sci-Fi",
    url: `/trending/all/movie?api_key=${API_KEY}&lwith_genres=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `/trending/all/movie?api_key=${API_KEY}&lwith_genres=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/trending/all/movie?api_key=${API_KEY}&lwith_genres=16`,
  },
  fetchTV: {
    title: "TV Movie",
    url: `/trending/all/movie?api_key=${API_KEY}&lwith_genres=10770`,
  },
};

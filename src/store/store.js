// No problem to expose api key since the number of request is unlimited
const api_key = '5752c9c99862ec40e39c92ba2595bdee';
const base_url = 'https://api.themoviedb.org/3';

const getList = async (endpoint) => {
  const blob = await fetch(`${base_url}${endpoint}`);
  const json = await blob.json();
  return json;
};

const store = {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Netflix Originals',
        items: await getList(
          `/discover/movie/?with_network=213&api_key=${api_key}`
        ),
      },
      {
        slug: 'trending',
        title: 'Recommended for you',
        items: await getList(`/trending/movie/week?&api_key=${api_key}`),
      },
      {
        slug: 'toprated',
        title: 'Top Rated',
        items: await getList(`/movie/top_rated?&api_key=${api_key}`),
      },
      {
        slug: 'action',
        title: 'Action',
        items: await getList(
          `/discover/movie?with_genres=28&api_key=${api_key}`
        ),
      },
      {
        slug: 'comedy',
        title: 'Comedy',
        items: await getList(
          `/discover/movie?with_genres=35&api_key=${api_key}`
        ),
      },
      {
        slug: 'horror',
        title: 'Horror',
        items: await getList(
          `/discover/movie?with_genres=27&api_key=${api_key}`
        ),
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await getList(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: 'documentary',
        title: 'Documentaries',
        items: await getList(
          `/discover/movie?with_genres=99&api_key=${api_key}`
        ),
      },
    ];
  },

  getMovieInfo: async (movieId) => {
    let info = {};
    if (movieId) {
      info = await getList(`/movie/${movieId}?&api_key=${api_key}`);
    }
    return info;
  },
};

export default store;

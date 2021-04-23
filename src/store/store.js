// No problem to expose api key since the number of request is unlimited
const api_key = '5752c9c99862ec40e39c92ba2595bdee';
const base_url = 'https://api.themoviedb.org/3';

async function getList(endpoint) {
  const blob = await fetch(`${base_url}${endpoint}`);
  const json = await blob.json();
  return json;
}

export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Netflix Originals',
        items: await getList(
          `/discover/tv/?with_network=213&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: 'trending',
        title: 'Recommended for you',
        items: await getList(
          `/trending/all/week?language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: 'toprated',
        title: 'Top Rated',
        items: await getList(
          `/movie/top_rated?&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: 'action',
        title: 'Action',
        items: await getList(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: 'comedy',
        title: 'Comedy',
        items: await getList(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${api_key}`
        ),
      },
      {
        slug: 'horror',
        title: 'Horror',
        items: await getList(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${api_key}`
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
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${api_key}`
        ),
      },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};
    if (movieId) {
      switch (type) {
        case 'move':
          info = await getList(
            `/movie/${movieId}?language=pt-BR&api_key=${api_key}`
          );
          break;
        case 'tv':
          info = await getList(
            `/tv/${movieId}?language=pt-BR&api_key=${api_key}`
          );
          break;
        default:
          info = null;
          break;
      }
    }
  },
};

import moviedb from '../api/moviedb';

const myapikey = process.env.REACT_APP_API_KEY;

export const fetchPopMovies = () => async dispatch => {
  const response = await moviedb.get(
    `/movie/popular?api_key=${myapikey}&language=en-US&page=1`
  );

  dispatch({ type: 'FETCH_POP_MOVIES', payload: response.data.results });
};

export const fetchNowPlayingMovies = () => async dispatch => {
  const response = await moviedb.get(
    `/movie/now_playing?api_key=${myapikey}&language=en-US&page=1`
  );

  dispatch({
    type: 'FETCH_NOW_PLAYING_MOVIES',
    payload: response.data.results
  });
};

export const fetchUpcomingMovies = () => async dispatch => {
  const response = await moviedb.get(
    `/movie/upcoming?api_key=${myapikey}&language=en-US&page=1`
  );

  dispatch({
    type: 'FETCH_UPCOMING_MOVIES',
    payload: response.data.results
  });
};

export const getGenres = () => async dispatch => {
  const response = await moviedb.get(
    `/genre/movie/list?api_key=${myapikey}&language=en-US`
  );

  dispatch({
    type: 'GET_GENRES',
    payload: response.data.genres
  });
};

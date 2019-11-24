const initialState = {
  searchText: '',
  popMoviesArr: [],
  nowPlayingMoviesArr: [],
  upcomingMoviesArr: [],
  listOfGenres: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POP_MOVIES':
      return { ...state, popMoviesArr: action.payload };
    case 'FETCH_NOW_PLAYING_MOVIES':
      return { ...state, nowPlayingMoviesArr: action.payload };
    case 'FETCH_UPCOMING_MOVIES':
      return { ...state, upcomingMoviesArr: action.payload };
    case 'GET_GENRES':
      return { ...state, listOfGenres: action.payload };
    default:
      return state;
  }
};

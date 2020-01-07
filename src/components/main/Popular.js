import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPopMovies } from '../../actions';

import PopularItem from './PopularItem';

class Popular extends Component {
  componentDidMount() {
    this.props.fetchPopMovies();
  }

  handleId = e => {
    let movieId = this.props.movieId;
  };

  render() {
    const popular = this.props.popMovies.slice(0, 3).map((movie, index) => {
      return (
        <PopularItem
          key={movie.id}
          id={index}
          image={movie.backdrop_path}
          title={movie.original_title}
          genreId={movie.genre_ids[0]}
          movieId={movie.id}
          overview={movie.overview}
        />
      );
    });

    return <div>{popular}</div>;
  }
}

const mapStateToProps = state => ({
  popMovies: state.movies.popMoviesArr
});

export default connect(mapStateToProps, { fetchPopMovies })(Popular);

// renderList = () => {
//   return this.props.popMovies.slice(2, 5).map((popMovie, index) => {
//     return (
//       <div className='popMovies' key={index}>
//         <div className='popMovies-text'>
//           <h3>{popMovie.title}</h3>
//           <p>{popMovie.overview.substring(0, 125) + '...'}</p>
//         </div>
//         <img
//           className='movie-img'
//           src={`http://image.tmdb.org/t/p/w780${popMovie.backdrop_path}`}
//           alt={popMovie.title}
//         />
//       </div>
//     );
//   });
// };

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPopMovies } from '../../actions';

class Popular extends Component {
  componentDidMount() {
    this.props.fetchPopMovies();
  }

  renderList = () => {
    return this.props.popMovies.slice(2, 5).map((popMovie, index) => {
      return (
        <div className='popMovies' key={index}>
          <div className='popMovies-text'>
            <h3>{popMovie.title}</h3>
            <p>{popMovie.overview.substring(0, 125) + '...'}</p>
          </div>
          <img
            className='movie-img'
            src={`http://image.tmdb.org/t/p/w780${popMovie.backdrop_path}`}
            alt={popMovie.title}
          />
        </div>
      );
    });
  };

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => ({
  popMovies: state.movies.popMoviesArr
});

export default connect(mapStateToProps, { fetchPopMovies })(Popular);

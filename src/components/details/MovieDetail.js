import React, { Component } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchMovie, fetchCast, fetchRecommendations } from '../../actions';
import Cast from './Cast';
import Footer from '../Footer';
import Recommended from './Recommended';
import './MovieDetail.css';

class MovieDetail extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.fetchCast(this.props.match.params.id);
    this.props.fetchRecommendations(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchCast(nextProps.params.id);
    }
  }

  render() {
    return (
      // 'pages' is how many pages the parallax should cover
      // 'factor' is how many pages the layer should cover of the pages
      <Parallax
        pages={2.05}
        ref={ref => (this.parallax = ref)}
        style={{ overflow: 'hidden scroll' }}
      >
        <ParallaxLayer offset={0} speed={0} factor={1}>
          <img
            src={`https://image.tmdb.org/t/p/original${this.props.selectedMovie.backdrop_path}`}
            alt={this.props.selectedMovie.id}
            style={{ width: '100%' }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={0.65} speed={0.5} factor={1.05}>
          <div className='movieDetail-wrapper'>
            <div className='movieDetail-box'>
              <h1>{this.props.selectedMovie.original_title}</h1>
              <div className='movieDetail-ratings-box'>
                <div className='box db-movie'>
                  {this.props.selectedMovie.vote_average}
                </div>
                <div className='box db-reel'>9.3</div>
              </div>
              <div>
                Runtime: {this.props.selectedMovie.runtime} mins. | Release
                Date: {this.props.selectedMovie.release_date}
              </div>
              <br></br>
              <p className='p-detail'>{this.props.selectedMovie.overview}</p>
              <hr className='style14'></hr>
              <section className='section-cast'>
                <h3>Top Billed Cast</h3>
                <div className='cast-wrapper'>
                  <Cast />
                </div>
              </section>
              <hr className='style14'></hr>
              <section className='section-reviews'>
                <h3>Reviews</h3>
                <div>This will be a review</div>
                <div>This will be a review</div>
                <div>This will be a review</div>
              </section>
              <hr className='style14'></hr>
            </div>
            <Recommended />
            <Footer />
          </div>
        </ParallaxLayer>
      </Parallax>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  selectedMovie: state.movies.movieDetail,
  cast: state.movies.cast
});

// state.movies.movieDetail,

export default withRouter(
  connect(mapStateToProps, { fetchCast, fetchMovie, fetchRecommendations })(
    MovieDetail
  )
);

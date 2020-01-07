import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchRecommendations } from '../../actions';
import Slick from './Slick';

class Recommendations extends Component {
  render() {
    return (
      <Slick sectionName='Recommendations' movies={this.props.recommended} />
    );
  }
}

const mapStateToProps = state => ({
  recommended: state.movies.recommendedMovies
});

export default connect(mapStateToProps, { fetchRecommendations })(
  Recommendations
);

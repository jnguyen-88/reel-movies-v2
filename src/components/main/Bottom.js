import React, { Component } from 'react';

import NowPlaying from './NowPlaying';
import Upcoming from './Upcoming';

class Bottom extends Component {
  render() {
    return (
      <div>
        <section className='section-now-playing'>
          <NowPlaying />
        </section>
        <hr className='style14'></hr>
        {'\n'}
        <section className='section-upcoming'>
          <Upcoming />
        </section>
        <hr className='style14'></hr>
        {'\n'}
      </div>
    );
  }
}

export default Bottom;

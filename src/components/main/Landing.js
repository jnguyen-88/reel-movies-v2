import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header';
import Popular from './Popular';
import UserReviewBox from './UserReviewBox';
import NowPlaying from './NowPlaying';
import Upcoming from './Upcoming';
import Footer from '../Footer';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <div className='main-mid'>
            <section className='section-popular'>
              <Popular />
            </section>
            <section className='section-review'>
              <h3 className='heading-ter'>Latest Reviews</h3>
              <div className='do'>
                <UserReviewBox />
                <UserReviewBox />
              </div>
            </section>
          </div>
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
        </main>
        <Footer />
      </div>
    );
  }
}

export default Landing;

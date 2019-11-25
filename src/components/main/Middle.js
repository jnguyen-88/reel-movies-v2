import React, { Component } from 'react';
import Popular from './Popular';
import UserReviewBox from './UserReviewBox';

class Middle extends Component {
  render() {
    return (
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
    );
  }
}

export default Middle;

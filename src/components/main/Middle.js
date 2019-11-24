import React, { Component } from 'react';
import Popular from './Popular';

class Middle extends Component {
  render() {
    return (
      <div className='main-mid'>
        <section className='section-popular'>
          <Popular />
        </section>
        <section className='section-review'>
          <div>Some reviews over here</div>
        </section>
      </div>
    );
  }
}

export default Middle;

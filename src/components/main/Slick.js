import React, { Component } from 'react';
import Slider from 'react-slick';

import { connect } from 'react-redux';
import { getGenres } from '../../actions';

import SlickItem from './SlickItem';

class Slick extends Component {
  componentDidMount() {
    this.props.getGenres();
  }
  render() {
    var settings = {
      dots: false,
      slidesToShow: 6,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 765,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const slick = this.props.movies.map((movie, index) => {
      return (
        <SlickItem
          id={index}
          image={movie.poster_path}
          title={movie.original_title}
          genreId={movie.genre_ids[0]}
        />
      );
    });

    return (
      <div className='slick-container' style={{ padding: '40px' }}>
        <h3>{this.props.sectionName}</h3>
        <Slider {...settings}>{slick}</Slider>
      </div>
    );
  }
}

export default connect(null, { getGenres })(Slick);

// return (
//   <div className='slick-container' style={{ padding: '40px' }}>
//     <h3>{this.props.sectionName}</h3>
//     <Slider {...settings}>
//       <div>
//         <img src='https://image.tmdb.org/t/p/w154/lc8BVCuZvE8OD5HPDWfd0xWZJ2n.jpg' />
//         <h5>Frozen</h5>
//         <p>Kids</p>
//       </div>
//       <div>
//         <img src='https://image.tmdb.org/t/p/w154/lc8BVCuZvE8OD5HPDWfd0xWZJ2n.jpg' />
//         <h5>Frozen</h5>
//         <p>Kids</p>
//       </div>
//       <div>
//         <img src='https://image.tmdb.org/t/p/w154/lc8BVCuZvE8OD5HPDWfd0xWZJ2n.jpg' />
//         <h5>Frozen</h5>
//         <p>Kids</p>
//       </div>
//       <div>
//         <img src='https://image.tmdb.org/t/p/w154/lc8BVCuZvE8OD5HPDWfd0xWZJ2n.jpg' />
//         <h5>Frozen</h5>
//         <p>Kids</p>
//       </div>
//       <div>
//         <img src='https://image.tmdb.org/t/p/w154/lc8BVCuZvE8OD5HPDWfd0xWZJ2n.jpg' />
//         <h5>Frozen</h5>
//         <p>Kids</p>
//       </div>
//       <div>
//         <img src='https://image.tmdb.org/t/p/w154/lc8BVCuZvE8OD5HPDWfd0xWZJ2n.jpg' />
//         <h5>Frozen</h5>
//         <p>Kids</p>
//       </div>
//       <div>
//         <img src='https://image.tmdb.org/t/p/w154/lc8BVCuZvE8OD5HPDWfd0xWZJ2n.jpg' />
//         <h5>Frozen</h5>
//         <p>Kids</p>
//       </div>
//       <div>
//         <img src='https://image.tmdb.org/t/p/w154/lc8BVCuZvE8OD5HPDWfd0xWZJ2n.jpg' />
//         <h5>Frozen</h5>
//         <p>Kids</p>
//       </div>
//       <div>
//         <img src='https://image.tmdb.org/t/p/w154/lc8BVCuZvE8OD5HPDWfd0xWZJ2n.jpg' />
//         <h5>Frozen</h5>
//         <p>Kids</p>
//       </div>
//       <div>
//         <img src='https://image.tmdb.org/t/p/w154/lc8BVCuZvE8OD5HPDWfd0xWZJ2n.jpg' />
//         <h5>Frozen</h5>
//         <p>Kids</p>
//       </div>
//       <div>
//         <img src='https://image.tmdb.org/t/p/w154/lc8BVCuZvE8OD5HPDWfd0xWZJ2n.jpg' />
//         <h5>Frozen</h5>
//         <p>Kids</p>
//       </div>
//       <div>
//         <img src='https://image.tmdb.org/t/p/w154/lc8BVCuZvE8OD5HPDWfd0xWZJ2n.jpg' />
//         <h5>Frozen</h5>
//         <p>Kids</p>
//       </div>
//     </Slider>
//   </div>
// );

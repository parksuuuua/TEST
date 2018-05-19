import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const moviesTitles = [
  "내 아내의 모든것",
  "About time",
]

const movieImages = [
  "https://akns-images.eonline.com/eol_images/Entire_Site/2017524/rs_1024x565-170624152702-1024-toy-story-062417.jpg?fit=inside|900:auto&output-quality=90",
  "https://pixar-planet.fr/wp-content/uploads/2016/10/affiche-toy-story-2-05.jpg"
]

const movies = [
  {
    title: "내 아내의 모든것",
    poster: "https://akns-images.eonline.com/eol_images/Entire_Site/2017524/rs_1024x565-170624152702-1024-toy-story-062417.jpg?fit=inside|900:auto&output-quality=90"
  },
  {
    title: "About time",
    poster: "https://pixar-planet.fr/wp-content/uploads/2016/10/affiche-toy-story-2-05.jpg"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie,index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;

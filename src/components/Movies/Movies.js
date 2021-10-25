import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

class Movies extends Component {
    render() {
        // console.log('Data:', this.props.data)
        return ( 
            <ul className="movies">
                {this.props.data.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} addToFav={this.props.addToFav} />
                    </li>
                ))}
            </ul>
        );
    }
}
 
export default Movies;
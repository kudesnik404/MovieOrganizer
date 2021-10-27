import React, { Component } from 'react';
import './ListPage.css';

class ListPage extends Component {

    render() { 
        return (
            <div className="list-page">
                <h1 className="list-page__title">{this.props.savedListTitle}</h1>
                <ul>
                    {this.props.savedList.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={`https://www.imdb.com/title/${item.imdbID}/`} target="_blank">{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
 
export default ListPage;
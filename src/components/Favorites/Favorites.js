import React, { Component } from 'react';
import './Favorites.css';
import { Link } from 'react-router-dom';


class Favorites extends Component {
    state = {
        listName: ''
    }

    deleteFav = (item, index) => {
        let favs = [...this.props.favorites]
        favs.splice(index, 1)
        this.props.deleteFromFav(favs)
    }

    render() {
        return (
            <div className="favorites">
                <input placeholder="Введите название списка" className="favorites__name" onChange={(e) => this.setState({ listName: e.target.value })} />
                <ul className="favorites__list">
                    {this.props.favorites.map((item, index) => {
                        return <li key={index}>{item.Title} ({item.Year}) <button type="button" className="favorites__delete" onClick={() => this.deleteFav(item, index)}>X</button></li>;
                    })}
                </ul>
                {this.props.link ? 
                <Link to={`/${this.props.link}`}>Перейти к списку</Link>
                :
                <button disabled={this.props.favorites.length > 0 ? false : true} type="button" className="favorites__save" onClick={() => {this.state.listName == '' ? this.props.saveTheList('Мой список', this.props.favorites) : this.props.saveTheList(this.state.listName, this.props.favorites)}}>Сохранить список</button>
                }
            </div>
        );
    }
}
 
export default Favorites;
import React, { Component } from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';

class MainPage extends Component {

    state = {
        data: [],
        favorites: []
    }

    updateData = (value) => {
        this.setState({ data: value })
    }

    addToFav = (elem) => {
        if (!this.state.favorites.find((e) => elem.imdbID == e.imdbID)) {
            this.setState({ favorites: [...this.state.favorites, elem]})
        }
    }

    deleteFromFav = (value) => {
        this.setState({ favorites: value })
    }

    render() { 
        return (
            <div className="main-page">
                <Header />
                <main className="main-page__content">
                    <section className="main-page__main-section">
                        <div className="main-page__search-box">
                            <SearchBox updateData={this.updateData} />
                        </div>
                        <div className="main-page__movies">
                            <Movies data={this.state.data} addToFav={this.addToFav} />
                        </div>
                    </section>
                    <aside className="main-page__favorites">
                        <Favorites favorites={this.state.favorites} deleteFromFav={this.deleteFromFav} saveTheList={this.props.saveTheList} />
                    </aside>
                </main>
            </div>
        );
    }
}
 
export default MainPage;

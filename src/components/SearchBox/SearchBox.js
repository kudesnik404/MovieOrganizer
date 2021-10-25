import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    state = {
        searchLine: ''
    }
    searchLineChangeHandler = (elem) => {
        this.setState({ searchLine: elem.target.value });
    }
    searchBoxSubmitHandler = (event) => {
        event.preventDefault();

        fetch (`http://www.omdbapi.com/?apikey=98736095&s=${this.state.searchLine}`)
            .then(res => res.json())
            .then(data => {
                if (data.Search !== undefined) {
                    this.props.updateData(data.Search)
                } else {
                    alert(data.Error)
                }
            })
            .catch(err => console.log(err))
    }
    render() {
        const { searchLine } = this.state;

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
}
 
export default SearchBox;
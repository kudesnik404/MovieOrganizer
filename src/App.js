import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';

import './reset.css';
import './common.css';

class App extends React.Component {

  state = {
    savedListTitle: '',
    savedList: [],
    link: ''
  }

  saveTheList = (title, list) => {
        this.setState({ savedList: list, savedListTitle: title}, () => {

          const idArr = []

          this.state.savedList.forEach(elem => {
              idArr.push(elem.imdbID)
          })

          const objToPost = {
            "title": this.state.savedListTitle,
            "movies": [idArr]
          }

          fetch('https://acb-api.algoritmika.org/api/movies/list', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(objToPost)
          })
          .then (res => res.json())
          .then (data => {
            this.setState({ link: `list/${data.id}`})
          })
          //сделать проверку и изменение кнопки "сохранить список" (положить в неё ссылку)
        })
  }

  render() {
    return (
      <div className="app">
        <Route path="/" exact>
          <MainPage saveTheList={this.saveTheList} link={this.state.link} />
        </Route>
        <Route path="/list/:id" exact>
           <ListPage savedList={this.state.savedList} savedListTitle={this.state.savedListTitle} />
        </Route >
      </div>
    );
  }
}

export default App;

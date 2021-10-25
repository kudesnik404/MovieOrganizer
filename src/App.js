import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';

import './reset.css';
import './common.css';

class App extends React.Component {

  state = {
    savedListTitle: '',
    savedList: []
  }

  saveTheList = (title, list) => {
    if (list.length > 0) {
      this.setState({ savedListTitle: title })
      if (list !== '') {
        this.setState({ savedList: list })
      } else {
        this.setState({ savedList: 'Мой список' })
      }
    }
    console.log(this.state)
  }

  render() {
    return (
      <div className="app">
        <Route path="/" exact>
          <MainPage saveTheList={this.saveTheList} />
        </Route>
        <Route path="/list/:id" exact>
           <ListPage savedList={this.state.savedList} savedListTitle={this.state.savedListTitle} />
        </Route >
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import ImageCardListLayout from './components/ImageCardListLayout.jsx';
import ImageCardList from './containers/ImageCardList.jsx';
import { Provider } from 'react-redux';
import store from './store';
import "./index.css";

import { Router, Route, hashHistory } from 'react-router'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mw6">
        <div className="orange">Flickr App</div>
        <Provider store={store}>
          <ImageCardList></ImageCardList>
        </Provider>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
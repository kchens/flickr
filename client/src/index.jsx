import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import ImageCardListLayout from './components/ImageCardListLayout.jsx';
import ImageCardList from './containers/ImageCardList.jsx';
import { Provider } from 'react-redux';
import store from './store';
import "./index.css";

import routes from './routes/index.jsx'
import { Router, Route, browserHistory, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import FavoritesList from './containers/FavoritesList.jsx'

const history = syncHistoryWithStore(hashHistory, store)

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <div className="mw6">
      //   <div className="orange">Flickr App</div>
        <Provider store={store}>
          <Router history={history}>
            {/*<Route>*/}
              <Route path='/' component={ImageCardList} />
              <Route path='/favorites' component={FavoritesList} />
            {/*</Route>*/}
          </Router>
        </Provider>
      // </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
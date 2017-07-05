'use strict'

import React from 'react'
import { Route } from 'react-router'
import ImageCardList from '../containers/ImageCardList.jsx'
import FavoritesList from '../containers/FavoritesList.jsx'

function routes(props) {
  return (
    <Route {...props}>
      <Route path='/' component={ImageCardList} />
      <Route path='/favorites' component={FavoritesList} />
    </Route>
  )
}

export default routes

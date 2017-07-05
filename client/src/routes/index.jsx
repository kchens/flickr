'use strict'

import React from 'react'
import { Route } from 'react-router'
import ImageCardList from '../containers/ImageCardList.jsx'

function routes(props) {
  return (
    <Route {...props}>
      <Route path='/' component={ImageCardList} />
    </Route>
  )
}

export default routes

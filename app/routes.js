import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import Main from './components/Main'
import Companies from './components/Companies'

export default (
  <Route path='/' component={Main}>
    <IndexRoute component={Companies}/>
  </Route>
)

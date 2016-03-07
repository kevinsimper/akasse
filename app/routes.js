import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import Main from './components/Main'
import Welcome from './components/Welcome'
import CBS from './components/CBS'

export default (
  <Route path='/' component={Main}>
    <IndexRoute component={Welcome}/>
    <Route path='cbs' component={CBS}/>
  </Route>
)

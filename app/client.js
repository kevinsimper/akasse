import React from 'react'
import { render } from 'react-dom'
import Layout from './components/Layout'
import Header from './components/Header'
import Content from './components/Content'

let html = (
  <div>
    <Header/>
    <Content>
      Hello World
    </Content>
  </div>
)

render(html, document.querySelector('#wrapper'))

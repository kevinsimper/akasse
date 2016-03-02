import React from 'react'
import { render } from 'react-dom'
import Layout from './components/Layout'
import Header from './components/Header'
import Content from './components/Content'
import Companies from './components/Companies'

let html = (
  <div>
    <Header/>
    <Content>
      <Companies />
    </Content>
  </div>
)

render(html, document.querySelector('#wrapper'))
import express from 'express'
import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import Layout from './components/Layout'
import Header from './components/Header'
import Content from './components/Content'

let router = express.Router()
let production = process.env.NODE_ENV === 'production'

router.get('/', (req, res) => {
  let html = (
    <Layout assets={global.assets}>
      <div>
        <Header/>
        <Content>
          Hello World
        </Content>
      </div>
    </Layout>
  )
  let output = renderToStaticMarkup(html)
  res.send(output)
})

export default router

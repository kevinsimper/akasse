import express from 'express'
import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import renderStatic from './renderStatic'
import Layout from './components/Layout'

let router = express.Router()
let production = process.env.NODE_ENV === 'production'

router.get('/*', (req, res) => {
  renderStatic(req, res, output => {
    let html = (
      <Layout assets={global.assets}>
        <div dangerouslySetInnerHTML={{__html: output}} />
      </Layout>
    )
    let fullOutput = renderToStaticMarkup(html)
    res.send(fullOutput)
  })
})

export default router

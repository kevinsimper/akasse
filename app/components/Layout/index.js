import React, { Component } from 'react'

export default class Layout extends Component {
  getAnalytics() {
    return {
      __html: `
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-4309863-21', 'auto')
        ga('send', 'pageview')
      `
    }
  }
  render() {
    return (
      <html>
        <head>
          <title>Akassejunglen.dk</title>
          <link rel='stylesheet' href={this.props.assets.main.css}/>
          <script dangerouslySetInnerHTML={this.getAnalytics()}></script>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" type="image/jpeg" href="/build/logo.png"/>
        </head>
        <body>
          <div id='wrapper'>
            {this.props.children}
          </div>
          <script src={this.props.assets.main.js}></script>
        </body>
      </html>
    )
  }
}

import React, { Component } from 'react'
import styles from './style.scss'
import image from '!!file?name=[name].[ext]!./logo.png'

export default class Logo extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.Title}>
          <img src={image} className={styles.Logo}/>
          AkasseJunglen
        </h1>
      </div>
    )
  }
}

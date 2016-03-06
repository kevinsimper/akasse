import React, { Component } from 'react'
import CBSLogo from './cbs_logo.jpg'
import styles from './style.scss'

export default class CBS extends Component {
  render() {
    return (
      <img className={styles.UniLogo} src={CBSLogo} />
    )
  }
}

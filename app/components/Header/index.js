import React, { Component } from 'react'
import styles from './style.scss'

export default class Header extends Component {
  render() {
    return (
      <div className={styles.Header}>
        <h1 className={styles.Title}>Akasse.dk</h1>
        <div className={styles.Spacer}>-</div>
        <h2 className={styles.SubTitle}>Find din næste Akasse</h2>
      </div>
    )
  }
}

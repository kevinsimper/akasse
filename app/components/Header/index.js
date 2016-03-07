import React, { Component } from 'react'
import styles from './style.scss'
import Logo from '../Logo'

export default class Header extends Component {
  render() {
    return (
      <div className={styles.Header}>
        <Logo/>
        <div className={styles.Spacer}>-</div>
        <h2 className={styles.SubTitle}>Din guide som studerende</h2>
      </div>
    )
  }
}

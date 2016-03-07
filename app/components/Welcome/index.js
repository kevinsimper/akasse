import React, { Component } from 'react'
import Companies from '../Companies'
import styles from './style.scss'

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <div className={styles.Intro}>
          <h2>Hej Studerende,</h2>
          <div>Den her side er meningen skal hjælpe dig med at finde en akasse igennem den her jungle.</div>
        </div>
        <Companies/>
      </div>
    )
  }
}

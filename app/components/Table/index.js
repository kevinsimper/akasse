import React, { Component } from 'react'
import styles from './style.scss'

export default class Table extends Component {
    render() {
        return (
            <table className={styles.Table}>
                {this.props.children}
            </table>
        )
    }
}

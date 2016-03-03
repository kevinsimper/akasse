import React, { Component } from 'react'
import Table from '../Table'
import { sortBy } from 'lodash'
import Button from '../Button'
import styles from './style.scss'

export default class Companies extends Component {
    constructor() {
        super()

        this.state = {
            sort: 'name',
            inverse: false
        }
    }
    getCompanies() {
        var sorted = sortBy(this.props.companies, this.state.sort)
        if(this.state.inverse) {
            sorted.reverse()
        }
        return sorted
    }
    sortBy(item) {
        this.setState({
            sort: item,
            inverse: !this.state.inverse
        })
    }
    render() {
        return (
            <table className={styles.Table}>
                <thead>
                <tr>
                    <th onClick={this.sortBy.bind(this, 'name')}>Navn ⬇⬆</th>
                    <th onClick={this.sortBy.bind(this, 'trustpilot')}>Trustpilot ⬇⬆</th>
                    <th>Link</th>
                </tr>
                </thead>
                <tbody>
                {this.getCompanies().map((company, key) => {
                    return (
                        <tr key={key}>
                            <td>
                                <div className={styles.Logo}><img src={company.img}/></div>
                            </td>
                            <td>{company.name}</td>
                            <td>{company.trustpilot}</td>
                            <td>
                                <Button target='_blank' href={company.url}>Besøg</Button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    }
}
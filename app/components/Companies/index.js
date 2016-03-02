import React, { Component } from 'react'
import Table from '../Table'

export default class Companies extends Component {
    render() {
        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>Navn</th>
                            <th>Pris</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Krifa</td>
                            <td>650,-</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
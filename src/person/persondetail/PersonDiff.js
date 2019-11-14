import React, { Component } from 'react'
import AccData from '../../data/accounts.json'
import { Table, Card } from 'react-bootstrap'
import PersonDiffRow from './persondiff/PersonDiffRow'
import PersonDiffTRow from './persondiff/PersonDiffTRow'

class PersonDiff extends Component {
  render () {
    const { person } = this.props
    const { needs, wants, savings } = AccData

    return (
      <Card.Body>
        <Card.Title>Difference</Card.Title>
        <div className='table-responsive'>
          <Table size='sm small'>
            <thead className='text-right thead-light'>
              <tr>
                <th colSpan='2' className='text-left'>Account</th>
                <th>$</th>
                <th>% | <small>% >ideal</small></th>
                <th>E[X] | <small>ideal</small></th>
                <th>+/-</th>
              </tr>
            </thead>
            <tbody>
              <PersonDiffTRow category={needs} name='Needs' person={person} />
              {needs.map((acct, index) => {
                return <PersonDiffRow person={person} acct={acct} key={`post-list-key ${index}`} />
              })}

              <PersonDiffTRow category={wants} name='Wants' person={person} />
              {wants.map((acct, index) => {
                return <PersonDiffRow person={person} acct={acct} key={`post-list-key ${index}`} />
              })}

              <PersonDiffTRow category={savings} name='Savings' person={person} />
              {savings.map((acct, index) => {
                return <PersonDiffRow person={person} acct={acct} key={`post-list-key ${index}`} />
              })}

            </tbody>
          </Table>
        </div>
      </Card.Body>
    )
  }
}

export default PersonDiff

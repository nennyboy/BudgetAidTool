import React, { Component } from 'react'
import MthData from '../../data/monthly.json'
import AccData from '../../data/accounts.json'
import { Card, Row, Col } from 'react-bootstrap'

class PersonOverview extends Component {
  render () {
    const { person } = this.props
    const { needs, wants, savings } = AccData

    const curr = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })

    var amountSum = MthData.reduce(function (sum, d) {
      return sum + d.amount
    }, 0)

    var amountCosts = (needs.reduce(function (sum, d) {
      return sum + (d.req * (d.equal ? 0.5 : (person.title === 'Ollie' ? d.O : 1 - d.O)))
    }, 0) + wants.reduce(function (sum, d) {
      return sum + (d.req * (d.equal ? 0.5 : (person.title === 'Ollie' ? d.O : 1 - d.O)))
    }, 0) + savings.reduce(function (sum, d) {
      return sum + (d.req * (d.equal ? 0.5 : (person.title === 'Ollie' ? d.O : 1 - d.O)))
    }, 0))

    return (
      <Card.Body>
        <Card.Title>Overview</Card.Title>
        <Row noGutters='true' className='text-center reduce-font'>
          <Col>
            <Card.Subtitle className='mb-2 text-muted border-bottom py-2'>Income</Card.Subtitle>
            <Card.Text>{curr.format(person.amount)}</Card.Text>
          </Col>
          <Col>
            <Card.Subtitle className='mb-2 text-muted border-bottom py-2'>Contribution</Card.Subtitle>
            <Card.Text>{(person.amount / amountSum * 100).toFixed(1) + '%'}</Card.Text>
          </Col>
          <Col>
            <Card.Subtitle className='mb-2 text-muted border-bottom py-2'>Costs</Card.Subtitle>
            <Card.Text>
              {curr.format(amountCosts)}
            </Card.Text>
          </Col>
          <Col>
            <Card.Subtitle className='mb-2 text-muted border-bottom py-2'>+/-</Card.Subtitle>
            <Card.Text className={(person.amount - amountCosts < 0 ? 'text-danger' : 'text-success')}>
              {curr.format(person.amount - amountCosts)}
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    )
  }
}

export default PersonOverview

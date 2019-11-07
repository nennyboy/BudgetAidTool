import React, { Component } from 'react'
import AccData from '../data/accounts.json'
import BudgetToolRow from './budgettool/BudgetToolRow'
import BudgetToolTRow from './budgettool/BudgetToolTRow'
import { Row, Form, Col, Table } from 'react-bootstrap'

class BudgetTool extends Component {
  constructor (props) {
    super(props)
    this.state = {
      person: 'Ollie',
      amount: 0
    }
  }

  handleAmountChange = (e) => {
    this.setState({
      amount: e.target.value
    })
  }

  handlePersonChange = (e) => {
    this.setState({
      person: e.target.value
    })
  }

  render () {
    return (
      <Row>
        <Form className='p-2 ml-2 w-100'>
          <Form.Group as={Row} controlId='exampleForm.ControlSelect1'>
            <Form.Label column className='text-right'>User</Form.Label>
            <Col>
              <Form.Control as='select' onChange={this.handlePersonChange}>
                <option>Ollie</option>
                <option>Maja</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='exampleForm.ControlSelect2'>
            <Form.Label column className='text-right'>Budget Amount</Form.Label>
            <Col>
              <Form.Control as='input' onChange={this.handleAmountChange} type='number' min='0' placeholder='0' />
            </Col>
          </Form.Group>
          <hr />
        </Form>
        <div className='table-responsive'>
          <Table size='sm'>
            <thead className='text-center thead-light'>
              <tr>
                <th colSpan='2' className='text-left'>Account</th>
                <th>$</th>
                <th>%</th>
              </tr>
            </thead>
            {
              Object.entries(AccData).map((cat, i) => {
                return (
                  <tbody key={i}>
                    <BudgetToolTRow cat={cat} amount={this.state.amount} person={this.state.person} />
                    {cat[1].map((acct, b) => {
                      return (
                        <BudgetToolRow acct={acct} key={b} i={b} amount={this.state.amount} person={this.state.person} />
                      )
                    })}
                  </tbody>
                )
              })
            }
          </Table>
        </div>
      </Row>
    )
  }
}

export default BudgetTool

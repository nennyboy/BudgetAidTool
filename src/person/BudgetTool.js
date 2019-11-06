import React, { Component } from 'react'
import AccData from '../data/accounts.json'
import { Row, Form, Col, Table } from 'react-bootstrap'

class BudgetTool extends Component {
  handleChange (event) {
    console.log(event)
  }

  render () {
    return (
      <Row>
        <Form className='p-2 ml-2 w-100'>
          <Form.Group as={Row} controlId='exampleForm.ControlSelect1'>
            <Form.Label column className='text-right'>User</Form.Label>
            <Col>
              <Form.Control as='select'>
                <option>Ollie</option>
                <option>Maja</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='exampleForm.ControlSelect2'>
            <Form.Label column className='text-right'>Budget Amount</Form.Label>
            <Col>
              <Form.Control as='input' onChange={this.handleChange} type='number' min='0' placeholder='0' />
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
              Object.entries(AccData).map((obj, i) => {
                return (
                  <tbody key={i}>
                    <tr className='text-muted font-weight-light bg-light text-right'>
                      <td colSpan='2' className='text-dark font-weight-normal text-left text-capitalize'>{obj[0]}</td>
                      <td>0</td>
                      <td>{(1).toFixed(1) + '%'}</td>
                    </tr>
                    {obj[1].map((subObj, subI) => {
                      return (
                        <tr className='font-weight-light text-right' key={subI}>
                          <td />
                          <td className='font-weight-normal text-left'>{subObj.name}</td>
                          <td>0</td>
                          <td>{(1).toFixed(1) + '%'}</td>
                        </tr>
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

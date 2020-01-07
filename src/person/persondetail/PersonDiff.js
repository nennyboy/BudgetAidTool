import React, { Component } from 'react'
import AccData from '../../data/accounts.json'
import { Table, Card, InputGroup, FormControl, Container, Row, Col } from 'react-bootstrap'
import PersonDiffRow from './persondiff/PersonDiffRow'
import PersonDiffTRow from './persondiff/PersonDiffTRow'

class PersonDiff extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mult: 1
    }
  }

  handleMultChange = (e) => {
    this.setState({
      mult: e.target.value
    })
  }

  render () {
    const { person } = this.props
    const { needs, wants, savings } = AccData

    return (
      <Card.Body>
        <Card.Title>
          <Container>
            <Row>
              <Col xs={6} sm={9} md={10} lg={10}>Difference</Col>
              <Col xs={6} sm={3} md={2} lg={2}>
                <InputGroup size='small'>
                  <InputGroup.Prepend>
                    <InputGroup.Text id='basic-addon1'>×</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    as='input'
                    type='number'
                    placeholder='1'
                    min='1'
                    onChange={this.handleMultChange}
                  />
                </InputGroup>
              </Col>
            </Row>
          </Container>
        </Card.Title>
        <div className='table-responsive'>
          <Table size='sm small'>
            <thead className='text-right thead-light'>
              <tr>
                <th colSpan='2' className='text-left'>Account</th>
                <th>$</th>
                <th>% | <small>% ideal</small></th>
                <th><small>ideal</small></th>
                <th>+/-</th>
              </tr>
            </thead>
            <tbody>
              <PersonDiffTRow category={needs} name='Needs' person={person} />
              {needs.map((acct, index) => {
                return <PersonDiffRow person={person} mult={this.state.mult} acct={acct} key={`post-list-key ${index}`} />
              })}

              <PersonDiffTRow category={wants} name='Wants' person={person} />
              {wants.map((acct, index) => {
                return <PersonDiffRow person={person} mult={this.state.mult} acct={acct} key={`post-list-key ${index}`} />
              })}

              <PersonDiffTRow category={savings} name='Savings' person={person} />
              {savings.map((acct, index) => {
                return <PersonDiffRow person={person} mult={this.state.mult} acct={acct} key={`post-list-key ${index}`} />
              })}

            </tbody>
          </Table>
        </div>
      </Card.Body>
    )
  }
}

export default PersonDiff

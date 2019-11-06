import React, { Component } from 'react'
import { Card, Col, Accordion } from 'react-bootstrap'

import PersonOverview from './persondetail/PersonOverview'
import PersonDiff from './persondetail/PersonDiff'

class PersonDetail extends Component {
  render () {
    const { person, i } = this.props

    return (
      <Col>
        <Card className='d-block'>
          <Accordion.Toggle as={Card.Header} eventKey={i}>
            <h6>{person.title}</h6>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={i}>
            <div>
              <PersonOverview person={person} />
              <PersonDiff person={person} />
            </div>
          </Accordion.Collapse>
        </Card>
      </Col>
    )
  }
}

export default PersonDetail

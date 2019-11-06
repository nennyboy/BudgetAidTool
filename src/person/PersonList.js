import React, { Component } from 'react'
import MthData from '../data/monthly.json'
import { Row, Accordion } from 'react-bootstrap'

import PersonDetail from './PersonDetail'
class PersonList extends Component {
  render () {
    return (
      <Row>
        <Accordion className='w-100'>
          {MthData.map((personDetail, index) => {
            return <PersonDetail person={personDetail} i={index} key={`post-list-key ${index}`} />
          })}
        </Accordion>
      </Row>
    )
  }
}

export default PersonList

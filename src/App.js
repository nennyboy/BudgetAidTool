import React from 'react'
import PersonList from './person/PersonList'
import BudgetTool from './person/BudgetTool'
import './bootstrap.min.css'
import './App.css'
import { Container, Tab, Tabs, Row, Col } from 'react-bootstrap'

function App () {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-center my-3 py-3'>Budget Tool</h1>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Tabs defaultActiveKey='budgetTool' id='uncontrolled-tab-example'>
            <Tab eventKey='budgetTool' title='Budget Tool'>
              <BudgetTool />
            </Tab>
            <Tab eventKey='personDetail' title='Person Detail'>
              <div>
                <p className='p-1'>Select an individual to see how their income is distributed across costs</p>
              </div>
              <PersonList />
            </Tab>

          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}

export default App

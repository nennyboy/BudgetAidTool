import React from 'react'
import PersonList from './person/PersonList'
import BudgetTool from './person/BudgetTool'
import './bootstrap.min.css'
import './App.css'
import { Container, Tab, Tabs } from 'react-bootstrap'

function App () {
  return (
    <Container>
      <Tabs defaultActiveKey='personDetail' id='uncontrolled-tab-example'>
        <Tab eventKey='personDetail' title='Person Detail'>
          <div>
            <p className='p-1'>Select an individual to see how their income is distributed across costs</p>
          </div>
          <PersonList />
        </Tab>
        <Tab eventKey='budgetTool' title='Budget Tool'>
          <BudgetTool />
        </Tab>
      </Tabs>
    </Container>
  )
}

export default App

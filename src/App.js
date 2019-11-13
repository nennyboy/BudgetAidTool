import React, { useState } from 'react'
import PersonList from './person/PersonList'
import BudgetTool from './person/BudgetTool'
import Chart from './person/Chart'
import './bootstrap.min.css'
import './App.css'
import { Container, Tab, Tabs, Row, Col } from 'react-bootstrap'
import PinInput from 'react-pin-input'

function App () {
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)
  const [count, setCount] = useState(0)
  var pin
  if (!show) {
    return (
      <Container className='text-center'>
        <h1 className='text-center my-3 py-3'>Locked</h1>
        <p>Please enter the appropriate lock code to enter</p>
        <PinInput
          length={4}
          initialValue=''
          secret
          onChange={(value, index) => { setError(false) }}
          type='numeric'
          pattern='\\d*'
          ref={p => (pin = p)}
          style={{ padding: '0px' }}
          inputStyle={{
            borderColor: (error ? '#ff9b9b' : 'LightGray'),
            background: (error ? '#ffe7e7' : 'transparent'),
            fontSize: '1.5rem',
            fontFamily: 'Quantico',
            margin: '0px'
          }}
          inputFocusStyle={{ borderColor: (error ? '#ff9b9b' : 'LightSkyBlue') }}
          onComplete={(value, index) => {
            if (value === '1407') {
              setShow(true)
            } else {
              pin.clear()
              setError(true)
              setCount(count + 1)
            }
          }}
        />
        <br />
        <h6><small>{(count > 0 ? `You have entered the wrong lock code [${count}]` : '')}</small></h6>
      </Container>
    )
  } else {
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
              <Tab eventKey='graphDetail' title='Graph'>
                <div>
                  <p className='p-1'>Select an individual to see how their income is distributed across costs</p>
                </div>
                <Chart />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App

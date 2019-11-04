import React from 'react'
import CardList from './posts/CardList'
import './bootstrap.min.css'

function App () {
  return (
    <div className='container-fluid'>
      <div className='row no-gutters justify-content-center'><h3>Allocated</h3></div>
      <CardList />
      <div className='row no-gutters justify-content-center'><h3>Budget</h3></div>
    </div>
  )
}

export default App

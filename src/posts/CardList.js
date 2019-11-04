import React, { Component } from 'react'
import MthData from '../data/monthly.json'

import CardDetail from './CardDetail'
class CardList extends Component {
  render () {
    return (
      <div className='row no-gutters'>
        {MthData.map((personDetail, index) => {
          return <CardDetail person={personDetail} key={`post-list-key ${index}`} />
        })}
      </div>
    )
  }
}

export default CardList

import React, { Component } from 'react'
import MthData from '../data/monthly.json'

class CardDetail extends Component {
  render () {
    const curr = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })

    var amountSum = MthData.reduce(function (sum, d) {
      return sum + d.amount
    }, 0)

    const { person } = this.props

    return (
      <div className='col-6'>
        <div className='card'>
          <h5 className='card-header'>
            {person.title}
          </h5>
          <div className='card-body'>
            <h6 className='card-title'>Income</h6>
            <p className='card-text'>{curr.format(person.amount)}</p>
            <h6 className='card-title'>Contribution</h6>
            <p className='card-text'>{(person.amount / amountSum * 100).toFixed(1) + '%'}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CardDetail

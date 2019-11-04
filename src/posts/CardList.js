import React from 'react'
import MthData from '../data/monthly.json'

const curr = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

var amountSum = MthData.reduce(function (sum, d) {
  return sum + d.amount
}, 0)

const cardElement = (key, person) => {
  return (
    <div className='col-6' key={key}>
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

function CardList () {
  return (
    <div className='row no-gutters'>
      {MthData.map((personDetail, index) => {
        return cardElement(index, personDetail)
      })}
    </div>
  )
}

export default CardList

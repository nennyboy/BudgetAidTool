import React, { Component } from 'react'
import AccData from '../../data/accounts.json'

class BudgetToolTRow extends Component {
  accAmount (category) {
    var categoryTotal = category.reduce((sum, d) => {
      return sum + (d.req * (d.equal ? 0.5 : (this.props.person === 'Ollie' ? d.O : 1 - d.O)))
    }, 0)
    return categoryTotal
  }

  accPercent (category) {
    const { needs, wants, savings } = AccData
    return this.accAmount(category) / (needs.reduce((sum, d) => {
      return sum + (d.req * (d.equal ? 0.5 : (this.props.person === 'Ollie' ? d.O : 1 - d.O)))
    }, 0) + wants.reduce((sum, d) => {
      return sum + (d.req * (d.equal ? 0.5 : (this.props.person === 'Ollie' ? d.O : 1 - d.O)))
    }, 0) + savings.reduce((sum, d) => {
      return sum + (d.req * (d.equal ? 0.5 : (this.props.person === 'Ollie' ? d.O : 1 - d.O)))
    }, 0))
  }

  render () {
    const curr = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })
    return (
      <tr className='text-muted font-weight-light bg-light text-right'>
        <td colSpan='2' className='text-dark font-weight-normal text-left text-capitalize'>{this.props.cat[0]}</td>
        <td>{curr.format(this.props.amount * this.accPercent(this.props.cat[1]))}</td>
        <td>{(this.accPercent(this.props.cat[1]) * 100).toFixed(1) + '%'}</td>
      </tr>
    )
  }
}

export default BudgetToolTRow

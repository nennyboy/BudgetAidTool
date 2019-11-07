import React, { Component } from 'react'
import AccData from '../../data/accounts.json'

class BudgetToolRow extends Component {
  accAmount (acct) {
    return (acct.req *
        (acct.equal ? 0.5 : (this.props.person === 'Ollie' ? acct.O : 1 - acct.O)))
  }

  accPercent (acct) {
    const { needs, wants, savings } = AccData
    return this.accAmount(acct) / (needs.reduce((sum, d) => {
      return sum + (d.req * (d.equal ? 0.5 : (this.props.person === 'Ollie' ? d.O : 1 - d.O)))
    }, 0) + wants.reduce((sum, d) => {
      return sum + (d.req * (d.equal ? 0.5 : (this.props.person === 'Ollie' ? d.O : 1 - d.O)))
    }, 0) + savings.reduce((sum, d) => {
      return sum + (d.req * (d.equal ? 0.5 : (this.props.person === 'Ollie' ? d.O : 1 - d.O)))
    }, 0))
  }

  render () {
    const { i, acct, amount } = this.props
    const curr = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })

    return (
      <tr className='font-weight-light text-right' key={i}>
        <td />
        <td className='font-weight-normal text-left'>{acct.name}</td>
        <td>{curr.format(amount * this.accPercent(acct))}</td>
        <td>{(this.accPercent(acct) * 100).toFixed(1) + '%'}</td>
      </tr>
    )
  }
}

export default BudgetToolRow

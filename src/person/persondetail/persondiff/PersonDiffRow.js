import React, { Component } from 'react'
import { Tooltip, OverlayTrigger } from 'react-bootstrap'
// import AccData from '../../../data/accounts.json'

class PersonDiffRow extends Component {
  render () {
    const curr = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })

    const { acct, person } = this.props
    const { mult } = this.props

    function accAmount (acct) {
      return (acct.req *
        (acct.equal ? 0.5 : (person.title === 'Ollie' ? acct.O : 1 - acct.O)))
    }

    function accPercent (acct) {
      // return accAmount(acct) / amountCosts
      return accAmount(acct) / person.amount
    }

    function accAfford (acct) {
      return acct.ideal * person.amount
    }

    return (<tr className='font-weight-light text-right'>
      <td />
      <td className='font-weight-normal text-left'>{acct.name}</td>
      <td>
        <OverlayTrigger
          placement='left'
          overlay={<Tooltip>{curr.format(accAmount(acct))} | <small>*1</small></Tooltip>}
        >
          <span className={(mult > 1 ? 'font-italic' : '')}>
            {curr.format((accAmount(acct) * mult))}
          </span>
        </OverlayTrigger>

      </td>
      <td>
        <span>{(accPercent(acct) * 100).toFixed(1) + '%'} | </span>
        <small className='text-muted'>{(acct.ideal * 100).toFixed(1) + '%'}</small>
      </td>
      <td className='text-info'>
        <span className='text-muted-blue'>{curr.format(acct.ideal * person.amount)}</span>
      </td>
      <td className={(accAfford(acct) - accAmount(acct) >= 0 ? 'text-success' : 'text-danger')}>
        {curr.format(accAfford(acct) - accAmount(acct))}
      </td>
            </tr>)
  }
}

export default PersonDiffRow

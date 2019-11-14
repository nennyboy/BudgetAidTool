import React, { Component } from 'react'
import AccData from '../../../data/accounts.json'

class PersonDiffTRow extends Component {
  render () {
    const curr = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })

    const { person, category, name } = this.props
    const { needs, wants, savings } = AccData

    var amountCosts = (needs.reduce(function (sum, d) {
      return sum + (d.req * (d.equal ? 0.5 : (person.title === 'Ollie' ? d.O : 1 - d.O)))
    }, 0) + wants.reduce(function (sum, d) {
      return sum + (d.req * (d.equal ? 0.5 : (person.title === 'Ollie' ? d.O : 1 - d.O)))
    }, 0) + savings.reduce(function (sum, d) {
      return sum + (d.req * (d.equal ? 0.5 : (person.title === 'Ollie' ? d.O : 1 - d.O)))
    }, 0))

    function accAmount (acct) {
      return (acct.req *
        (acct.equal ? 0.5 : (person.title === 'Ollie' ? acct.O : 1 - acct.O)))
    }

    function accPercent (acct) {
      return accAmount(acct) / amountCosts
    }

    function accAfford (acct) {
      return accPercent(acct) * person.amount
    }

    var catArray = category.reduce(function (sum, d, i) {
      sum.amount = ((!sum.amount) ? 0 : sum.amount) + accAmount(d)
      sum.percent = ((!sum.percent) ? 0 : sum.percent) + accPercent(d)
      sum.afford = ((!sum.afford) ? 0 : sum.afford) + accAfford(d)
      sum.diff = sum.afford - sum.amount
      return sum
    }, {})

    var catIdealArray = category.reduce(function (sum, d, i) {
      sum.percent = ((!sum.percent) ? 0 : sum.percent) + d.ideal
      return sum
    }, {})

    return (<tr className='text-muted font-weight-light bg-light text-right'>
      <td colSpan='2' className='text-dark font-weight-normal text-left'>{name}</td>
      <td>{curr.format(catArray.amount)}</td>
      <td>{(catArray.percent * 100).toFixed(1) + '%'} | <small>{(catIdealArray.percent * 100).toFixed(1) + '%'}</small></td>
      <td className='text-right'>{curr.format(catArray.afford)}   | <small>{curr.format(catIdealArray.percent * person.amount)}</small></td>
      <td className='text-right'>
        {curr.format(catArray.diff)}
      </td>
            </tr>)
  }
}

export default PersonDiffTRow

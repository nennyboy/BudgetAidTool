import React, { Component, Tooltip, OverlayTrigger } from 'react'
// import AccData from '../../../data/accounts.json'

class PersonDiffRow extends Component {
  render () {
    const curr = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })

    const { acct, person } = this.props
    // const { needs, wants, savings } = AccData

    /* var amountCosts = (needs.reduce(function (sum, d) {
      return sum + (d.req * (d.equal ? 0.5 : (person.title === 'Ollie' ? d.O : 1 - d.O)))
    }, 0) + wants.reduce(function (sum, d) {
      return sum + (d.req * (d.equal ? 0.5 : (person.title === 'Ollie' ? d.O : 1 - d.O)))
    }, 0) + savings.reduce(function (sum, d) {
      return sum + (d.req * (d.equal ? 0.5 : (person.title === 'Ollie' ? d.O : 1 - d.O)))
    }, 0)) */

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
	
	function renderTooltip(props) {
	  return <Tooltip {...props}>Simple tooltip</Tooltip>;
	}

    return (<tr className='font-weight-light text-right'>
			  <td />
			  <td className='font-weight-normal text-left'>{acct.name}</td>
			  <td>
					<OverlayTrigger
						  key={acct.id}
						  placement='left'
						  overlay={
							<Tooltip id={acct.id}>
							  Tooltip on <strong>Test</strong>.
							</Tooltip>
						  }
						>
					  <span>{curr.format(accAmount(acct))}</span>
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

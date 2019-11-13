import React from 'react'
import ReactFC from 'react-fusioncharts'

import MthData from '../data/monthly.json'
import AccData from '../data/accounts.json'

import FusionCharts from 'fusioncharts'
import MSArea from 'fusioncharts/fusioncharts.charts'
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
ReactFC.fcRoot(FusionCharts, MSArea, FusionTheme)

const mthDataset = () => {
  return Object.values(MthData).map((person) => {
    var change = (AccData.needs.reduce(function (sum, d) {
      return sum + (d.req * (d.equal ? 0.5 : (person.title === 'Ollie' ? d.O : 1 - d.O)))
    }, 0) + AccData.wants.reduce(function (sum, d) {
      return sum + (d.req * (d.equal ? 0.5 : (person.title === 'Ollie' ? d.O : 1 - d.O)))
    }, 0) + AccData.savings.reduce(function (sum, d) {
      return sum + (d.req * (d.equal ? 0.5 : (person.title === 'Ollie' ? d.O : 1 - d.O)))
    }, 0))
    var arr = []
    for (var i = 0; i < 7; i++) {
      arr.push({
        value: (person.bal - (change * i))
      })
    }
    return { seriesname: person.title, data: arr }
  })
}

const mthLabels = () => {
  const formatter = new Intl.DateTimeFormat('us', { month: 'short' })
  // formatter.format()
  var date = new Date()
  date.setMonth(date.getMonth() - 1)
  var arr = []
  for (var i = 0; i < 7; i++) {
    arr.push({
      label: formatter.format(date.setMonth(date.getMonth() + 1))
    })
  }
  return arr
}

// Step 7 - Creating the JSON object to store the chart configurations
const chartConfigs = {
  type: 'msarea', // The chart type
  width: '100%', // Width of the chart
  height: '400', // Height of the chart
  dataFormat: 'json', // Data type
  dataSource: {
    chart: {
      theme: 'fusion',
      caption: 'Bank Balance',
      subCaption: 'Ollie vs Maja Remaining Balance',
      xAxisName: 'Month'
    },
    categories: [{
      category: mthLabels()
    }],
    dataset: mthDataset()
  }
}

class Chart extends React.Component {
  render () {
    mthDataset()

    return (
      <ReactFC
        {...chartConfigs}
      />
    )
  }
}

export default Chart

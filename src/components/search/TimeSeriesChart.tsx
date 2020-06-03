import React from 'react'
import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Boost from 'highcharts/modules/boost'

import testdata from './pamb0.json'

Boost(Highcharts)

const foo = testdata.data.map((entry) => entry['HYY_META.Pamb0'])

const options: Highcharts.Options = {
  title: {
    text: 'My chart',
  },
  plotOptions: {
    series: {
      boostThreshold: 1,
    },
  },
  series: [
    {
      type: 'line',
      data: foo,
    },
  ],
}

const TimeSeriesChart: React.FC = (props: HighchartsReact.Props) => {
  return <HighchartsReact highcharts={Highcharts} options={options} {...props} />
}

export default TimeSeriesChart

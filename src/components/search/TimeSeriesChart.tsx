import React from 'react'
import { useSelector } from 'react-redux'
import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Boost from 'highcharts/modules/boost'
import { timeSeriesSelector } from '../../store/timeseries'
import { DataPoint } from '../../types'

Boost(Highcharts)

const TimeSeriesChart: React.FC = (props: HighchartsReact.Props) => {
  const timeSeries = useSelector(timeSeriesSelector)
  const data = timeSeries.data.map((dataPoint: DataPoint) => dataPoint[timeSeries.columns[0]])
  const options: Highcharts.Options = {
    title: {
      text: 'SMEAR data',
    },
    plotOptions: {
      series: {
        boostThreshold: 1,
      },
    },
    series: [
      {
        type: 'line',
        data,
      },
    ],
  }

  return <HighchartsReact highcharts={Highcharts} options={options} {...props} />
}

export default TimeSeriesChart

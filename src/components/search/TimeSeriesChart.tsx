import React from 'react'
import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

type TimeSeriesChartProps = {
  name: string
  data: number[]
}

const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({ name, data }) => {
  const options: Highcharts.Options = {
    title: {
      text: name,
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
  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default TimeSeriesChart

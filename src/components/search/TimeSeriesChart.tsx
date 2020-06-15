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
    series: [
      {
        type: 'line',
        data,
      },
    ],
    xAxis: {
      type: 'datetime',
      labels: {
        format: '{value:%Y-%m-%d %H:%M:%S}',
        padding: 10,
      },
    },
    yAxis: {
      title: {
        text: null,
      },
    },
    chart: {
      zoomType: 'xy',
    },
    plotOptions: {
      series: {
        boostThreshold: 1,
      },
    },
    legend: {
      enabled: false,
    },
  }
  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default TimeSeriesChart

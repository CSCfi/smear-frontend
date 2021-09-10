import React from 'react'
import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

require('highcharts/modules/no-data-to-display')(Highcharts);
require('highcharts/modules/accessibility')(Highcharts);

type TimeSeriesChartProps = {
  name: string
  data: Array<number[]>|number[]
}

const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({ name, data }) => {
  const options: Highcharts.Options = {
    title: {
      text: name,
    },
    series: [
      {
        name: 'series',
        type: 'line',
        color: 'red',
        data,
      },
    ],
    lang: {
      noData: 'Loading data...'
    },
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
      height: 360,
      width: 360,
    },
    plotOptions: {
      series: {
        boostThreshold: 1,
      },
    },
    legend: {
      enabled: true,
    },
  }
  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default TimeSeriesChart

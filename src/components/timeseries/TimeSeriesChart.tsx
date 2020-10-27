import React from 'react'
import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

require('highcharts/modules/no-data-to-display')(Highcharts);
require('highcharts/modules/accessibility')(Highcharts);

type TimeSeriesData = {
  name: string
  color: string
  data: Array<number[]>|number[]
}

type TimeSeriesChartProps = {
  name: string
  data: TimeSeriesData[]
}

const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({ name, data }) => {
  const options: Highcharts.Options = {
    title: {
      text: name,
    },
    series: data.map(seriesdata => {
      return {
        name: seriesdata.name,
        type: 'line',
        color: seriesdata.color,
        data: seriesdata.data,
      }
    }),
    lang: {
      noData: 'No data available'
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
      width: 360
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

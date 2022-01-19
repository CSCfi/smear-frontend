import React from 'react'
import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

require('highcharts/modules/no-data-to-display')(Highcharts);
require('highcharts/modules/accessibility')(Highcharts);

interface TimeSeriesData {
  name: string
  color: string
  data: Array<number[]>|number[]
}

interface TimeSeriesChartProps {
  name: string
  data: TimeSeriesData[]
  unit?: string
}

const TimeSeriesChart: React.FC<TimeSeriesChartProps> = ({ name, data, unit }) => {
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
        text: unit
      }
    },
    chart: {
      zoomType: 'xy',
      height: 360,
      panning: {
        enabled: true,
        type: 'xy'
      },
      panKey: 'ctrl',
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

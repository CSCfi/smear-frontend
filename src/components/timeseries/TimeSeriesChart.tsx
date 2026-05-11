import React from 'react'
import * as Highcharts from 'highcharts'
import NoDataToDisplay from 'highcharts/modules/no-data-to-display'
import Accessibility from 'highcharts/modules/accessibility'
import HighchartsReact from 'highcharts-react-official'

NoDataToDisplay(Highcharts);
Accessibility(Highcharts);

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
        marker: {
          enabled: false
        },
        name: seriesdata.name,
        type: 'line',
        color: seriesdata.color,
        data: seriesdata.data
      }
    }),
    lang: {
      noData: 'Loading data...'
    },
    xAxis: {
      type: 'datetime',
      tickAmount: 9,
      labels: {
        format: '{value:%Y-%m-%d %H:%M}',
        padding: 10,
      },
    },
    yAxis: {
      title: {
        text: unit
      }
    },
    chart: {
      zooming: {type: 'xy'},
      panning: {
        enabled: true,
        type: 'xy'
      },
      panKey: 'ctrl'
    },
    plotOptions: {
      series: {
        boostThreshold: 1,
        lineWidth: 1,
      },
    },
    legend: {
      enabled: true,
    },
  }
  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default TimeSeriesChart

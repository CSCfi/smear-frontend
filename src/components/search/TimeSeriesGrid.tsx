import React from 'react'
import { useSelector } from 'react-redux'
import TimeSeriesChart from './TimeSeriesChart'
import { timeSeriesSelector } from '../../store/timeseries'
import { DataPoint } from '../../types'

const TimeSeriesGrid: React.FC = () => {
  const timeSeries = useSelector(timeSeriesSelector)
  const charts = timeSeries.columns.map((column) => {
    const data = timeSeries.data.map(
      (dataPoint: DataPoint) => dataPoint[timeSeries.columns[0]] as number
    )
    return <TimeSeriesChart key={column} name={column} data={data} />
  })
  return <>{charts}</>
}

export default TimeSeriesGrid

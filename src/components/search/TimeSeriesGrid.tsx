import React from 'react'
import { useSelector } from 'react-redux'
import TimeSeriesChart from './TimeSeriesChart'
import { Row, Col } from 'antd'
import { timeSeriesSelector } from '../../store/timeseries'
import { DataPoint } from '../../types'

const TimeSeriesGrid: React.FC = () => {
  const timeSeries = useSelector(timeSeriesSelector)
  const charts = timeSeries.columns.map((column) => {
    const data = timeSeries.data.map((dataPoint: DataPoint) => dataPoint[column] as number)
    return (
      <Col key={column} span={8}>
        <TimeSeriesChart name={column} data={data} />
      </Col>
    )
  })
  return <Row>{charts}</Row>
}

export default TimeSeriesGrid

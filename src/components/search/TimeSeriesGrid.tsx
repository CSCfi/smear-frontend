import React from 'react'
import { useSelector } from 'react-redux'
import TimeSeriesChart from './TimeSeriesChart'
import { Row, Col } from 'antd'
import { timeSeriesSelector } from '../../store/timeseries'

const TimeSeriesGrid: React.FC = () => {
  const timeSeries = useSelector(timeSeriesSelector)
  const charts = Object.keys(timeSeries).map((variableName) => {
    return (
      <Col key={variableName} span={8}>
        <TimeSeriesChart name={variableName} data={timeSeries[variableName]} />
      </Col>
    )
  })
  return <Row>{charts}</Row>
}

export default TimeSeriesGrid

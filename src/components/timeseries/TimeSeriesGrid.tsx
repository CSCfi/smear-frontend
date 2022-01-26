import React from 'react'

import { Col, Row } from 'antd'

import TimeSeriesChart from './TimeSeriesChart'

const TimeSeriesGrid = ({ timeSeries, chartData }) => {
  return (
    <Row justify={"space-around"} gutter={[16, 16]}>
      {chartData.map(item => (
        <Col>
          <TimeSeriesChart
            name={item.name}
            unit={item.unit}
            data={item.series === undefined ? [] : item.series.map((seriesItem: any) => {
              return {
                name: seriesItem.caption,
                color: seriesItem.color,
                data: timeSeries[seriesItem.tableVariable] || []
              }
            })}
          />
        </Col>
      ))}
    </Row>
  )
}

export default TimeSeriesGrid

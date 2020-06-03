import React from 'react'
import { Row, Col } from 'antd'
import TreeMenu from './TreeMenu'
import TimeSeriesChart from './TimeSeriesChart'

const SearchPage: React.FC = () => {
  return (
    <>
      <Row>
        <Col span={8}>
          <TreeMenu />
        </Col>
        <Col span={16}>
          <TimeSeriesChart />
        </Col>
      </Row>
    </>
  )
}

export default SearchPage

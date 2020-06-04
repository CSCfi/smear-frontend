import React from 'react'
import { Row, Col } from 'antd'
import TreeMenu from './TreeMenu'
import TimeSeriesGrid from './TimeSeriesGrid'

const SearchPage: React.FC = () => {
  return (
    <>
      <Row>
        <Col span={8}>
          <TreeMenu />
        </Col>
        <Col span={16}>
          <TimeSeriesGrid />
        </Col>
      </Row>
    </>
  )
}

export default SearchPage

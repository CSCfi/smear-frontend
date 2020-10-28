import React from 'react'
import { Col, Layout, Row } from 'antd'

const AppFooter = () =>
  <Layout.Footer>
    <Row>
      <Col flex='65%'>
        Open science and research is an initiative funded by the Ministry of
        Education and Culture with the target of making Finland one of the
        leading countries in openness of science and research by the year 2017.
      </Col>
      <Col flex='15%'>
        <img
          alt="Open Science and Research"
          src="ATT_pos_pysty_RGB_EN_transparent.png"
        />
      </Col>
      <Col flex='15%'>
        <img alt="CSC" src="csc-logo.png" />
      </Col>
    </Row>
  </Layout.Footer>

export default AppFooter

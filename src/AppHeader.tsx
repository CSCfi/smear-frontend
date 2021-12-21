import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Layout, Menu, Row } from 'antd'

import { API_URL } from './constants'

const { Header } = Layout
const { Item } = Menu

const ATHMOSPHERIC_SCIENCES_HREF = "https://www2.helsinki.fi/en/inar-institute-for-atmospheric-and-earth-system-research"

const AppHeader = () =>
  <Header>
    <Row>
      <Col>
        <img className="logo" src="AVAA_300px.png" alt="Smart" />
      </Col>
    </Row>
    <Row>
      <Col>
        <Menu mode="horizontal" inlineIndent={7}>
          <Item key="1">
            <a href="/">About</a>
          </Item>
          <Item key="2">
            <a href="/preview">Preview</a>
          </Item>
          <Item key="3">
            <a href="/download">Download</a>
          </Item>
          <Item key="4">
            <a href={`${API_URL}/swagger-ui`}>API</a>
          </Item>
          <Item key="5">
            <a href="/terms-of-use">Terms Of Use</a>
          </Item>
          <Item key="6">
            <a href="/contact">Contact</a>
          </Item>
          <Item key="7">
            <a href={ATHMOSPHERIC_SCIENCES_HREF}>INAR</a>
          </Item>
          <Item key="8">
            <a href="/smear-iv">SMEAR IV</a>
          </Item>
        </Menu>
      </Col>
    </Row>
  </Header>

export default AppHeader

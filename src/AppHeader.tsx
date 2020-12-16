import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Layout, Menu, Row } from 'antd'

import { API_URL } from './constants'

const { Header } = Layout
const { Item } = Menu

const ATHMOSPHERIC_SCIENCES_HREF = "http://www.helsinki.fi/inar"

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
            <Link to="/">About</Link>
          </Item>
          <Item key="2">
            <Link to="/search">Search</Link>
          </Item>
          <Item key="3">
            <Link to="/download">Download</Link>
          </Item>
          <Item key="4">
            <a href={`${API_URL}/swagger-ui`}>API</a>
          </Item>
          <Item key="5">
            <Link to="/terms-of-use">Terms Of Use</Link>
          </Item>
          <Item key="6">
            <a href={ATHMOSPHERIC_SCIENCES_HREF}>INAR</a>
          </Item>
          <Item key="7">
            <Link to="/smear-iv">SMEAR IV</Link>
          </Item>
        </Menu>
      </Col>
    </Row>
  </Header>

export default AppHeader

import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Layout, Menu, Row } from 'antd'

import { API_URL } from './constants'

const { Header } = Layout
const { Item } = Menu

const ATHMOSPHERIC_SCIENCES_HREF = "https://www2.helsinki.fi/en/inar-institute-for-atmospheric-and-earth-system-research"

const AppHeader = () =>
  <Header className="AppContainer">
    <Row>
      <Col>
        <img className="logo" src="AVAA_300px.png" alt="Smart" />
      </Col>
    </Row>
        <Menu mode="horizontal" inlineIndent={7}>
          <Item key="1">
            <Link to="/">About</Link>
          </Item>
          <Item key="2">
            <Link to="/preview">Preview</Link>
          </Item>
          <Item key="3">
            <Link to="/download">Download</Link>
          </Item>
          <Item key="4">
            <a href={`${API_URL}/q/openapi-ui`} target="blank">API</a>
          </Item>
          <Item key="5">
            <Link to="/terms-of-use">Terms Of Use</Link>
          </Item>
          <Item key="6">
            <Link to="/contact">Contact</Link>
          </Item>
          <Item key="7">
            <a href={ATHMOSPHERIC_SCIENCES_HREF} target="blank">INAR</a>
          </Item>
          <Item key="8">
            <Link to="/smear-iv">SMEAR IV</Link>
          </Item>
        </Menu>
  </Header>

export default AppHeader

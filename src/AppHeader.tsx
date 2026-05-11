import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Layout, Menu, Row } from 'antd'

import { API_URL, NEW_UI } from './constants'
import Login from './components/login/Login'

const { Header } = Layout

const ATHMOSPHERIC_SCIENCES_HREF = "https://www2.helsinki.fi/en/inar-institute-for-atmospheric-and-earth-system-research"

const menuItems = [
  {
    key: "1",
    label: <Link to="/preview">Preview</Link>,
    className: "AppHeaderLink"
  },
  { 
    key: "2",
    label: <Link to="/download">Download</Link>,
    className: "AppHeaderLink"
  },
  {
    key: "3",
    label: <a href={`${API_URL}/q/openapi-ui`} target="blank">API</a>,
    className: "AppHeaderLink"
  },
  {
    key: "4",
    label: <Link to="/terms-of-use">Terms Of Use</Link>,
    className: "AppHeaderLink"
  },
  {
    key: "5",
    label: <Link to="/contact">Contact</Link>,
    className: "AppHeaderLink"
  },
  {
    key: "6",
    label: <a href={ATHMOSPHERIC_SCIENCES_HREF} target="blank">INAR</a>,
    className: "AppHeaderLink"
  },
  {
    key: "7",
    label: <Link to="/smear-iv">SMEAR IV</Link>,
    className: "AppHeaderLink"
  }  
]


const AppHeader = () => {
  if (NEW_UI) {
    return <Header className="AppContainer">
        <Row justify="space-between" wrap={false} className="HeaderRow">
          <Col>
            <Link to="/"><img className="logo" src="AVAA_300px.png" alt="SmartSMEAR, Fairdata AVAA" /></Link>
          </Col>
          <Col>
            <Menu mode="horizontal" inlineIndent={7} items={menuItems} className="AppHeaderMenu" disabledOverflow={true} />
          </Col>
          <Col>
            <Login/>
          </Col>
        </Row>
      </Header>
  }
  return <Header className="AppContainer">
      <Row justify="space-between" wrap={false} className="HeaderRow">
        <Col>
          <Link to="/"><img className="logo" src="AVAA_300px.png" alt="SmartSMEAR, Fairdata AVAA" /></Link>
        </Col>
        <Col>
          <Menu mode="horizontal" items={menuItems} className="AppHeaderMenu" disabledOverflow={true} />
        </Col>
        <Col>
        </Col>
      </Row>
    </Header>
}


export default AppHeader

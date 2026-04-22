import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Layout, Menu, Row } from 'antd'

import { API_URL, NEW_UI } from './constants'
import Login from './components/login/Login'

const { Header } = Layout

const ATHMOSPHERIC_SCIENCES_HREF = "https://www2.helsinki.fi/en/inar-institute-for-atmospheric-and-earth-system-research"

const AppHeader = () => {
  if (NEW_UI) {
    return <Header className="AppContainer">
      <Row justify="space-between" wrap={false} className="HeaderRow">
        <Col>
          <Link to="/"><img className="logo" src="AVAA_300px.png" alt="SmartSMEAR, Fairdata AVAA" /></Link>
        </Col>
        <Col>
          <Menu mode="horizontal" className="AppHeaderMenu">
            <div key="2" className="AppHeaderLink">
              <Link to="/preview">Preview</Link>
            </div>
            <div key="3" className="AppHeaderLink">
              <Link to="/download">Download</Link>
            </div>
            <div key="4" className="AppHeaderLink">
              <a href={`${API_URL}/q/openapi-ui`} target="blank">API</a>
            </div>
            <div key="5" className="AppHeaderLink">
              <Link to="/terms-of-use">Terms Of Use</Link>
            </div>
            <div key="6" className="AppHeaderLink">
              <Link to="/contact">Contact</Link>
            </div>
            <div key="7" className="AppHeaderLink">
              <a href={ATHMOSPHERIC_SCIENCES_HREF} target="blank">INAR</a>
            </div>
            <div key="8" className="AppHeaderLink">
              <Link to="/smear-iv">SMEAR IV</Link>
            </div>
          </Menu>
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
        <Menu mode="horizontal" className="AppHeaderMenu">
          <div key="2" className="AppHeaderLink">
            <Link to="/preview">Preview</Link>
          </div>
          <div key="3" className="AppHeaderLink">
            <Link to="/download">Download</Link>
          </div>
          <div key="4" className="AppHeaderLink">
            <a href={`${API_URL}/q/openapi-ui`} target="blank">API</a>
          </div>
          <div key="5" className="AppHeaderLink">
            <Link to="/terms-of-use">Terms Of Use</Link>
          </div>
          <div key="6" className="AppHeaderLink">
            <Link to="/contact">Contact</Link>
          </div>
          <div key="7" className="AppHeaderLink">
            <a href={ATHMOSPHERIC_SCIENCES_HREF} target="blank">INAR</a>
          </div>
          <div key="8" className="AppHeaderLink">
            <Link to="/smear-iv">SMEAR IV</Link>
          </div>
        </Menu>
      </Col>
      <Col>
      </Col>
    </Row> 
  </Header>
}
export default AppHeader

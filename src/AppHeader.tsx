import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import { API_URL } from './constants'

const { Header } = Layout
const { Item } = Menu

const ATHMOSPHERIC_SCIENCES_HREF = "http://www.physics.helsinki.fi/tutkimus/atm/english/research"

const AppHeader = () =>
  <Header>
    <img className="logo" src="company_logo.png" alt="Smart" />
    <Menu mode="horizontal">
      <Item key="1">
        <Link to="/">SMEAR</Link>
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
        <a href={ATHMOSPHERIC_SCIENCES_HREF}>Athmospheric Sciences/University of Helsinki</a>
      </Item>
      <Item key="7">
        <Link to="/smear-iv">SMEAR IV</Link>
      </Item>
    </Menu>
  </Header>

export default AppHeader

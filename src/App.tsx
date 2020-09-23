import React, { useEffect } from 'react'
import { Layout, Menu } from 'antd'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import * as Highcharts from 'highcharts'
import Boost from 'highcharts/modules/boost'
import { fetchInitialData } from './service/initialload'
import FrontPage from './components/front/FrontPage'
import SearchPage from './components/search/SearchPage'

import 'antd/dist/antd.css'

const { Header } = Layout
const { Item } = Menu

Boost(Highcharts)

const ATHMOSPHERIC_SCIENCES_HREF = "http://www.physics.helsinki.fi/tutkimus/atm/english/research"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchInitialData())
  }, [dispatch])

  return (
    <Router>
      <Layout>
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
                <Link to="/api">API</Link>
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
        <Layout>
          <Switch>
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="/">
              <FrontPage />
            </Route>
          </Switch>
        </Layout>
      </Layout>
    </Router>
  )
}

export default App

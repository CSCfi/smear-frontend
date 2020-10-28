import React, { useEffect } from 'react'
import { Layout } from 'antd'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as Highcharts from 'highcharts'
import Boost from 'highcharts/modules/boost'
import { fetchInitialData } from './service/initialload'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import FrontPage from './components/front/FrontPage'
import SearchPage from './components/search/SearchPage'
import DownloadPage from './components/download/DownloadPage'

import 'antd/dist/antd.css'

Boost(Highcharts)

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchInitialData())
  }, [dispatch])

  return (
    <Layout style={{ backgroundColor: 'white' }}>
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/download">
            <DownloadPage />
          </Route>
          <Route path="/">
            <FrontPage />
          </Route>
        </Switch>
        <AppFooter />
      </Router>
    </Layout>
  )
}

export default App

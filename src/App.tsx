import React, { useEffect } from 'react'
import { Layout } from 'antd'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as Highcharts from 'highcharts'
import Boost from 'highcharts/modules/boost'
import { fetchInitialData } from './service/initialload'
import { fetchUserDetails } from './store/auth'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import { NEW_UI } from './constants'
import FrontPage from './components/front/FrontPage'
import SearchPage from './components/search/SearchPage'
import SmearIVPage from './components/smear-iv/SmearIVPage'
import TermsOfUsePage from './components/terms-of-use/TermsOfUsePage'
import ContactPage from './components/contact/ContactPage'
import DownloadPage from './components/download/DownloadPage'

import './App.css'

Boost(Highcharts)

function App() {
  const dispatch = useDispatch()

  if (NEW_UI) {
    useEffect(() => {
      dispatch(fetchInitialData())
      dispatch(fetchUserDetails())
    }, [dispatch])
  }
  else {
    useEffect(() => {
      dispatch(fetchInitialData())
    }, [dispatch])
  }

  return (
      <Layout className="App">
        <Router>
          <AppHeader />
          <Switch>
            <Route path="/preview">
              <SearchPage />
            </Route>
            <Route path="/download">
              <DownloadPage />
            </Route>
            <Route path="/terms-of-use">
              <TermsOfUsePage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/smear-iv">
              <SmearIVPage />
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

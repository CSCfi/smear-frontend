import React, { useEffect } from 'react'
import { ConfigProvider, Layout } from 'antd'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
import { useAppDispatch } from './hooks'

import './App.css'

Boost(Highcharts)

function App() {
  const dispatch = useAppDispatch()

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
    <ConfigProvider theme={{ token: {
      fontFamily: "Lato"
    } }}>
      <Layout className="App">
        <Router>
          <AppHeader />
          <Routes>
            <Route path="/preview" element={<SearchPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/terms-of-use" element={<TermsOfUsePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/smear-iv" element={<SmearIVPage />} />
            <Route path="/" element={<FrontPage />} />
          </Routes>
          <AppFooter />
        </Router>
      </Layout>
    </ConfigProvider>
  )
}

export default App

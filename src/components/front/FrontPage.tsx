import React, { useEffect } from 'react'
import { Divider, Layout } from 'antd'

import { recordMetricsEvent } from '../../service/metrics'

import About from './About'
import Acknowledgements from './Acknowledgements'
import FrontPageCharts from './FrontPageCharts'
import Instructions from './Instructions'

const { Content } = Layout

const FrontPage = () => {
  useEffect(() => {
    document.title = "SmartSMEAR - About"
    recordMetricsEvent("ABOUT")
  }, [])

  return (
    <Layout className="AppPage">
      <Content>
        <About />
        <Divider />
        <FrontPageCharts />
        <Divider />
        <Instructions />
        <Acknowledgements />
      </Content>
    </Layout>
  )
}

export default FrontPage

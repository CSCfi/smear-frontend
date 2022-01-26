import React, { useEffect } from 'react'
import { Layout } from 'antd'

import { recordMetricsEvent } from '../../service/metrics'

import SearchSider from './SearchSider'
import SearchPageCharts from './SearchPageCharts'
import OpenStreetMap from '../OpenStreetMap'

const SearchPage: React.FC = () => {
  useEffect(() => {
    document.title = "SmartSMEAR - Preview"
    recordMetricsEvent("PREVIEW")
  }, [])

  return (
    <Layout className="AppPage">
      <SearchSider />
      <Layout.Content>
        <SearchPageCharts />
      </Layout.Content>
      <Layout.Sider
        className="AppSider"
        breakpoint='xl'
        collapsedWidth={0}
        reverseArrow
        width={300}
      >
        <OpenStreetMap />
      </Layout.Sider>
    </Layout>
  )
}

export default SearchPage

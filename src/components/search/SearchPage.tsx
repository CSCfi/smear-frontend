import React, { useEffect } from 'react'
import { Layout } from 'antd'

import { recordMetricsEvent } from '../../service/metrics'

import SearchForm from './SearchForm'
import SearchSider from './SearchSider'
import SearchPageCharts from './SearchPageCharts'
import OpenStreetMap from '../OpenStreetMap'

const SearchPage: React.FC = () => {
  useEffect(() => {
    document.title = "SmartSMEAR - Preview"
    recordMetricsEvent("PREVIEW")
  }, [])

  return (
    <>
      <Layout>
        <SearchSider />
        <Layout.Content>
          <SearchForm />
          <SearchPageCharts />
        </Layout.Content>
        <Layout.Sider
          breakpoint='xl'
          collapsedWidth={0}
          reverseArrow
          width={300}
        >
          <OpenStreetMap />
        </Layout.Sider>
      </Layout>
    </>
  )
}

export default SearchPage

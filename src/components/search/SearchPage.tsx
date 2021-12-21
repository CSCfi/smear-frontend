import React, { useEffect } from 'react'
import { Layout } from 'antd'

import SearchForm from './SearchForm'
import SearchSider from './SearchSider'
import SearchPageCharts from './SearchPageCharts'
import OpenStreetMap from '../OpenStreetMap'

const SearchPage: React.FC = () => {
  useEffect(() => {
    document.title = "SmartSMEAR - Preview"
  }, [])

  return (
    <>
      <meta name="fdwe-service" content="SMARTSMEAR" />
      <meta name="fdwe-scope" content="PREVIEW" />
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

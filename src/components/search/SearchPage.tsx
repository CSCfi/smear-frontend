import React, { useEffect } from 'react'
import { Layout } from 'antd'
import TreeMenu from './TreeMenu'
import SearchControls from './SearchControls'
import TimeSeriesGrid from './TimeSeriesGrid'

const SearchPage: React.FC = () => {
  useEffect(() => {
    document.title = "AVAA - Search"
  }, [])

  return (
    <Layout>
      <Layout>
        <Layout.Header>
          <img src="company_logo.png" alt="Smart" />
        </Layout.Header>
      </Layout>
      <Layout>
        <Layout.Sider>
          <span><b>Variables:</b></span>
          <TreeMenu />
        </Layout.Sider>
        <Layout.Content>
          <Layout>
            <SearchControls />
            <TimeSeriesGrid />
          </Layout>
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default SearchPage

import React from 'react'
import { Layout } from 'antd'
import TreeMenu from './TreeMenu'
import SearchControls from './SearchControls'
import TimeSeriesGrid from './TimeSeriesGrid'

const SearchPage: React.FC = () => {
  return (
    <Layout>
      <Layout>
        <Layout.Header>SMEAR</Layout.Header>
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

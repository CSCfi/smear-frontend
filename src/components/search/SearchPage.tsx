import React from 'react'
import { Layout } from 'antd'
import TreeMenu from './TreeMenu'
import TimeSeriesGrid from './TimeSeriesGrid'

const SearchPage: React.FC = () => {
  return (
    <Layout>
      <Layout>
        <Layout.Header>SMEAR</Layout.Header>
      </Layout>
      <Layout>
        <Layout.Sider>
          <TreeMenu />
        </Layout.Sider>
      </Layout>
      <Layout>
        <Layout.Content>
          <TimeSeriesGrid />
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default SearchPage

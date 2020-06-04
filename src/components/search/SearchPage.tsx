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
        <Layout.Content>
          <Layout>
            <TimeSeriesGrid />
          </Layout>
        </Layout.Content>
      </Layout>
    </Layout>
  )
}

export default SearchPage

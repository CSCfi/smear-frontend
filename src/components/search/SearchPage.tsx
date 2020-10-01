import React, { useEffect } from 'react'
import { Layout, Tooltip } from 'antd'
import TreeMenu from './TreeMenu'
import SearchControls from './SearchControls'
import TimeSeriesGrid from './TimeSeriesGrid'
import OpenStreetMap from '../OpenStreetMap'

const VARIABLES_TOOLTIP_TEXT = "You may choose stations and variables on the "
  + "left. Clicking a triangle next to station name opens a list of variables "
  + "divided into different categories. Some variables are measured with "
  + "several instruments, (2) after name indicates secondary measurement. You "
  + "may select multiple variables."

const SearchPage: React.FC = () => {
  useEffect(() => {
    document.title = "AVAA - Search"
  }, [])

  return (
    <Layout>
      <Layout.Sider>
        <Tooltip placement="rightBottom" title={VARIABLES_TOOLTIP_TEXT}>
          <span><b>Variables:</b></span>
        </Tooltip>
        <TreeMenu />
      </Layout.Sider>
      <Layout.Content>
        <Layout>
          <SearchControls />
          <TimeSeriesGrid />
        </Layout>
      </Layout.Content>
      <Layout.Sider width={300}>
        <OpenStreetMap />
      </Layout.Sider>
    </Layout>
  )
}

export default SearchPage

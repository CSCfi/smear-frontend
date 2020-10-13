import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Layout } from 'antd'

import { aggregationsSelector, qualitiesSelector } from '../../store/options'
import { treeDataSelector } from '../../store/treedata'

import DownloadSider from './DownloadSider'

const DownloadPage: React.FC = () => {
  const aggregations = useSelector(aggregationsSelector)
  const qualities = useSelector(qualitiesSelector)
  const treeData = useSelector(treeDataSelector)

  useEffect(() => {
    document.title = "AVAA - Download"
  }, [])

  const handleUpdateClick = (
    selectedStation: any,
    selectedCategory: any,
    selectedDateRange: any,
    selectedQuality: any,
    selectedAggregation: any,
    selectedAveraging: any,
    selectedFilter: any,
    selectedFilterConditions: any,
  ) => {
    console.log('Fetch variables')
    console.log(selectedStation)
    console.log(selectedCategory)
    console.log(selectedDateRange)
    console.log(selectedStation)
    console.log(selectedCategory)
    console.log(selectedQuality)
    console.log(selectedAggregation)
    console.log(selectedAveraging)
    console.log(selectedFilter)
    console.log(selectedFilterConditions)
  }

  return (
    <Layout>
      <DownloadSider
        aggregations={aggregations}
        qualities={qualities}
        stations={treeData}
        onUpdateClick={handleUpdateClick}
      />
      <Layout.Content>
        <div>Download Content</div>
      </Layout.Content>
    </Layout>
  )
}

export default DownloadPage

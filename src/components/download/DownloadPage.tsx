import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Layout } from 'antd'

import { aggregationsSelector, qualitiesSelector } from '../../store/options'
import { treeDataSelector } from '../../store/treedata'

import DownloadSider from './DownloadSider'
import DownloadTable from './DownloadTable'

const DownloadPage: React.FC = () => {
  const aggregations = useSelector(aggregationsSelector)
  const qualities = useSelector(qualitiesSelector)
  const treeData = useSelector(treeDataSelector)

  const [selectedVariables, setSelectedVariables] = useState([])

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
    setSelectedVariables(selectedCategory.children)
  }

  return (
    <Layout>
      <DownloadSider
        aggregations={aggregations}
        qualities={qualities}
        stations={treeData}
        onUpdateClick={handleUpdateClick}
      />
      <DownloadTable variables={selectedVariables} />
    </Layout>
  )
}

export default DownloadPage

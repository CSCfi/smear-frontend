import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Layout } from 'antd'
import moment from 'moment'

import { aggregationsSelector, qualitiesSelector } from '../../store/options'
import { treeDataSelector } from '../../store/treedata'
import { DownloadOptions } from '../../types'

import DownloadModal from './DownloadModal'
import DownloadSider from './DownloadSider'
import DownloadTable from './DownloadTable'

const DownloadPage: React.FC = () => {
  const aggregations = useSelector(aggregationsSelector)
  const qualities = useSelector(qualitiesSelector)
  const treeData = useSelector(treeDataSelector)

  const [selectedVariables, setSelectedVariables] = useState([])
  const [downloadVariable, setDownloadVariable] = useState(null)
  const [modalVisible, setModalVisible] = useState(false)

  const [options, setOptions] = useState<DownloadOptions>({
    from: moment().subtract(1, "day"),
    to: moment(),
    quality: 'ANY',
    aggregation: 'NONE',
    averaging: 30,
  })

  useEffect(() => {
    document.title = "AVAA - Download"
  }, [])

  const handleUpdateClick = (variables: any) => {
    setSelectedVariables(variables)
  }

  const handleDownload = (variable: any) => {
    setDownloadVariable(variable)
    setModalVisible(true)
  }

  return (
    <Layout>
      <DownloadSider
        aggregations={aggregations}
        qualities={qualities}
        stations={treeData}
        options={options}
        setOptions={setOptions}
        onUpdateClick={handleUpdateClick}
      />
      <DownloadTable variables={selectedVariables} onDownload={handleDownload} />
      <DownloadModal
        visible={modalVisible}
        setVisible={setModalVisible}
        variable={downloadVariable}
        options={options}
      />
    </Layout>
  )
}

export default DownloadPage

import React, { useEffect, useState } from 'react'
import { Layout } from 'antd'

import { recordMetricsEvent } from '../../service/metrics'

import DownloadSelectedModal from './DownloadSelectedModal'
import DownloadModal from './DownloadModal'
import DownloadSider from './DownloadSider'
import DownloadTable from './DownloadTable'

const DownloadPage: React.FC = () => {
  const [downloadVariable, setDownloadVariable] = useState(null)
  const [downloadVariables, setDownloadVariables] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedModalVisible, setSelectedModalVisible] = useState(false)

  useEffect(() => {
    document.title = "SmartSMEAR - Download"
    recordMetricsEvent("DOWNLOAD")
  }, [])

  const handleDownload = (variable: any) => {
    setDownloadVariable(variable)
    setModalVisible(true)
  }

  const handleDownloadSelected = (variables: any) => {
    setDownloadVariables(variables)
    setSelectedModalVisible(true)
  }

  return (
    <Layout className="AppPage">
      <DownloadSider />
      <Layout.Content>
        <DownloadTable
          onDownload={handleDownload}
          onDownloadSelected={handleDownloadSelected}
        />
      </Layout.Content>
      <DownloadModal
        visible={modalVisible}
        setVisible={setModalVisible}
        variable={downloadVariable}
      />
      <DownloadSelectedModal
        visible={selectedModalVisible}
        setVisible={setSelectedModalVisible}
        variables={downloadVariables}
      />
    </Layout>
  )
}

export default DownloadPage

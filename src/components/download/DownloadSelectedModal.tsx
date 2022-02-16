import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Modal } from 'antd'

import { recordMetricsEvent } from '../../service/metrics'
import { downloadSelector } from '../../store/download'
import { getDownloadLink, getVariableMetaLink } from '../../service/timeseries'

interface DownloadSelectedModalProps {
  visible: boolean,
  setVisible: (visible: boolean) => void,
  variables: any[]
}

const DownloadSelectedModal: React.FC<DownloadSelectedModalProps> = ({
  visible,
  setVisible,
  variables
}) => {
  const {
    selectedStation,
    selectedCategory,
    options
  } = useSelector(downloadSelector)
  const [selectedType, setSelectedType] = useState('csv')

  const { from, to } = options

  if (variables.length === 0 || !options) {
    return null
  }

  const downloadLink = selectedType === 'meta'
    ? getVariableMetaLink(selectedStation.title, selectedCategory.title, variables)
    : getDownloadLink(selectedType, variables, options)

  return (
    <Modal
      title="Select download format"
      visible={visible}
      onCancel={(e:any) => setVisible(false)}
      footer={[
        <Button key="1" onClick={(e:any) => setSelectedType('csv')}>CSV</Button>,
        <Button key="2" onClick={(e:any) => setSelectedType('tsv')}>TXT</Button>,
        <Button key="3" onClick={(e:any) => setSelectedType('meta')}>Meta</Button>,
        <Button
          key="5"
          type="primary"
          href={downloadLink}
          onClick={(e:any) => recordMetricsEvent(`DOWNLOAD / ${selectedStation.name.toUpperCase()} / ${from} - ${to}`)}
          target="blank"
        >Download</Button>
      ]}
    >
    </Modal>
  )
}

export default DownloadSelectedModal

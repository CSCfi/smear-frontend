import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Input, Modal } from 'antd'

import { downloadSelector } from '../../store/download'
import { variablesSelector } from '../../store/variables'
import { getDownloadLink, getVariableMetaLink } from '../../service/timeseries'
import { ISO_8601_DATE_TIME } from '../../constants'

const { TextArea } = Input

interface DownloadModalProps {
  visible: boolean,
  setVisible: (visible: boolean) => void,
  variable: any
}

const DownloadModal: React.FC<DownloadModalProps> = ({
  visible,
  setVisible,
  variable
}) => {
  const {
    selectedStation,
    selectedCategory,
    options
  } = useSelector(downloadSelector)
  const variables = useSelector(variablesSelector)
  const [selectedType, setSelectedType] = useState('csv')
  const { from, to, averaging, quality, aggregation } = options

  if (!variable || !options) {
    return null
  }
  const variableData = variables
    .find(v => variable.key === `${v.tableName}.${v.name}`)

  const downloadLink = selectedType === 'meta'
    ? getVariableMetaLink(
      selectedStation.title,
      selectedCategory.title,
      [variable.key]
    ) : getDownloadLink(selectedType, [variable.key], options)

  return (
    <Modal
      title="Download"
      visible={visible}
      onCancel={(e:any) => setVisible(false)}
      footer={[
        <Button key="1" onClick={(e:any) => setSelectedType('csv')}>CSV</Button>,
        <Button key="2" onClick={(e:any) => setSelectedType('tsv')}>TXT</Button>,
        <Button key="3" onClick={(e:any) => setSelectedType('meta')}>Meta</Button>,
        <Button key="5" type="primary" href={downloadLink}>Download</Button>
      ]}
    >
      <div><b>Variable:</b></div>
      <div>
        Name: {variable.title}<br />
        Description: {variableData ? (variableData.description || '') : ''}<br />
        Source: {variableData ? (variableData.source || '') : ''}<br />
        Unit: {variableData ? variableData.unit || '' : ''}<br />
        Column name: {variable.key.split('.')[1]}<br />
        From table: {variable.key.split('.')[0]}
      </div>
      <div><b>Options:</b></div>
      <div>
        From: {from.format(ISO_8601_DATE_TIME)}<br />
        To: {to.format(ISO_8601_DATE_TIME)}<br />
        Averaging: {averaging}<br />
        Averaging Type: {aggregation}<br />
        Quality: {quality}
      </div>
      <div><b>API call:</b></div>
      <TextArea value={downloadLink} />
    </Modal>
  )
}

export default DownloadModal

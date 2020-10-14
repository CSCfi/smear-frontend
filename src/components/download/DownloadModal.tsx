import React, { useState } from 'react'
import { Button, Input, Modal } from 'antd'

import { getDownloadLink } from '../../service/timeseries'
import { ISO_8601_DATE_TIME } from '../../constants'
import { DownloadOptions } from '../../types'

const { TextArea } = Input

interface DownloadModalProps {
  visible: boolean,
  setVisible: (visible: boolean) => void,
  variable: any,
  options: DownloadOptions
}

const DownloadModal: React.FC<DownloadModalProps> = ({
  visible,
  setVisible,
  variable,
  options,
}) => {
  const [selectedType, setSelectedType] = useState('csv')
  const { from, to, averaging, quality, aggregation } = options

  if (!variable || !options) {
    return null
  }

  const downloadLink = getDownloadLink(selectedType, variable.key, options)

  return (
    <Modal
      title="Download"
      visible={visible}
      onCancel={(e:any) => setVisible(false)}
      footer={[
        <Button key="1" onClick={(e:any) => setSelectedType('csv')}>CSV</Button>,
        <Button key="2" onClick={(e:any) => setSelectedType('tsv')}>TXT</Button>,
        <Button key="3" onClick={(e:any) => setSelectedType('meta')}>Meta</Button>,
        <Button key="4" onClick={(e:any) => setSelectedType('hdf5')}>HDF5</Button>,
        <Button key="5" type="primary" href={downloadLink}>Download</Button>
      ]}
    >
      <div><b>Variable:</b></div>
      <div>
        Name: {variable.title}<br />
        Description: {variable.title}<br />
        Source: <br />
        Unit: <br />
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
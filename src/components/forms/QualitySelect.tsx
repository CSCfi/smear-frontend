import React from 'react'
import { Select } from 'antd'

import { inputStyle } from './styles'

const { Option } = Select

interface QualitySelectProps {
  qualities: any[],
  selectedQuality: any,
  onSelectQuality: (value: any) => void
}

const QualitySelect: React.FC<QualitySelectProps> = ({
  qualities,
  selectedQuality,
  onSelectQuality
}) => {
  return (
    <>
    <div><b>Quality Level:</b></div>
    <Select
      style={inputStyle}
      value={selectedQuality}
      onChange={onSelectQuality}
    >
      {qualities.map((quality: any) =>
      <Option key={quality.id} value={quality.id}>{quality.id}</Option>)}
    </Select>
    </>
  )
}

export default QualitySelect

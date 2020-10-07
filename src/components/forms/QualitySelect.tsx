import React from 'react'
import { Select } from 'antd'

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
  const qualitySelectStyle = {
    minWidth: '200px'
  }
  return (
    <>
    <div><b>Quality Level:</b></div>
    <Select
      style={qualitySelectStyle}
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

import React from 'react'
import { Form, Select } from 'antd'

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
    <Form.Item name="quality-level" label="Processing Level" initialValue={selectedQuality}>
      <Select
        style={inputStyle}
        onChange={onSelectQuality}
      >
        {qualities.map((quality: any) =>
        <Option key={quality.id} value={quality.id}>{quality.id}</Option>)}
      </Select>
    </Form.Item>
  )
}

export default QualitySelect

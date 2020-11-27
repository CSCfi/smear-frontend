import React from 'react'
import { Select } from 'antd'

import { inputStyle } from './styles'

const { Option } = Select

interface AveragingInputProps {
  selectedAveraging: any,
  onSelectAveraging: (value: any) => void
}

const AveragingInput: React.FC<AveragingInputProps> = ({
  selectedAveraging,
  onSelectAveraging
}) => {
  return (
    <>
    <div><b>Averaging:</b></div>
    <Select
      style={inputStyle}
      value={selectedAveraging}
      onChange={onSelectAveraging}
    >
      <Option key={1} value={1}>None</Option>
      <Option key={2} value={30}>30 min</Option>
      <Option key={3} value={60}>1 hour</Option>
    </Select>
    </>
  )
}

export default AveragingInput

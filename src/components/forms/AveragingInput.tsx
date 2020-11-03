import React from 'react'
import { InputNumber } from 'antd'

import { inputStyle } from './styles'

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
    <InputNumber
      style={inputStyle}
      min={1}
      max={60}
      value={selectedAveraging}
      onChange={onSelectAveraging}
    />
    </>
  )
}

export default AveragingInput

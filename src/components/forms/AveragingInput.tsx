import React from 'react'
import { InputNumber } from 'antd'

interface AveragingInputProps {
  selectedAveraging: any,
  onSelectAveraging: (value: any) => void
}

const AveragingInput: React.FC<AveragingInputProps> = ({
  selectedAveraging,
  onSelectAveraging
}) => {
  const averagingInputStyle = {
    minWidth: '200px'
  }
  return (
    <>
    <div><b>Averaging:</b></div>
    <InputNumber
      style={averagingInputStyle}
      min={1}
      max={60}
      value={selectedAveraging}
      onChange={onSelectAveraging}
    />
    </>
  )
}

export default AveragingInput

import React from 'react'
import { Form, Select } from 'antd'

const { Option } = Select

interface AveragingInputProps {
  onSelectAveraging: (value: any) => void
}

const AveragingInput: React.FC<AveragingInputProps> = ({
  onSelectAveraging
}) => {
  return (
    <Form.Item
      name="averaging"
      label="Averaging"
      dependencies={['averaging-type']}
    >
      <Select onChange={onSelectAveraging}>
        <Option key={1} value={1}>None</Option>
        <Option key={2} value={30}>30 min</Option>
        <Option key={3} value={60}>1 hour</Option>
      </Select>
    </Form.Item>
  )
}

export default AveragingInput

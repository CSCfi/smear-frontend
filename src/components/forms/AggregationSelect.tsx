import React from 'react'
import { Select } from 'antd'

import { inputStyle } from './styles'

const { Option } = Select

interface AggregationSelectProps {
  aggregations: any[],
  selectedAggregation: any,
  onSelectAggregation: (value: any) => void
}

const AggregationSelect: React.FC<AggregationSelectProps> = ({
  aggregations,
  selectedAggregation,
  onSelectAggregation
}) => {
  return (
    <>
    <div><b>Averaging Type:</b></div>
    <Select
      style={inputStyle}
      value={selectedAggregation}
      onChange={onSelectAggregation}
    >
      {aggregations.filter((aggregation: any) => aggregation.id !== 'AVAILABILITY').map((aggregation: any) =>
      <Option key={aggregation.id} value={aggregation.id}>{aggregation.id}</Option>)}
    </Select>
    </>
  )
}

export default AggregationSelect

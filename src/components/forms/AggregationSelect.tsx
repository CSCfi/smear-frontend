import React from 'react'
import { Select } from 'antd'

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
  const qualitySelectStyle = {
    minWidth: '200px'
  }
  return (
    <>
    <div><b>Averaging Type:</b></div>
    <Select
      style={qualitySelectStyle}
      value={selectedAggregation}
      onChange={onSelectAggregation}
    >
      {aggregations.map((aggregation: any) =>
      <Option key={aggregation.id} value={aggregation.id}>{aggregation.id}</Option>)}
    </Select>
    </>
  )
}

export default AggregationSelect

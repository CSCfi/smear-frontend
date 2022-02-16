import React from 'react'
import { Form, Select } from 'antd'

const { Option } = Select

interface AggregationSelectProps {
  aggregations: any[],
  onSelectAggregation: (value: any) => void
}

const AggregationSelect: React.FC<AggregationSelectProps> = ({
  aggregations,
  onSelectAggregation
}) => {
  return (
    <Form.Item name="averaging-type" label="Averaging Type" dependencies={["averaging"]}>
      <Select onChange={onSelectAggregation}>
        {aggregations.filter((aggregation: any) => aggregation.id !== 'AVAILABILITY').map((aggregation: any) =>
        <Option key={aggregation.id} value={aggregation.id}>{aggregation.id}</Option>)}
      </Select>
    </Form.Item>
  )
}

export default AggregationSelect

import React from 'react'
import { DatePicker, Form } from 'antd'

const { RangePicker } = DatePicker

interface DateRangePickerProps {
  selectedDateRange: any,
  onSelectDateRange(event: any): void
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  selectedDateRange,
  onSelectDateRange
}) => {
  return (
    <Form.Item
      label="Date Range"
      rules={[{required: true, message: "Select time range"}]}
    >
      <RangePicker
        format="YYYY-MM-DD"
        value={selectedDateRange}
        onChange={onSelectDateRange}
        allowClear={false}
      />
    </Form.Item>
  )
}

export default DateRangePicker

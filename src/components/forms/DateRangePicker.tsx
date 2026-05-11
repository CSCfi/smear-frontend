import React from 'react'
import { DatePicker, Form } from 'antd'
import { Dayjs } from 'dayjs'

const { RangePicker } = DatePicker

interface DateRangePickerProps {
  selectedDateRange: [Dayjs | null, Dayjs | null],
  onSelectDateRange(values: [Dayjs, Dayjs] | null): void
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
        onChange={(values) => onSelectDateRange(values as [Dayjs, Dayjs])}
        allowClear={false}
      />
    </Form.Item>
  )
}

export default DateRangePicker

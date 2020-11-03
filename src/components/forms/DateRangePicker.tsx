import React from 'react'
import { DatePicker } from 'antd'

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
    <>
    <div><b>Date Range</b></div>
    <RangePicker
      format="YYYY-MM-DD"
      value={selectedDateRange}
      onChange={onSelectDateRange}
      allowClear={false}
      style={{ margin: '4px', width: '240px' }}
    />
    </>
  )
}

export default DateRangePicker

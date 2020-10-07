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
      format="YYYY-MM-DD HH:mm"
      value={selectedDateRange}
      onChange={onSelectDateRange}
    />
    </>
  )
}

export default DateRangePicker

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, DatePicker, Space } from 'antd'
import moment, { Moment } from 'moment'
import { fetchTimeSeries } from '../../service/timeseries'
import { tablevariablesSelector } from '../../store/search'

const { RangePicker } = DatePicker
const defaultTime = moment('00:00', 'HH:mm')

const SearchControls: React.FC = () => {
  const dispatch = useDispatch()
  const tablevariables = useSelector(tablevariablesSelector)
  const [dateRange, setDateRange] = useState<Moment[]>([])

  const onDateRangeChange = (value: any) => setDateRange(value as Moment[])
  const onPlotClick = () => dispatch(fetchTimeSeries(tablevariables, dateRange[0], dateRange[1]))

  return (
    <Space>
      <RangePicker
        showTime={{ format: 'HH:mm', defaultValue: [defaultTime, defaultTime] }}
        format="YYYY-MM-DD HH:mm"
        onChange={onDateRangeChange}
      />
      <Button onClick={onPlotClick} type="primary">
        Plot
      </Button>
    </Space>
  )
}

export default SearchControls

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, DatePicker, InputNumber, Select, Space } from 'antd'
import moment, { Moment } from 'moment'
import { fetchTimeSeries } from '../../service/timeseries'
import optionsSlice, {
  aggregationsSelector,
  qualitiesSelector,
  selectedAggregationSelector,
  selectedQualitySelector,
  intervalSelector,
} from '../../store/options'
import { tablevariablesSelector } from '../../store/search'

const { Option } = Select
const { RangePicker } = DatePicker
const { selectQuality, selectAggregation, setInterval } = optionsSlice.actions
const defaultTime = moment('00:00', 'HH:mm')

const SearchControls: React.FC = () => {
  const dispatch = useDispatch()
  const qualities = useSelector(qualitiesSelector)
  const aggregations = useSelector(aggregationsSelector)
  const tablevariables = useSelector(tablevariablesSelector)
  const selectedQuality = useSelector(selectedQualitySelector)
  const selectedAggregation = useSelector(selectedAggregationSelector)
  const selectedInterval = useSelector(intervalSelector)
  const [selectedDateRange, setDateRange] = useState<Moment[]>([])

  const onQualityChange = (value: string) => dispatch(selectQuality(value))
  const onAggregationChange = (value: string) => dispatch(selectAggregation(value))
  const onIntervalChange = (value: any) => dispatch(setInterval(value as number))
  const onDateRangeChange = (value: any) => setDateRange(value as Moment[])
  const onPlotClick = () =>
    dispatch(
      fetchTimeSeries(
        tablevariables,
        selectedDateRange[0],
        selectedDateRange[1],
        selectedQuality,
        selectedAggregation,
        selectedInterval
      )
    )

  return (
    <Space>
      <Select value={selectedQuality} onChange={onQualityChange}>
        {qualities.map((quality) => (
          <Option key={quality.id} value={quality.id}>
            {quality.id}
          </Option>
        ))}
      </Select>
      <Select value={selectedAggregation} onChange={onAggregationChange}>
        {aggregations.map((aggregation) => (
          <Option key={aggregation.id} value={aggregation.id}>
            {aggregation.id}
          </Option>
        ))}
      </Select>
      <InputNumber
        min={1}
        max={60}
        value={selectedInterval}
        onChange={onIntervalChange}
        disabled={selectedAggregation === 'NONE'}
        defaultValue={30}
      />
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

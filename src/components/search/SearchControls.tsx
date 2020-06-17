import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, DatePicker, Select, Space } from 'antd'
import moment, { Moment } from 'moment'
import { fetchTimeSeries } from '../../service/timeseries'
import optionsSlice, {
  aggregationsSelector,
  qualitiesSelector,
  selectedAggregationSelector,
  selectedQualitySelector,
} from '../../store/options'
import { tablevariablesSelector } from '../../store/search'

const { Option } = Select
const { RangePicker } = DatePicker
const { selectAggregation, selectQuality } = optionsSlice.actions
const defaultTime = moment('00:00', 'HH:mm')

const SearchControls: React.FC = () => {
  const dispatch = useDispatch()
  const aggregations = useSelector(aggregationsSelector)
  const qualities = useSelector(qualitiesSelector)
  const tablevariables = useSelector(tablevariablesSelector)
  const selectedAggregation = useSelector(selectedAggregationSelector)
  const selectedQuality = useSelector(selectedQualitySelector)
  const [selectedDateRange, setDateRange] = useState<Moment[]>([])

  const onAggregationChange = (value: string) => dispatch(selectAggregation(value))
  const onQualityChange = (value: string) => dispatch(selectQuality(value))
  const onDateRangeChange = (value: any) => setDateRange(value as Moment[])
  const onPlotClick = () =>
    dispatch(
      fetchTimeSeries(
        tablevariables,
        selectedDateRange[0],
        selectedDateRange[1],
        selectedQuality,
        selectedAggregation
      )
    )

  return (
    <Space>
      <Select value={selectedAggregation} onChange={onAggregationChange}>
        {aggregations.map((aggregation) => (
          <Option key={aggregation.id} value={aggregation.id}>
            {aggregation.id}
          </Option>
        ))}
      </Select>
      <Select value={selectedQuality} onChange={onQualityChange}>
        {qualities.map((quality) => (
          <Option key={quality.id} value={quality.id}>
            {quality.id}
          </Option>
        ))}
      </Select>
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

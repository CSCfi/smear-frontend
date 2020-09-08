import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, DatePicker, Form, InputNumber, Select, Spin } from 'antd'
import moment, { Moment } from 'moment'
import { fetchTimeSeries } from '../../service/timeseries'
import optionsSlice, {
  aggregationsSelector,
  qualitiesSelector,
  selectedAggregationSelector,
  selectedQualitySelector,
  intervalSelector,
} from '../../store/options'
import { fetchingSelector, tablevariablesSelector } from '../../store/search'

const { Option } = Select
const { RangePicker } = DatePicker
const { selectQuality, selectAggregation, setInterval } = optionsSlice.actions

const SearchControls: React.FC = () => {
  const dispatch = useDispatch()
  const qualities = useSelector(qualitiesSelector)
  const aggregations = useSelector(aggregationsSelector)
  const fetching = useSelector(fetchingSelector)
  const tablevariables = useSelector(tablevariablesSelector)
  const selectedQuality = useSelector(selectedQualitySelector)
  const selectedAggregation = useSelector(selectedAggregationSelector)
  const selectedInterval = useSelector(intervalSelector)
  const [selectedDateRange, setDateRange] = useState<Moment[]>([moment().subtract(1, "day"), moment()])

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
    <Form layout="inline">
      <Form.Item label="Quality Level" name="quality-level">
        <Select placeholder={selectedQuality} onChange={onQualityChange}>
          {qualities.map((quality) => (
            <Option key={quality.id} value={quality.id}>
              {quality.id}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Averaging" name="averaging" initialValue={30}>
        <InputNumber
          min={1}
          max={60}
          value={selectedInterval}
          onChange={onIntervalChange}
          disabled={selectedAggregation === 'NONE'}
        />
      </Form.Item>
      <Form.Item label="Averaging Type" name="averaging-type">
        <Select placeholder={selectedAggregation} onChange={onAggregationChange}>
          {aggregations.map((aggregation) => (
            <Option key={aggregation.id} value={aggregation.id}>
              {aggregation.id}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="time-interval"
        initialValue={selectedDateRange}
        rules={[{required: true, message: "Select time range"}]}
      >
        <RangePicker format="YYYY-MM-DD HH:mm" onChange={onDateRangeChange} />
      </Form.Item>
      <Form.Item name="plot">
        <Button
            onClick={onPlotClick}
            type="primary"
            disabled={!selectedDateRange || !tablevariables.length || fetching}>
          Plot
        </Button>
      </Form.Item>
      {fetching && <Spin />}
    </Form>
  )
}

export default SearchControls

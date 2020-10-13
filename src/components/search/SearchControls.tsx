import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Spin } from 'antd'
import moment, { Moment } from 'moment'

import { AggregationSelect, AveragingInput, DateRangePicker, QualitySelect } from '../forms'

import { fetchTimeSeries } from '../../service/timeseries'

import optionsSlice, {
  aggregationsSelector,
  qualitiesSelector,
  selectedAggregationSelector,
  selectedQualitySelector,
  intervalSelector,
} from '../../store/options'
import { fetchingSelector, tablevariablesSelector } from '../../store/search'

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

  const formStyle = {
    alignItems: 'end'
  }

  return (
    <Form style={formStyle} layout="inline">
      <Form.Item
        name="time-interval"
        rules={[{required: true, message: "Select time range"}]}
      >
        <DateRangePicker
          selectedDateRange={selectedDateRange}
          onSelectDateRange={onDateRangeChange}
        />
      </Form.Item>
      <Form.Item name="quality-level">
        <QualitySelect
          qualities={qualities}
          selectedQuality={selectedQuality}
          onSelectQuality={onQualityChange}
        />
      </Form.Item>
      <Form.Item name="averaging" initialValue={30}>
        <AveragingInput
          selectedAveraging={selectedInterval}
          onSelectAveraging={onIntervalChange}
        />
      </Form.Item>
      <Form.Item name="averaging-type">
        <AggregationSelect
          aggregations={aggregations}
          selectedAggregation={selectedAggregation}
          onSelectAggregation={onAggregationChange}
        />
      </Form.Item>
      <Button
          onClick={onPlotClick}
          type="primary"
          disabled={!selectedDateRange || !tablevariables.length || fetching}>
        Plot
      </Button>
      {fetching && <Spin />}
    </Form>
  )
}

export default SearchControls

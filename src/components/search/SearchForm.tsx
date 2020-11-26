import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { message, Button, Form, Spin } from 'antd'
import { Moment } from 'moment'

import { fetchTimeSeries } from '../../service/timeseries'
import { aggregationsSelector, qualitiesSelector } from '../../store/options'
import searchSlice, { searchSelector } from '../../store/search'
import { AggregationSelect, AveragingInput, DateRangePicker, QualitySelect } from '../forms'

import { formStyle } from '../forms/styles'

const { setOptions, setTimeSeries } = searchSlice.actions

const SearchForm = () => {
  const dispatch = useDispatch()
  const aggregations = useSelector(aggregationsSelector)
  const qualities = useSelector(qualitiesSelector)
  const { fetching, options, tablevariables } = useSelector(searchSelector)
  const { from, to, quality, aggregation, averaging } = options

  const onQualityChange = (quality: string) => dispatch(setOptions({ ...options, quality }))
  const onAggregationChange = (aggregation: string) => dispatch(setOptions({ ...options, aggregation }))
  const onIntervalChange = (averaging: any) => dispatch(setOptions({ ...options, averaging }))
  const onDateRangeChange = ([from, to]: Moment[]) => {
    if (to.isAfter()) {
      message.info('Please do not select a date interval that is in the future')
    } else {
      dispatch(setOptions({ ...options, from, to: to.endOf('day') }))
    }
  }

  const onPlotClick = () =>  dispatch(fetchTimeSeries(tablevariables, options, setTimeSeries))

  return (
    <Form style={formStyle} layout="inline">
      <Form.Item
        name="time-interval"
        rules={[{required: true, message: "Select time range"}]}
      >
        <DateRangePicker
          selectedDateRange={[from, to]}
          onSelectDateRange={onDateRangeChange}
        />
      </Form.Item>
      <Form.Item name="quality-level">
        <QualitySelect
          qualities={qualities}
          selectedQuality={quality}
          onSelectQuality={onQualityChange}
        />
      </Form.Item>
      <Form.Item name="averaging" initialValue={30}>
        <AveragingInput
          selectedAveraging={averaging}
          onSelectAveraging={onIntervalChange}
        />
      </Form.Item>
      <Form.Item name="averaging-type">
        <AggregationSelect
          aggregations={aggregations}
          selectedAggregation={aggregation}
          onSelectAggregation={onAggregationChange}
        />
      </Form.Item>
      <Button
          style={{ margin: '4px' }}
          onClick={onPlotClick}
          type="primary"
          disabled={!to || !from || !tablevariables.length || fetching}>
        Plot
      </Button>
      {fetching && <Spin />}
    </Form>
  )
}

export default SearchForm

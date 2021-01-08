import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { message, Button, Form, Spin } from 'antd'
import moment, { Moment } from 'moment'

import { fetchTimeSeries } from '../../service/timeseries'
import { aggregationsSelector, qualitiesSelector } from '../../store/options'
import searchSlice, { searchSelector } from '../../store/search'
import { AggregationSelect, AveragingInput, DateRangePicker, QualitySelect } from '../forms'

const { setOptions, setTimeSeries } = searchSlice.actions

const SearchForm = () => {
  const dispatch = useDispatch()
  const aggregations = useSelector(aggregationsSelector)
  const qualities = useSelector(qualitiesSelector)
  const { fetching, options, tablevariables } = useSelector(searchSelector)
  const { from, to, quality, aggregation, averaging } = options

  const onQualityChange = (quality: string) => dispatch(setOptions({ ...options, quality }))
  const onAggregationChange = (aggregation: string) => {
    if (aggregation === 'NONE') {
      dispatch(setOptions({ ...options, aggregation, averaging: 1 }))
    } else if (averaging === 1) {
      dispatch(setOptions({ ...options, aggregation, averaging: 60 }))
    } else {
      dispatch(setOptions({ ...options, aggregation }))
    }
  }
  const onIntervalChange = (averaging: any) => {
    if (averaging === 1) {
      dispatch(setOptions({ ...options, aggregation: 'NONE', averaging }))
    } else if (aggregation === 'NONE') {
      dispatch(setOptions({ ...options, aggregation: 'ARITHMETIC', averaging }))
    } else {
      dispatch(setOptions({ ...options, averaging }))
    }
  }
  const onDateRangeChange = ([from, to]: Moment[]) => {
    if (to.isAfter(moment().endOf('day'))) {
      message.info('Please do not select a date interval that is in the future')
    } else {
      dispatch(setOptions({ ...options, from, to: to.endOf('day') }))
    }
  }

  const onPlotClick = () =>  dispatch(fetchTimeSeries(tablevariables, options, setTimeSeries))

  return (
    <Form className= 'smear-form' layout="inline">
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

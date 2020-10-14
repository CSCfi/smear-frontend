import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Spin } from 'antd'
import moment, { Moment } from 'moment'

import { AggregationSelect, AveragingInput, DateRangePicker, QualitySelect } from '../forms'

import { formStyle } from '../forms/styles'
import { fetchTimeSeries } from '../../service/timeseries'
import { DownloadOptions } from '../../types'

import { aggregationsSelector, qualitiesSelector } from '../../store/options'
import { fetchingSelector, tablevariablesSelector } from '../../store/search'

const SearchControls: React.FC = () => {
  const dispatch = useDispatch()
  const qualities = useSelector(qualitiesSelector)
  const aggregations = useSelector(aggregationsSelector)
  const fetching = useSelector(fetchingSelector)
  const tablevariables = useSelector(tablevariablesSelector)

  const [options, setOptions] = useState<DownloadOptions>({
    from: moment().subtract(1, "day"),
    to: moment(),
    quality: 'ANY',
    aggregation: 'NONE',
    averaging: 30
  })

  const { from, to, quality, aggregation, averaging } = options

  const onQualityChange = (quality: string) => setOptions({ ...options, quality })
  const onAggregationChange = (aggregation: string) => setOptions({ ...options, aggregation })
  const onIntervalChange = (averaging: any) => setOptions({ ...options, averaging })
  const onDateRangeChange = ([from, to]: Moment[]) => setOptions({ ...options, from, to })

  const onPlotClick = async () => {
    const response = await dispatch(fetchTimeSeries(tablevariables, options))
    console.log(typeof(response))
  }

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
          onClick={onPlotClick}
          type="primary"
          disabled={!to || !from || !tablevariables.length || fetching}>
        Plot
      </Button>
      {fetching && <Spin />}
    </Form>
  )
}

export default SearchControls

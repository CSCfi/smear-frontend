import React from 'react'
import { message, Button, Form, Spin } from 'antd'
import { Moment } from 'moment'

import { AggregationSelect, AveragingInput, DateRangePicker, QualitySelect } from '../forms'

import { formStyle } from '../forms/styles'
import { DownloadOptions } from '../../types'

interface SearchFormProps {
  aggregations: any[],
  qualities: any,
  tablevariables: any[],
  fetching: boolean,
  options: DownloadOptions,
  setOptions: (options: DownloadOptions) => void
  onPlotClick: () => void
}

const SearchForm: React.FC<SearchFormProps> = ({
  aggregations,
  qualities,
  tablevariables,
  fetching,
  options,
  setOptions,
  onPlotClick
}) => {
  const { from, to, quality, aggregation, averaging } = options

  const onQualityChange = (quality: string) => setOptions({ ...options, quality })
  const onAggregationChange = (aggregation: string) => setOptions({ ...options, aggregation })
  const onIntervalChange = (averaging: any) => setOptions({ ...options, averaging })
  const onDateRangeChange = ([from, to]: Moment[]) => {
    if (to.isAfter()) {
      message.info('Please do not select a date interval that is in the future')
    } else {
      setOptions({ ...options, from, to })
    }
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

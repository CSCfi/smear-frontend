import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { message, Alert, Button, Col, Form, Row, Spin } from 'antd'
import moment, { Moment } from 'moment'

import { ISO_8601_DATE_TIME } from '../../constants'
import { fetchTimeSeries } from '../../service/timeseries'
import { aggregationsSelector, qualitiesSelector } from '../../store/options'
import searchSlice, { searchSelector } from '../../store/search'
import { AggregationSelect, AveragingInput, DateRangePicker, QualitySelect } from '../forms'

const { setOptions, setTimeSeries } = searchSlice.actions

const SearchErrorAlert = () => {
  const { errorMessage } = useSelector(searchSelector)

  if (!errorMessage) {
    return null
  } else {
    return <Alert type="error" message={errorMessage} showIcon />
  }
}

const SearchWarningAlert = () => {
  const { warningMessage } = useSelector(searchSelector)

  if (!warningMessage) {
    return null
  } else {
    return <Alert type="warning" message={warningMessage} showIcon />
  }
}

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
      dispatch(setOptions({
        ...options,
        from: from.format(ISO_8601_DATE_TIME),
        to: to.endOf('day').format(ISO_8601_DATE_TIME)
      }))
    }
  }

  const onPlotClick = () =>  dispatch(fetchTimeSeries(tablevariables, options, setTimeSeries))

  return (
    <Form
      className='AppForm'
      layout="vertical"
      fields={[
        { name: ['averaging-type'], value: aggregation },
        { name: ['averaging'], value: averaging }
      ]}
    >
      <Row>
        <Col xs={24}>
          <DateRangePicker
            selectedDateRange={[moment(from, ISO_8601_DATE_TIME), moment(to, ISO_8601_DATE_TIME)]}
            onSelectDateRange={onDateRangeChange}
          />
        </Col>
      </Row>
      <Row justify={"space-between"}>
        <Col xs={11}>
          <QualitySelect
            qualities={qualities}
            selectedQuality={quality}
            onSelectQuality={onQualityChange}
          />
        </Col>
        <Col xs={11}>
          <AveragingInput onSelectAveraging={onIntervalChange} />
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <AggregationSelect
            aggregations={aggregations}
            onSelectAggregation={onAggregationChange}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <Form.Item>
            <Button
              style={{ width: "100%" }}
              onClick={onPlotClick}
              type="primary"
              disabled={!to || !from || !tablevariables.length || fetching}>
              Plot
            </Button>
          </Form.Item>
          {fetching && <Spin />}
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <SearchErrorAlert />
          <SearchWarningAlert />
        </Col>
      </Row>
    </Form>
  )
}

export default SearchForm

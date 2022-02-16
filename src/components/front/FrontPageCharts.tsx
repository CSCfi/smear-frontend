import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row } from 'antd'
import moment from 'moment'

import { FRONT_PAGE_CHARTS, ISO_8601_DATE_TIME } from '../../constants'
import { fetchTimeSeries } from '../../service/timeseries'
import timeSeriesSlice, { timeSeriesSelector } from '../../store/timeseries'
import { DownloadOptions } from '../../types'

import FrontPageForm from './FrontPageForm'
import TimeSeriesGrid from '../timeseries/TimeSeriesGrid'

const { setTimeSeries } = timeSeriesSlice.actions

const FrontPageCharts = () => {
  const dispatch = useDispatch()
  const timeSeries = useSelector(timeSeriesSelector)

  useEffect(() => {
    fetchData()
  }, [])

  const [options, setOptions] = useState<DownloadOptions>({
    from: moment().subtract(2, "day").startOf('day').format(ISO_8601_DATE_TIME),
    to: moment().endOf('day').format(ISO_8601_DATE_TIME),
    quality: 'ANY',
    aggregation: 'NONE',
    averaging: 30,
  })

  const dataSource = FRONT_PAGE_CHARTS.filter(chart => chart.series !== undefined)

  const fetchData = () => {
    dispatch(fetchTimeSeries(
      dataSource.flatMap(chart => chart.series === undefined ? [] : chart.series.map(serie => serie.tableVariable)),
      options,
      setTimeSeries
    ))
  }

  return (
    <div className="AppContainer">
      <Row justify={"space-around"}>
        <FrontPageForm
          options={options}
          setOptions={setOptions}
          handlePlot={fetchData}
        />
      </Row>
      <TimeSeriesGrid timeSeries={timeSeries} chartData={dataSource} />
    </div>
  )
}

export default FrontPageCharts

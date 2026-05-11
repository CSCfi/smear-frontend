import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Row } from 'antd'
import dayjs from 'dayjs'

import { FRONT_PAGE_CHARTS, ISO_8601_DATE_TIME } from '../../constants'
import { fetchTimeSeries } from '../../service/timeseries'
import timeSeriesSlice, { timeSeriesSelector } from '../../store/timeseries'
import type { DownloadOptions } from '../../types'
import { useAppDispatch } from '../../hooks'

import FrontPageForm from './FrontPageForm'
import TimeSeriesGrid from '../timeseries/TimeSeriesGrid'

const { setTimeSeries } = timeSeriesSlice.actions

const FrontPageCharts = () => {
  const dispatch = useAppDispatch()
  const timeSeries = useSelector(timeSeriesSelector)

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [])

  const [options, setOptions] = useState<DownloadOptions>({
    from: dayjs().subtract(2, "day").startOf('day').format(ISO_8601_DATE_TIME),
    to: dayjs().endOf('day').format(ISO_8601_DATE_TIME),
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

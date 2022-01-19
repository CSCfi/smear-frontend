import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Divider, Layout } from 'antd'
import moment from 'moment'

import { recordMetricsEvent } from '../../service/metrics'
import { fetchTimeSeries } from '../../service/timeseries'
import timeSeriesSlice, { timeSeriesSelector } from '../../store/timeseries'

import FrontPageCharts from './FrontPageCharts'
import FrontPageForm from './FrontPageForm'
import About from './About'
import Instructions from './Instructions'
import Acknowledgements from './Acknowledgements'

import { FRONT_PAGE_CHARTS, ISO_8601_DATE_TIME } from '../../constants'
import { DownloadOptions } from '../../types'

const { Content } = Layout


const { setTimeSeries } = timeSeriesSlice.actions

const FrontPage = () => {
  const dispatch = useDispatch()
  const timeSeries = useSelector(timeSeriesSelector)

  const [options, setOptions] = useState<DownloadOptions>({
    from: moment().subtract(2, "day").startOf('day').format(ISO_8601_DATE_TIME),
    to: moment().endOf('day').format(ISO_8601_DATE_TIME),
    quality: 'ANY',
    aggregation: 'NONE',
    averaging: 30,
  })

  const fetchData = () => {
    let tableVariables: string[] = []
    for (let i in FRONT_PAGE_CHARTS) {
      const chart = FRONT_PAGE_CHARTS[i]
      if (chart.series === undefined) {
        continue
      }
      for (let j in chart.series) {
        tableVariables.push(chart.series[j].tableVariable)
      }
    }

    dispatch(fetchTimeSeries(tableVariables, options, setTimeSeries))
  }

  useEffect(() => {
    document.title = "SmartSMEAR - About"
    recordMetricsEvent("ABOUT")
    fetchData()
  }, [])

  const handlePlotClick = () => fetchData()

  return (
    <>
      <Layout>
        <Content>
          <About /><br />
          <div>
            <Divider />
            <FrontPageForm
              options={options}
              setOptions={setOptions}
              handlePlot={handlePlotClick}
            />
            <FrontPageCharts timeSeries={timeSeries} />
            <Divider />
          </div><br />
          <Instructions /><br />
          <Acknowledgements />
        </Content>
      </Layout>
    </>
  )
}

export default FrontPage

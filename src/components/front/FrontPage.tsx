import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Layout } from 'antd'
import moment from 'moment'

import { fetchTimeSeries } from '../../service/timeseries'
import { timeSeriesSelector } from '../../store/timeseries'

import FrontPageCharts from './FrontPageCharts'
import FrontPageForm from './FrontPageForm'
import OpenStreetMap from '../OpenStreetMap'

import { FRONT_PAGE_CHARTS } from '../../constants'
import { DownloadOptions } from '../../types'

const { Content, Sider } = Layout

const FrontPage = () => {
  const dispatch = useDispatch()
  const timeSeries = useSelector(timeSeriesSelector)

  const [options, setOptions] = useState<DownloadOptions>({
    from: moment().subtract(1, "day").startOf('day'),
    to: moment().startOf('day'),
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

    dispatch(fetchTimeSeries(tableVariables, options))
  }

  useEffect(() => {
    document.title = "AVAA - SMEAR"
    fetchData()
  }, [])

  const handlePlotClick = () => fetchData()

  return (
    <Layout>
      <Content>
        <FrontPageForm
          options={options}
          setOptions={setOptions}
          handlePlot={handlePlotClick}
        />
        <FrontPageCharts timeSeries={timeSeries} />
      </Content>
      <Sider breakpoint='xl' collapsedWidth={0} width={300}>
        <OpenStreetMap />
      </Sider>
    </Layout>
  )
}

export default FrontPage

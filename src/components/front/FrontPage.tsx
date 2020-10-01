import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, DatePicker, Form, Layout, List } from 'antd'
import moment, { Moment } from 'moment'

import { fetchTimeSeries } from '../../service/timeseries'
import { timeSeriesSelector } from '../../store/timeseries'

import OpenStreetMap from '../OpenStreetMap'
import TimeSeriesChart from '../TimeSeriesChart'

import { FRONT_PAGE_CHARTS } from '../../constants'

const { Item } = Form
const { RangePicker } = DatePicker
const { Content, Sider } = Layout

export type FrontPageChart = {
  name: string
  series: string
  data: any 
}

const FrontPage = () => {
  const dispatch = useDispatch()
  const timeSeries = useSelector(timeSeriesSelector)
  const [selectedDateRange, setDateRange] = useState<Moment[]>([moment().subtract(1, "day"), moment()])

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

  const fetchData = () => {
    dispatch(fetchTimeSeries(
      tableVariables,
      selectedDateRange[0],
      selectedDateRange[1],
      'ANY', // CHECKED in production
      'NONE',
      30
    ))
  }

  useEffect(fetchData, [])

  const handleRangePickerChange = (value:any) => setDateRange(value)
  const handlePlotClick = () => fetchData()

  return (
    <Layout>
      <Content>
        <Form layout="inline">
          <Item name="time-interval" initialValue={selectedDateRange}>
            <RangePicker
              format="YYYY-MM-DD HH:mm"
              onChange={handleRangePickerChange}
            />
          </Item>
          <Item>
            <Button
                type="primary"
                onClick={handlePlotClick}
            >
              Plot
            </Button>
          </Item>
        </Form>
        <List dataSource={FRONT_PAGE_CHARTS} renderItem={item => (
          <List.Item>
            {item.series !== undefined
              && <TimeSeriesChart
                  name={item.name}
                  data={item.series.map(seriesItem => {
                    return {
                      name: seriesItem.caption,
                      color: seriesItem.color,
                      data: timeSeries[seriesItem.tableVariable] || []
                    }
                  })}
                 />}
          </List.Item>
        )}>
        </List>
      </Content>
      <Sider width={300}>
        <OpenStreetMap />
      </Sider>
    </Layout>
  )
}

export default FrontPage

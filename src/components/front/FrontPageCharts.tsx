import React from 'react'
import { List } from 'antd'

import { FRONT_PAGE_CHARTS } from '../../constants'

import TimeSeriesChart from '../timeseries/TimeSeriesChart'

const { Item } = List

interface FrontPageChartsProps {
  timeSeries: any
}

const FrontPageCharts: React.FC<FrontPageChartsProps> = ({ timeSeries }) => {
  const charts = FRONT_PAGE_CHARTS
  return (
    <List dataSource={charts.filter(chart => chart.series !== undefined)} renderItem={(item: any) => (
      <Item>
        {item.series !== undefined
          && <TimeSeriesChart
              name={item.name}
              data={item.series.map((seriesItem: any) => {
                return {
                  name: seriesItem.caption,
                  color: seriesItem.color,
                  data: timeSeries[seriesItem.tableVariable] || []
                }
              })}
             />}
      </Item>
    )}>
    </List>
  )
}

export default FrontPageCharts

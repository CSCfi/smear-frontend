import React from 'react'
import { List } from 'antd'

import TimeSeriesChart from './TimeSeriesChart'

const { Item } = List

interface SearchPageChartsProps {
  timeSeries: any
}

const SearchPageCharts: React.FC<SearchPageChartsProps> = ({ timeSeries }) => {
  const renderItem = (variableName: string) => (
    <Item key={variableName}>
      <TimeSeriesChart
        name={variableName}
        data={timeSeries[variableName]}
      />
    </Item>
  )

  return (
    <List
      dataSource={Object.keys(timeSeries)}
      renderItem={renderItem}
    />
  )
}

export default SearchPageCharts

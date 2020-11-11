import React from 'react'
import { useSelector } from 'react-redux'
import { List } from 'antd'

import { searchSelector } from '../../store/search'

import TimeSeriesChart from '../timeseries/TimeSeriesChart'

const { Item } = List

const SearchPageCharts = () => {
  const { timeseries } = useSelector(searchSelector)

  const renderItem = (variableName: string) => {
    const data = [{
      name: variableName,
      color: 'red',
      data: timeseries[variableName]
    }]
    return (
      <Item key={variableName}>
        <TimeSeriesChart
          name={variableName}
          data={data}
        />
      </Item>
    )
  }

  return (
    <List
      dataSource={Object.keys(timeseries)}
      renderItem={renderItem}
    />
  )
}

export default SearchPageCharts

import React from 'react'
import { useSelector } from 'react-redux'
import { List } from 'antd'

import { tablevariablesSelector } from '../../store/search'

import TimeSeriesChart from '../timeseries/TimeSeriesChart'

const { Item } = List

interface SearchPageChartsProps {
  timeSeries: any
}

const SearchPageCharts: React.FC<SearchPageChartsProps> = ({ timeSeries }) => {
  const tablevariables = useSelector(tablevariablesSelector)

  const renderItem = (variableName: string) => {
    const data = [{
      name: variableName,
      color: 'red',
      data: timeSeries[variableName]
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
      dataSource={Object.keys(timeSeries)
        .filter(timeSerie => tablevariables.includes(timeSerie))}
      renderItem={renderItem}
    />
  )
}

export default SearchPageCharts

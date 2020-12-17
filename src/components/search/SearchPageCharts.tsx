import React from 'react'
import { useSelector } from 'react-redux'
import { List } from 'antd'

import { searchSelector } from '../../store/search'
import { variablesSelector } from '../../store/variables'

import TimeSeriesChart from '../timeseries/TimeSeriesChart'

const { Item } = List

const SearchPageCharts = () => {
  const { timeseries } = useSelector(searchSelector)
  const variables = useSelector(variablesSelector)

  const getVariableTitle = (tablevariable: any) => {
    const variableMetadata = variables.find((v: any) => v.tableName + '.' + v.name === tablevariable)
    return variableMetadata ? variableMetadata.title : tablevariable
  }

  const renderItem = (variableName: string) => {
    const data = [{
      name: variableName,
      color: 'red',
      data: timeseries[variableName]
    }]
    return (
      <Item key={variableName}>
        <TimeSeriesChart
          name={getVariableTitle(variableName)}
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

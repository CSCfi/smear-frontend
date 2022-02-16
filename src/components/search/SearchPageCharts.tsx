import React from 'react'
import { useSelector } from 'react-redux'
import { Divider, Row } from 'antd'

import { searchSelector } from '../../store/search'
import { variablesSelector } from '../../store/variables'

import SearchForm from './SearchForm'
import TimeSeriesGrid from '../timeseries/TimeSeriesGrid'

const SearchPageCharts = () => {
  const { timeseries } = useSelector(searchSelector)
  const variables = useSelector(variablesSelector)

  const getVariableTitle = (tablevariable: any) => {
    const variableMetadata = variables.find((v: any) => v.tableName + '.' + v.name === tablevariable)
    return variableMetadata ? variableMetadata.title : tablevariable
  }

  const getVariableUnit = (tablevariable: any) => {
    const variableMetadata = variables.find((v: any) => v.tableName + '.' + v.name === tablevariable)
    return variableMetadata && variableMetadata.unit
  }

  const chartData = Object.keys(timeseries).map(variableName => ({
    name: getVariableTitle(variableName),
    series: [{
      caption: variableName,
      color: 'red',
      tableVariable: variableName
    }],
    unit: getVariableUnit(variableName)
  }))

  return (
    <div className="AppContainer">
      <Row justify={"space-around"}>
        <SearchForm />
      </Row>
      <Divider />
      <Row justify={"space-around"}>
      </Row>
      <TimeSeriesGrid timeSeries={timeseries} chartData={chartData} />
    </div>
  )
}

export default SearchPageCharts

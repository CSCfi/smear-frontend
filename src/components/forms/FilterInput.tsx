import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Checkbox, Input } from 'antd'

import downloadSlice, { downloadSelector } from '../../store/download'

import { inputStyle } from './styles'

const { Group } = Checkbox

const { setFilter, setFilterConditions } = downloadSlice.actions

const FILTER_ATTRIBUTE_OPTIONS = [
  { label: "Variable", value: "Variable" },
  { label: "Description", value: "Description" },
  { label: "Source", value: "Source" }
]

const FilterInput = () => {
  const dispatch = useDispatch()
  const { filter, filterConditions } = useSelector(downloadSelector)

  const handleFilterChance = (event:any) => dispatch(setFilter(event.target.value))
  const handleFilterConditionsChance = (value:any[]) => dispatch(setFilterConditions(value))

  return (
    <>
    <div><b>Filter:</b></div>
    <Input
      style={inputStyle}
      value={filter}
      onChange={handleFilterChance}
    />
    <Group
      options={FILTER_ATTRIBUTE_OPTIONS}
      value={filterConditions}
      onChange={handleFilterConditionsChance}
    />
    </>
  )
}

export default FilterInput

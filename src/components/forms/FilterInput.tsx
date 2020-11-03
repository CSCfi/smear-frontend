import React from 'react'
import { Checkbox, Input } from 'antd'

import { inputStyle } from './styles'

const { Group } = Checkbox

interface FilterInputProps {
  selectedFilter: string,
  onChangeFilter: (value: any) => void,
  selectedFilterConditions: any[],
  onChangeFilterConditions: (value: any) => void
}

const FilterInput: React.FC<FilterInputProps> = ({
  selectedFilter,
  onChangeFilter,
  selectedFilterConditions,
  onChangeFilterConditions
}) => {
  const options = [
    { label: "Variable", value: "Variable" },
    { label: "Description", value: "Description" },
    { label: "Source", value: "Source" }
  ]
  return (
    <>
    <div><b>Filter:</b></div>
    <Input
      style={inputStyle}
      value={selectedFilter}
      onChange={onChangeFilter}
    />
    <Group
      options={options}
      value={selectedFilterConditions}
      onChange={onChangeFilterConditions}
    />
    </>
  )
}

export default FilterInput

import React from 'react'
import { Checkbox, Input } from 'antd'

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
  const filterInputStyle = {
    minWidth: '200px'
  }
  const options = [
    { label: "Variable", value: "Variable" },
    { label: "Description", value: "Description" },
    { label: "Source", value: "Source" }
  ]
  return (
    <>
    <div><b>Filter:</b></div>
    <Input
      style={filterInputStyle}
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

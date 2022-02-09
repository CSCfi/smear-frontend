import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Checkbox, Form, Input, Row } from 'antd'

import downloadSlice, { downloadSelector } from '../../store/download'

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
    <Form layout="horizontal" >
      <Row justify={"space-around"}>
        <Form.Item className="AppFilterInput" name="download-filter-term" label="Filter">
          <Input
            value={filter}
            onChange={handleFilterChance}
          />
        </Form.Item>
      </Row>
      <Row justify={"space-around"}>
        <Form.Item name="download-filter-conditions">
          <Group
            options={FILTER_ATTRIBUTE_OPTIONS}
            value={filterConditions}
            onChange={handleFilterConditionsChance}
          />
        </Form.Item>
      </Row>
    </Form>
  )
}

export default FilterInput

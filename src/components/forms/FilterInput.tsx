import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Checkbox, Col, Input, Row } from 'antd'

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
    <Row style={{ margin: '4px' }}>
      <Col>
        <div style={{ margin: '0 4px 0 0' }}><b>Filter:</b></div>
      </Col>
      <Col flex='auto'>
        <Input
          value={filter}
          onChange={handleFilterChance}
        />
      </Col>
      <Col>
        <div style={{ margin: '0 0 0 4px' }}>
          <Group
            options={FILTER_ATTRIBUTE_OPTIONS}
            value={filterConditions}
            onChange={handleFilterConditionsChance}
          />
        </div>
      </Col>
    </Row>
  )
}

export default FilterInput

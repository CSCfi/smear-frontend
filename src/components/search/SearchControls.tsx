import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Space } from 'antd'
import { fetchTimeSeries } from '../../service/timeseries'
import { tablevariablesSelector } from '../../store/search'

const SearchControls: React.FC = () => {
  const dispatch = useDispatch()
  const tablevariables = useSelector(tablevariablesSelector)

  const onPlot = () => {
    dispatch(fetchTimeSeries(tablevariables))
  }

  return (
    <Space>
      <Button onClick={onPlot} type="primary">
        Plot
      </Button>
    </Space>
  )
}

export default SearchControls

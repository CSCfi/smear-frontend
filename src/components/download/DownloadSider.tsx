import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Layout } from 'antd'
import { Moment } from 'moment'

import downloadSlice, { downloadSelector } from '../../store/download'
import { aggregationsSelector, qualitiesSelector } from '../../store/options'
import { treeDataSelector } from '../../store/treedata'

import {
  CategorySelect,
  DateRangePicker,
  QualitySelect,
  AggregationSelect,
  AveragingInput,
  FilterInput,
  StationRadio 
} from '../forms'

const {
  setSelectedStation,
  setSelectedCategory,
  setSelectedVariables,
  setOptions
} = downloadSlice.actions

const DownloadSider = () => {
  const dispatch = useDispatch()
  const aggregations = useSelector(aggregationsSelector)
  const qualities = useSelector(qualitiesSelector)
  const treeData = useSelector(treeDataSelector)
  const {
    selectedStation,
    selectedCategory,
    options
  } = useSelector(downloadSelector)

  const { from, to, quality, aggregation, averaging } = options

  const handleSelectStation = (event: any) => {
    const station = event.target.value
    dispatch(setSelectedStation(station))
    dispatch(setSelectedCategory(station.children[0]))
  }
  const handleSelectCategory = (value: any) =>
    dispatch(setSelectedCategory(selectedStation.children
        .find((category: any) => category.key === value))
    )
  const handleDateRangeChange = ([from, to]: Moment[]) => dispatch(setOptions({ ...options, from, to }))
  const handleQualityChange = (quality: any) => dispatch(setOptions({ ...options, quality }))
  const handleAveragingChange = (averaging: any) => dispatch(setOptions({ ...options, averaging }))
  const handleAggregationChange = (aggregation: any) => dispatch(setOptions({ ...options, aggregation }))

  const handleUpdateClick = (value: any) => dispatch(setSelectedVariables(selectedCategory.children))

  return (
    <Layout.Sider breakpoint='md' collapsedWidth={0} width={340}>
      <StationRadio
        stations={treeData}
        selectedStation={selectedStation}
        onSelectStation={handleSelectStation}
      />
      <CategorySelect
        station={selectedStation}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <DateRangePicker
        selectedDateRange={[from, to]}
        onSelectDateRange={handleDateRangeChange}
      />
      <QualitySelect
        qualities={qualities}
        selectedQuality={quality}
        onSelectQuality={handleQualityChange}
      />
      <AveragingInput
        selectedAveraging={averaging}
        onSelectAveraging={handleAveragingChange}
      />
      <AggregationSelect
        aggregations={aggregations}
        selectedAggregation={aggregation}
        onSelectAggregation={handleAggregationChange}
      />
      <FilterInput />
      <Button
        style={{ width: '100%' }}
        onClick={handleUpdateClick}
        disabled={!selectedCategory}
      >Update</Button>
    </Layout.Sider>
  )
}

export default DownloadSider

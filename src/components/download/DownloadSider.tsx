import React, { useState } from 'react'
import { Button, Layout } from 'antd'
import { Moment } from 'moment'

import { DownloadOptions } from '../../types'

import {
  CategorySelect,
  DateRangePicker,
  QualitySelect,
  AggregationSelect,
  AveragingInput,
  FilterInput,
  StationRadio 
} from '../forms'

interface DownloadSiderProps {
  aggregations: any[],
  qualities: any[],
  stations: any[],
  options: DownloadOptions,
  setOptions: any,
  onUpdateClick: (
    selectedStation: any,
    selectedCategory: any,
    selectedFilter: any,
    selectedFilterConditions: any
  ) => void
}

const DownloadSider: React.FC<DownloadSiderProps> = ({
  aggregations,
  qualities,
  stations,
  options,
  setOptions,
  onUpdateClick
}) => {
  const [selectedStation, setSelectedStation] = useState<any>()
  const [selectedCategory, setSelectedCategory] = useState<any>()
  const [selectedFilter, setSelectedFilter] = useState<any>()
  const [selectedFilterConditions, setSelectedFilterConditions] = useState<any[]>([])

  const { from, to, quality, aggregation, averaging } = options

  const handleSelectStation = (event: any) => {
    const station = event.target.value
    setSelectedStation(station)
    setSelectedCategory(station.children[0])
  }
  const handleSelectCategory = (value: any) =>
    setSelectedCategory(selectedStation.children
                        .find((category: any) => category.key === value))
  const handleDateRangeChange = ([from, to]: Moment[]) => {
    setOptions({ ...options, from, to })
  }
  const handleQualityChange = (value: any) => setOptions({ ...options, quality: value })
  const handleAveragingChange = (value: any) => setOptions({ ...options, averaging: value })
  const handleAggregationChange = (value: any) => setOptions({ ...options, aggregation: value })
  const handleFilterChange = (event: any) => setSelectedFilter(event.target.value)
  const handleFilterConditionChange = (value: any) => setSelectedFilterConditions(value)
  const handleUpdateClick = (value: any) => onUpdateClick(
    selectedStation,
    selectedCategory,
    selectedFilter,
    selectedFilterConditions,
  )

  return (
    <Layout.Sider>
      <StationRadio
        stations={stations}
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
      <FilterInput
        selectedFilter={selectedFilter}
        onChangeFilter={handleFilterChange}
        selectedFilterConditions={selectedFilterConditions}
        onChangeFilterConditions={handleFilterConditionChange}
      />
      <Button type="primary" onClick={handleUpdateClick}>Update</Button>
    </Layout.Sider>
  )
}

export default DownloadSider

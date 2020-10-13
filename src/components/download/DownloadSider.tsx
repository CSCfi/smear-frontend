import React, { useState } from 'react'
import { Button, Layout } from 'antd'
import moment, { Moment } from 'moment'

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
  onUpdateClick: (
    selectedStation: any,
    selectedCategory: any,
    selectedDateRange: any,
    selectedQuality: any,
    selectedAggregation: any,
    selectedAveraging: any,
    selectedFilter: any,
    selectedFilterConditions: any
  ) => void
}

const DownloadSider: React.FC<DownloadSiderProps> = ({
  aggregations,
  qualities,
  stations,
  onUpdateClick
}) => {
  const [selectedStation, setSelectedStation] = useState<any>()
  const [selectedCategory, setSelectedCategory] = useState<any>()
  const [selectedDateRange, setDateRange] = useState<Moment[]>([moment().subtract(1, "day"), moment()])
  const [selectedQuality, setSelectedQuality] = useState<any>()
  const [selectedAggregation, setSelectedAggregation] = useState<any>()
  const [selectedAveraging, setSelectedAveraging] = useState<any>(30)
  const [selectedFilter, setSelectedFilter] = useState<any>()
  const [selectedFilterConditions, setSelectedFilterConditions] = useState<any[]>([])

  const handleSelectStation = (event: any) => {
    const station = event.target.value
    setSelectedStation(station)
    setSelectedCategory(station.children[0])
  }
  const handleSelectCategory = (value: any) =>
    setSelectedCategory(selectedStation.children
                        .find((category: any) => category.key === value))
  const handleDateRangeChange = (value: any) => setDateRange(value as Moment[])
  const handleQualityChange = (value: any) => setSelectedQuality(value)
  const handleAveragingChange = (value: any) => setSelectedAveraging(value)
  const handleAggregationChange = (value: any) => setSelectedAggregation(value)
  const handleFilterChange = (event: any) => setSelectedFilter(event.target.value)
  const handleFilterConditionChange = (value: any) => setSelectedFilterConditions(value)
  const handleUpdateClick = (value: any) => onUpdateClick(
    selectedStation,
    selectedCategory,
    selectedDateRange,
    selectedQuality,
    selectedAggregation,
    selectedAveraging,
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
        selectedDateRange={selectedDateRange}
        onSelectDateRange={handleDateRangeChange}
      />
      <QualitySelect
        qualities={qualities}
        selectedQuality={selectedQuality}
        onSelectQuality={handleQualityChange}
      />
      <AveragingInput
        selectedAveraging={selectedAveraging}
        onSelectAveraging={handleAveragingChange}
      />
      <AggregationSelect
        aggregations={aggregations}
        selectedAggregation={selectedAggregation}
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

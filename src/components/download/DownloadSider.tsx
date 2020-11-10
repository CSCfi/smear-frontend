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
  setOptions: (newOptions: DownloadOptions) => void,
  onUpdateClick: (variables: any) => void
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
  const handleQualityChange = (quality: any) => setOptions({ ...options, quality })
  const handleAveragingChange = (averaging: any) => setOptions({ ...options, averaging })
  const handleAggregationChange = (aggregation: any) => setOptions({ ...options, aggregation })

  const handleUpdateClick = (value: any) => onUpdateClick(selectedCategory.children)

  return (
    <Layout.Sider breakpoint='md' collapsedWidth={0} width={340}>
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

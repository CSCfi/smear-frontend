import React from 'react'
import { Button, Layout } from 'antd'

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
  selectedStation: any,
  onSelectStation(event: any): void,
  selectedCategory: any,
  onSelectCategory(event: any): void
  selectedDateRange: any,
  onSelectDateRange(event: any): void,
  selectedQuality: any,
  onSelectQuality: (value: any) => void,
  selectedAggregation: any,
  onSelectAggregation: (value: any) => void,
  selectedAveraging: any,
  onSelectAveraging: (value: any) => void,
  selectedFilter: string,
  onChangeFilter: (value: any) => void,
  selectedFilterConditions: any[],
  onChangeFilterConditions: (value: any) => void,
  onUpdateClick: (value: any) => void
}

const DownloadSider: React.FC<DownloadSiderProps> = ({
  aggregations,
  qualities,
  stations,
  selectedStation,
  onSelectStation,
  selectedCategory,
  onSelectCategory,
  selectedDateRange,
  onSelectDateRange,
  selectedQuality,
  onSelectQuality,
  selectedAggregation,
  onSelectAggregation,
  selectedAveraging,
  onSelectAveraging,
  selectedFilter,
  onChangeFilter,
  selectedFilterConditions,
  onChangeFilterConditions,
  onUpdateClick
}) => {
  return (
    <Layout.Sider>
      <StationRadio
        stations={stations}
        selectedStation={selectedStation}
        onSelectStation={onSelectStation}
      />
      <CategorySelect
        station={selectedStation}
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
      <DateRangePicker
        selectedDateRange={selectedDateRange}
        onSelectDateRange={onSelectDateRange}
      />
      <QualitySelect
        qualities={qualities}
        selectedQuality={selectedQuality}
        onSelectQuality={onSelectQuality}
      />
      <AveragingInput
        selectedAveraging={selectedAveraging}
        onSelectAveraging={onSelectAveraging}
      />
      <AggregationSelect
        aggregations={aggregations}
        selectedAggregation={selectedAggregation}
        onSelectAggregation={onSelectAggregation}
      />
      <FilterInput
        selectedFilter={selectedFilter}
        onChangeFilter={onChangeFilter}
        selectedFilterConditions={selectedFilterConditions}
        onChangeFilterConditions={onChangeFilterConditions}
      />
      <Button type="primary" onClick={onUpdateClick}>Update</Button>
    </Layout.Sider>
  )
}

export default DownloadSider

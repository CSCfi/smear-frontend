import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Layout } from 'antd'
import moment, { Moment } from 'moment'

import { aggregationsSelector, qualitiesSelector } from '../../store/options'
import { treeDataSelector } from '../../store/treedata'

import DownloadSider from './DownloadSider'

const DownloadPage: React.FC = () => {
  const aggregations = useSelector(aggregationsSelector)
  const qualities = useSelector(qualitiesSelector)
  const treeData = useSelector(treeDataSelector)

  const [selectedStation, setSelectedStation] = useState<any>()
  const [selectedCategory, setSelectedCategory] = useState<any>()
  const [selectedDateRange, setDateRange] = useState<Moment[]>([moment().subtract(1, "day"), moment()])
  const [selectedQuality, setSelectedQuality] = useState<any>()
  const [selectedAggregation, setSelectedAggregation] = useState<any>()
  const [selectedAveraging, setSelectedAveraging] = useState<any>(30)
  const [selectedFilter, setSelectedFilter] = useState<any>()
  const [selectedFilterConditions, setSelectedFilterConditions] = useState<any[]>([])

  useEffect(() => {
    document.title = "AVAA - Download"
  }, [])

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
  const handleAggregationChange = (value: any) => setSelectedAggregation(value)
  const handleAveragingChange = (value: any) => setSelectedAveraging(value)
  const handleFilterChange = (event: any) => setSelectedFilter(event.target.value)
  const handleFilterConditionChange = (value: any) => setSelectedFilterConditions(value)
  const handleUpdateClick = (value: any) => {
    console.log('Fetch variables')
    console.log(selectedStation)
    console.log(selectedCategory)
    console.log(selectedDateRange)
    console.log(selectedStation)
    console.log(selectedCategory)
    console.log(selectedQuality)
    console.log(selectedAggregation)
    console.log(selectedAveraging)
    console.log(selectedFilter)
    console.log(selectedFilterConditions)
  }

  return (
    <Layout>
      <DownloadSider
        aggregations={aggregations}
        qualities={qualities}
        stations={treeData}
        selectedStation={selectedStation}
        onSelectStation={handleSelectStation}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        selectedDateRange={selectedDateRange}
        onSelectDateRange={handleDateRangeChange}
        selectedQuality={selectedQuality}
        onSelectQuality={handleQualityChange}
        selectedAggregation={selectedAggregation}
        onSelectAggregation={handleAggregationChange}
        selectedAveraging={selectedAveraging}
        onSelectAveraging={handleAveragingChange}
        selectedFilter={selectedFilter}
        onChangeFilter={handleFilterChange}
        selectedFilterConditions={selectedFilterConditions}
        onChangeFilterConditions={handleFilterConditionChange}
        onUpdateClick={handleUpdateClick}
      />
      <Layout.Content>
        <div>Download Content</div>
      </Layout.Content>
    </Layout>
  )
}

export default DownloadPage

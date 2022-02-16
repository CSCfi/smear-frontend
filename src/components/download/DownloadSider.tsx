import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Form, Layout } from 'antd'
import moment, { Moment } from 'moment'

import { ISO_8601_DATE_TIME } from '../../constants'
import { fetchAvailability } from '../../service/timeseries'
import { fetchVariableMetadata } from '../../service/variable'
import availabilitySlice from '../../store/availability'
import downloadSlice, { downloadSelector } from '../../store/download'
import { aggregationsSelector, qualitiesSelector } from '../../store/options'
import { dataStructureSelector } from '../../store/treedata'

import {
  CategorySelect,
  DateRangePicker,
  QualitySelect,
  AggregationSelect,
  AveragingInput,
  StationRadio
} from '../forms'

const {
  setSelectedStation,
  setSelectedCategory,
  setSelectedVariables,
  setOptions
} = downloadSlice.actions

const { setFetching, setAvailaibility } = availabilitySlice.actions

const DownloadSider = () => {
  const dispatch = useDispatch()
  const aggregations = useSelector(aggregationsSelector)
  const qualities = useSelector(qualitiesSelector)
  const treeData = useSelector(dataStructureSelector)
  const {
    selectedStation,
    selectedCategory,
    options
  } = useSelector(downloadSelector)

  const { from, to, quality, aggregation, averaging } = options

  const handleSelectStation = (event: any) => {
    const station = event.target.value
    dispatch(setSelectedStation(station))
    dispatch(setSelectedCategory(station.categories[0]))
  }
  const handleSelectCategory = (value: any) =>
    dispatch(setSelectedCategory(selectedStation.categories
        .find((category: any) => category.id === value))
    )
  const handleDateRangeChange = ([from, to]: Moment[]) => dispatch(setOptions({
    ...options,
    from: from.format(ISO_8601_DATE_TIME),
    to: to.endOf('day').format(ISO_8601_DATE_TIME)
  }))
  const handleQualityChange = (quality: any) => dispatch(setOptions({ ...options, quality }))
  const handleAggregationChange = (aggregation: string) => {
    if (aggregation === 'NONE') {
      dispatch(setOptions({ ...options, aggregation, averaging: 1 }))
    } else if (averaging === 1) {
      dispatch(setOptions({ ...options, aggregation, averaging: 60 }))
    } else {
      dispatch(setOptions({ ...options, aggregation }))
    }
  }
  const handleAveragingChange = (averaging: any) => {
    if (averaging === 1) {
      dispatch(setOptions({ ...options, aggregation: 'NONE', averaging }))
    } else if (aggregation === 'NONE') {
      dispatch(setOptions({ ...options, aggregation: 'ARITHMETIC', averaging }))
    } else {
      dispatch(setOptions({ ...options, averaging }))
    }
  }

  const handleUpdateClick = (value: any) => {
    const selectedVariables = selectedCategory.variables
      .map((variable:any) => variable.tablevariable)

    dispatch(setSelectedVariables(selectedCategory.variables))
    dispatch(fetchVariableMetadata(
      selectedStation.title,
      selectedCategory.title,
      selectedVariables
    ))

    dispatch(fetchAvailability(
      selectedVariables,
      options,
      setAvailaibility,
      setFetching
    ))
  }

  return (
    <Layout.Sider className="AppSider" breakpoint='xl' collapsedWidth={0} width={340}>
    <Form
      className='AppForm'
      layout="vertical"
      fields={[
        { name: ['averaging-type'], value: aggregation },
        { name: ['averaging'], value: averaging }
      ]}
    >
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
        selectedDateRange={[moment(from, ISO_8601_DATE_TIME), moment(to, ISO_8601_DATE_TIME)]}
        onSelectDateRange={handleDateRangeChange}
      />
      <QualitySelect
        qualities={qualities}
        selectedQuality={quality}
        onSelectQuality={handleQualityChange}
      />
      <AveragingInput onSelectAveraging={handleAveragingChange} />
      <AggregationSelect aggregations={aggregations} onSelectAggregation={handleAggregationChange} />
      <Button
        style={{ width: '100%' }}
        onClick={handleUpdateClick}
        disabled={!selectedCategory}
      >Update</Button>
    </Form>
    </Layout.Sider>
  )
}

export default DownloadSider

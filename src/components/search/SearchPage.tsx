import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Layout } from 'antd'
import moment from 'moment'

import { fetchTimeSeries } from '../../service/timeseries'
import { aggregationsSelector, qualitiesSelector } from '../../store/options'
import searchSlice, { fetchingSelector, tablevariablesSelector } from '../../store/search'
import { timeSeriesSelector } from '../../store/timeseries'
import { treeDataSelector } from '../../store/treedata'
import { DownloadOptions } from '../../types'

import SearchForm from './SearchForm'
import SearchSider from './SearchSider'
import SearchPageCharts from './SearchPageCharts'
import OpenStreetMap from '../OpenStreetMap'

const { setTablevariables } = searchSlice.actions

const SearchPage: React.FC = () => {
  const dispatch = useDispatch()
  const qualities = useSelector(qualitiesSelector)
  const aggregations = useSelector(aggregationsSelector)
  const fetching = useSelector(fetchingSelector)
  const tablevariables = useSelector(tablevariablesSelector)
  const timeSeries = useSelector(timeSeriesSelector)
  const treeData = useSelector(treeDataSelector)

  const [options, setOptions] = useState<DownloadOptions>({
    from: moment().subtract(1, "day").startOf('day'),
    to: moment().startOf('day'),
    quality: 'ANY',
    aggregation: 'NONE',
    averaging: 30
  })

  useEffect(() => {
    document.title = "AVAA - Search"
  }, [])

  const onPlotClick = () =>  dispatch(fetchTimeSeries(tablevariables, options))
  const setTableVariables = (tablevariables: any) => dispatch(setTablevariables(tablevariables))

  return (
    <Layout>
      <SearchSider treeData={treeData} setTableVariables={setTableVariables} />
      <Layout.Content>
        <SearchForm
          aggregations={aggregations}
          tablevariables={tablevariables}
          fetching={fetching}
          qualities={qualities}
          options={options}
          setOptions={setOptions}
          onPlotClick={onPlotClick}
        />
        <SearchPageCharts timeSeries={timeSeries} />
      </Layout.Content>
      <Layout.Sider width={300}>
        <OpenStreetMap />
      </Layout.Sider>
    </Layout>
  )
}

export default SearchPage

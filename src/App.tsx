import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as Highcharts from 'highcharts'
import Boost from 'highcharts/modules/boost'
import { fetchInitialData } from './service/initialload'
import SearchPage from './components/search/SearchPage'

import 'antd/dist/antd.css'

Boost(Highcharts)

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchInitialData())
  }, [dispatch])

  return (
    <div>
      <SearchPage />
    </div>
  )
}

export default App

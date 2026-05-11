import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { TimeSeries } from '../types'
import type { RootState } from './index'

const timeSeriesSlice = createSlice({
  name: 'timeSeries',
  initialState: {} as TimeSeries,
  reducers: {
    setTimeSeries: (state, action: PayloadAction<TimeSeries>) => action.payload,
  },
})

export const timeSeriesSelector = (state: RootState) => state.timeSeries

export default timeSeriesSlice

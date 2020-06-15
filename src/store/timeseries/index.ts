import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TimeSeries } from '../../types'
import { RootState } from '../index'

const timeSeriesSlice = createSlice({
  name: 'timeSeries',
  initialState: {} as TimeSeries,
  reducers: {
    setTimeSeries: (state, action: PayloadAction<TimeSeries>) => action.payload,
  },
})

export const timeSeriesSelector = (state: RootState) => state.timeSeries

export default timeSeriesSlice

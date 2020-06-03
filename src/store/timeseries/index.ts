import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TimeSeries } from '../../types'
import { RootState } from '../index'

export const timeSeriesSlice = createSlice({
  name: 'timeSeries',
  initialState: {
    columns: [],
    data: [],
  } as TimeSeries,
  reducers: {
    setTimeSeries: (state, action: PayloadAction<TimeSeries>) => action.payload,
  },
})

export const { setTimeSeries } = timeSeriesSlice.actions

export const timeSeriesSelector = (state: RootState) => state.timeSeries

export default timeSeriesSlice.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type DataPoint = {
  samptime: string
}

type TimeSeries = {
  data: DataPoint[]
}

export const timeSeriesSlice = createSlice({
  name: 'timeSeries',
  initialState: {},
  reducers: {
    setTimeSeries: (state, action: PayloadAction<TimeSeries>) => action.payload,
  },
})

export const { setTimeSeries } = timeSeriesSlice.actions

export default timeSeriesSlice.reducer

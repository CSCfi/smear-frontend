import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import downloadSlice from './download'
import optionsSlice from './options'
import searchSlice from './search'
import timeSeriesSlice from './timeseries'
import treeDataSlice from './treedata'

export const store = configureStore({
  reducer: {
    download: downloadSlice.reducer,
    options: optionsSlice.reducer,
    search: searchSlice.reducer,
    timeSeries: timeSeriesSlice.reducer,
    treeData: treeDataSlice.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import menuItemSlice from './menuitems'
import searchSlice from './search'
import timeSeriesSlice from './timeseries'

export const store = configureStore({
  reducer: {
    menuItems: menuItemSlice.reducer,
    search: searchSlice.reducer,
    timeSeries: timeSeriesSlice.reducer,
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

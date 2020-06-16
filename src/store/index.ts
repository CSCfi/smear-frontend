import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import menuItemReducer from './menuitems'
import timeSeriesReducer from './timeseries'

export const store = configureStore({
  reducer: {
    menuItems: menuItemReducer,
    timeSeries: timeSeriesReducer,
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

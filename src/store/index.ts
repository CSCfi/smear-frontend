import { configureStore, type ThunkAction, type Action } from '@reduxjs/toolkit'
import authSlice from './auth'
import availabilitySlice from './availability'
import downloadSlice from './download'
import optionsSlice from './options'
import searchSlice from './search'
import timeSeriesSlice from './timeseries'
import treeDataSlice from './treedata'
import variablesSlice from './variables'

// placeholder for function that fetches user information from backend
// then, the store configuration will look something like this:
// fetchUser().then(user => configureStore(? use fetched user to init authSlice)

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    availability: availabilitySlice.reducer,
    download: downloadSlice.reducer,
    options: optionsSlice.reducer,
    search: searchSlice.reducer,
    timeSeries: timeSeriesSlice.reducer,
    treeData: treeDataSlice.reducer,
    variables: variablesSlice.reducer
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

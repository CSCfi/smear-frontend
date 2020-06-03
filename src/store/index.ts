import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import menuItemReducer from './menuitems'

export const store = configureStore({
  reducer: {
    menuitems: menuItemReducer,
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

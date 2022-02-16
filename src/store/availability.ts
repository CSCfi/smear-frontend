import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './index'

interface AvailabilityState {
  fetching: boolean
  availability: Availability
}

interface Availability {
  data: AvailabilityData[]
}

interface AvailabilityData {
  [key: string]: number
}

export const setFetching: CaseReducer<AvailabilityState, PayloadAction<boolean>> = (state, action) => ({
  ...state,
  fetching: action.payload,
})

export const setAvailaibility: CaseReducer<AvailabilityState, PayloadAction<Availability>> = (state, action) => ({
  ...state,
  availability: action.payload,
})

const availabilitySlice = createSlice({
  name: 'availability',
  initialState: {
    fetching: false,
    availability: { data: [] } as Availability
  },
  reducers: {
    setAvailaibility,
    setFetching
  },
})

export const availabilitySelector = (state: RootState) => state.availability

export default availabilitySlice

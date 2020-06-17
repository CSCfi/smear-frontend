import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'

type Aggregation = {
  id: string
  isGroupedManually: boolean
}

type Quality = {
  id: string
}

type OptionsState = {
  aggregations: Aggregation[]
  qualities: Quality[]
}

const setAggregations: CaseReducer<OptionsState, PayloadAction<Aggregation[]>> = (
  state,
  action
) => ({
  ...state,
  aggregations: action.payload,
})

const setQualities: CaseReducer<OptionsState, PayloadAction<Quality[]>> = (state, action) => ({
  ...state,
  qualities: action.payload,
})

const optionsSlice = createSlice({
  name: 'options',
  initialState: {
    aggregations: [] as Aggregation[],
    qualities: [] as Quality[],
  } as OptionsState,
  reducers: {
    setAggregations,
    setQualities,
  },
})

export const aggregationsSelector = (state: RootState) => state.options.aggregations
export const qualitiesSelector = (state: RootState) => state.options.qualities

export default optionsSlice

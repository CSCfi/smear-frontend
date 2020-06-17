import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'

type Aggregation = {
  id: string
  default: boolean
  isGroupedManually: boolean
}

type Quality = {
  id: string
  default: boolean
}

type OptionsState = {
  aggregations: Aggregation[]
  qualities: Quality[]
  selectedAggregation: string
  selectedQuality: string
}

const setAggregations: CaseReducer<OptionsState, PayloadAction<Aggregation[]>> = (
  state,
  action
) => ({
  ...state,
  aggregations: action.payload,
  selectedAggregation:
    action.payload.find((aggregation) => aggregation.default)?.id ?? action.payload[0].id,
})

const setQualities: CaseReducer<OptionsState, PayloadAction<Quality[]>> = (state, action) => ({
  ...state,
  qualities: action.payload,
  selectedQuality: action.payload.find((quality) => quality.default)?.id ?? action.payload[0].id,
})

const selectAggregation: CaseReducer<OptionsState, PayloadAction<string>> = (state, action) => ({
  ...state,
  selectedAggregation: action.payload,
})

const selectQuality: CaseReducer<OptionsState, PayloadAction<string>> = (state, action) => ({
  ...state,
  selectedQuality: action.payload,
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
    selectAggregation,
    selectQuality,
  },
})

export const aggregationsSelector = (state: RootState) => state.options.aggregations
export const qualitiesSelector = (state: RootState) => state.options.qualities
export const selectedAggregationSelector = (state: RootState) => state.options.selectedAggregation
export const selectedQualitySelector = (state: RootState) => state.options.selectedQuality

export default optionsSlice

import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './index'

type Quality = {
  id: string
  default: boolean
}

type Aggregation = {
  id: string
  default: boolean
  isGroupedManually: boolean
}

type OptionsState = {
  qualities: Quality[]
  aggregations: Aggregation[]
  selectedQuality: string
  selectedAggregation: string
  interval: number
}

const setQualities: CaseReducer<OptionsState, PayloadAction<Quality[]>> = (state, action) => ({
  ...state,
  qualities: action.payload,
  selectedQuality: action.payload.find((quality) => quality.default)?.id ?? action.payload[0].id,
})

const setAggregations: CaseReducer<OptionsState, PayloadAction<Aggregation[]>> = (
  state,
  action
) => ({
  ...state,
  aggregations: action.payload,
  selectedAggregation:
    action.payload.find((aggregation) => aggregation.default)?.id ?? action.payload[0].id,
})

const selectQuality: CaseReducer<OptionsState, PayloadAction<string>> = (state, action) => ({
  ...state,
  selectedQuality: action.payload,
})

const selectAggregation: CaseReducer<OptionsState, PayloadAction<string>> = (state, action) => ({
  ...state,
  selectedAggregation: action.payload,
})

const setInterval: CaseReducer<OptionsState, PayloadAction<number>> = (state, action) => ({
  ...state,
  interval: action.payload,
})

const optionsSlice = createSlice({
  name: 'options',
  initialState: {
    aggregations: [] as Aggregation[],
    qualities: [] as Quality[],
    interval: 30,
  } as OptionsState,
  reducers: {
    setAggregations,
    setQualities,
    selectQuality,
    selectAggregation,
    setInterval,
  },
})

export const qualitiesSelector = (state: RootState) => state.options.qualities
export const aggregationsSelector = (state: RootState) => state.options.aggregations
export const selectedQualitySelector = (state: RootState) => state.options.selectedQuality
export const selectedAggregationSelector = (state: RootState) => state.options.selectedAggregation
export const intervalSelector = (state: RootState) => state.options.interval

export default optionsSlice

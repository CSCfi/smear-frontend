import axios from 'axios'
import { AppDispatch } from '../../store/index'
import searchSlice from '../../store/search'
import { TimeSeries, DownloadOptions } from '../../types'
import { API_URL, PATH_TIME_SERIES, PATH_VARIABLE_CSV } from '../../constants'

const { setFetching } = searchSlice.actions

export const fetchTimeSeries = (
  tablevariables: string[],
  options: DownloadOptions,
  setTimeSeries: any
) => {
  const { from, to, quality, aggregation, averaging } = options
  const params = new URLSearchParams()
  tablevariables.forEach(tablevariable =>
      params.append('tablevariable', tablevariable)
  )
  params.append('from', from)
  params.append('to', to)
  params.append('quality', quality)
  params.append('aggregation', aggregation)
  params.append('interval', averaging.toString())

  return async (dispatch: AppDispatch) => {
    if (tablevariables.length > 0) {
      dispatch(setFetching(true))
      return axios
        .get(API_URL + PATH_TIME_SERIES + '/chart', { params })
        .then((response) => {
          dispatch(setFetching(false))
          dispatch(setTimeSeries(response.data))
        })
        .catch((error) => {
          throw error
        })
    } else {
      dispatch(setTimeSeries({} as TimeSeries))
    }
  }
}

export const fetchAvailability = (
  tablevariables: string[],
  options: DownloadOptions,
  setAvailability: any,
  setFetchingAvailability: any
) => {
  const { from, to, quality, averaging } = options
  const params = new URLSearchParams()
  tablevariables.forEach(tablevariable =>
      params.append('tablevariable', tablevariable)
  )
  params.append('from', from)
  params.append('to', to)
  params.append('quality', quality)
  params.append('aggregation', 'AVAILABILITY')
  params.append('interval', averaging.toString())

  return async (dispatch: AppDispatch) => {
    if (tablevariables.length > 0) {
      dispatch(setFetchingAvailability(true))
      try {
        const response = await axios.get(API_URL + PATH_TIME_SERIES, { params })
        dispatch(setFetchingAvailability(false))
        dispatch(setAvailability(response.data))
      } catch (error) {
        dispatch(setFetchingAvailability(false))
        dispatch(setAvailability({ data: [{ samptime: "" }] }))
      }
    } else {
      dispatch(setAvailability({ data: [{ samptime: "" }] }))
    }
  }
}

export const getDownloadLink = (
  type: string,
  tablevariables: string[],
  options: DownloadOptions
) => {
  const { from, to, quality, aggregation, averaging } = options

  const params = new URLSearchParams()
  tablevariables.forEach(tablevariable =>
      params.append('tablevariable', tablevariable)
  )
  params.append('from', from)
  params.append('to', to)
  params.append('quality', quality)
  params.append('aggregation', aggregation)
  params.append('interval', averaging.toString())

  return `${API_URL}${PATH_TIME_SERIES}/${type}?${params.toString()}`
}

export const getVariableMetaLink = (
  station: string,
  category: string,
  tablevariables: any[]
) => {
  const params = new URLSearchParams()

  params.append('station', station)
  params.append('category', category)
  tablevariables.forEach(tablevariable =>
      params.append('tablevariable', tablevariable)
  )

  return `${API_URL}${PATH_VARIABLE_CSV}?${params.toString()}`
}

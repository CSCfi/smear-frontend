import axios from 'axios'
import { AppDispatch } from '../../store/index'
import searchSlice from '../../store/search'
import timeSeriesSlice from '../../store/timeseries'
import { TimeSeries, DownloadOptions } from '../../types'
import { ISO_8601_DATE_TIME } from '../../constants'
import { API_URL, PATH_TIME_SERIES } from '../../constants'

const { setFetching } = searchSlice.actions
const { setTimeSeries } = timeSeriesSlice.actions

export const fetchTimeSeries = (
  tablevariables: string[],
  options: DownloadOptions
) => {
  const { from, to, quality, aggregation, averaging } = options
  const params = new URLSearchParams()
  tablevariables.forEach((tablevariable) => params.append('tablevariable', tablevariable))
  params.append('from', from.format(ISO_8601_DATE_TIME))
  params.append('to', to.format(ISO_8601_DATE_TIME))
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

export const getDownloadLink = (
  type: string,
  tablevariable: string,
  options: DownloadOptions
) => {
  const { from, to, quality, aggregation, averaging } = options

  const params = new URLSearchParams()
  params.append('tablevariable', tablevariable)
  params.append('from', from.format(ISO_8601_DATE_TIME))
  params.append('to', to.format(ISO_8601_DATE_TIME))
  params.append('quality', quality)
  params.append('aggregation', aggregation)
  params.append('interval', averaging.toString())

  return `${API_URL}${PATH_TIME_SERIES}/${type}?${params.toString()}`
}

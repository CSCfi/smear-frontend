import axios from 'axios'
import { Moment } from 'moment'
import { AppDispatch } from '../../store/index'
import timeSeriesSlice from '../../store/timeseries'
import { TimeSeries } from '../../types'
import { ISO_8601_DATE_TIME } from '../../constants'
import { API_URL, PATH_TIME_SERIES } from '../../constants'

const { setTimeSeries } = timeSeriesSlice.actions

export const fetchTimeSeries = (
  tablevariables: string[],
  from: Moment,
  to: Moment,
  quality: string,
  aggregation: string
) => {
  const params = new URLSearchParams()
  tablevariables.forEach((tablevariable) => params.append('tablevariable', tablevariable))
  params.append('from', from.format(ISO_8601_DATE_TIME))
  params.append('to', to.format(ISO_8601_DATE_TIME))
  params.append('quality', quality)
  params.append('aggregation', aggregation)

  return async (dispatch: AppDispatch) => {
    if (tablevariables.length > 0) {
      return axios
        .get(API_URL + PATH_TIME_SERIES, { params })
        .then((response) => {
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

import { message } from 'antd'
import axios from 'axios'
import { Moment } from 'moment'
import { AppDispatch } from '../../store/index'
import searchSlice from '../../store/search'
import timeSeriesSlice from '../../store/timeseries'
import { TimeSeries } from '../../types'
import { ISO_8601_DATE_TIME } from '../../constants'
import { API_URL, PATH_TIME_SERIES } from '../../constants'

const { setFetching } = searchSlice.actions
const { setTimeSeries } = timeSeriesSlice.actions

export const fetchTimeSeries = (
  tablevariables: string[],
  from: Moment,
  to: Moment,
  quality: string,
  aggregation: string,
  interval: number
) => {
  const params = new URLSearchParams()
  tablevariables.forEach((tablevariable) => params.append('tablevariable', tablevariable))
  params.append('from', from.format(ISO_8601_DATE_TIME))
  params.append('to', to.format(ISO_8601_DATE_TIME))
  params.append('quality', quality)
  params.append('aggregation', aggregation)
  params.append('interval', interval.toString())

  return async (dispatch: AppDispatch) => {
    if (tablevariables.length > 0) {
      dispatch(setFetching(true))
      return axios
        .get(API_URL + PATH_TIME_SERIES, { params })
        .then((response) => {
          dispatch(setFetching(false))
          dispatch(setTimeSeries(response.data))
	  !Object.keys(response.data).length &&
            message.info('Selected variables have no values in this time frame')
        })
        .catch((error) => {
          throw error
        })
    } else {
      dispatch(setTimeSeries({} as TimeSeries))
    }
  }
}

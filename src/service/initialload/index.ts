import axios from 'axios'
import { AppDispatch } from '../../store/index'
import optionsSlice from '../../store/options'
import treeDataSlice from '../../store/treedata'
import { API_URL, PATH_AGGREGATION, PATH_QUALITY, PATH_STRUCTURE } from '../../constants'

const { setAggregations, setQualities } = optionsSlice.actions
const { setDataStructure } = treeDataSlice.actions

const fetch = (path: string, callback: Function, dispatch: AppDispatch) =>
  axios
    .get(API_URL + path)
    .then((response) => {
      dispatch(callback(response.data))
    })
    .catch((error) => {
      console.error(error)
    })

export const fetchInitialData = () => {
  return async (dispatch: AppDispatch) => {
    axios.all([
      fetch(PATH_AGGREGATION, setAggregations, dispatch),
      fetch(PATH_QUALITY, setQualities, dispatch),
      fetch(PATH_STRUCTURE, setDataStructure, dispatch),
    ])
  }
}

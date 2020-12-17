import axios from 'axios'
import { AppDispatch } from '../../store/index'
import variablesSlice from '../../store/variables'
import { PATH_VARIABLE } from '../../constants'

const { setVariables } = variablesSlice.actions

export const fetchVariableMetadata = (
  station: string|null,
  category: string|null,
  tablevariables: string[]
) => {
  return async (dispatch: AppDispatch) => {
    if (tablevariables.length === 0) {
      return
    }
    const params = new URLSearchParams()

    if (station) {
      params.append('station', station)
    }
    if (category) {
      params.append('category', category)
    }
    tablevariables.forEach(tablevariable =>
      params.append('tablevariable', tablevariable)
    )

    try {
      const response = await axios
        .get(`${PATH_VARIABLE}?${params.toString()}`)
      dispatch(setVariables(response.data))
    } catch (error) {}
  }
}

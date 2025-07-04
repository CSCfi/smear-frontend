import { createSlice, CaseReducer } from '@reduxjs/toolkit'
import { RootState } from './index'

// waiting for information on relevant fields
type UserState = {
  name: string | undefined,
  firstName: string | undefined,
  lastName: string | undefined,
  loggedIn: boolean,
  homeOrganizationId: string | undefined,
}

const resetUser:CaseReducer<UserState> = (state) => {
    return {
        ...state,
        name: undefined,
        firstName: undefined,
        lastName: undefined,
        loggedIn: false,
        homeOrganizationId: undefined,
    }
}

// set Test User for now
// in real life, initial state will be determined by whether backend provides user information on query
const setUser: CaseReducer<UserState>= (state) => {
    return {
        ...state,
        name: "test_teppo",
        firstName: "Teppo",
        lastName: "Testaaja",
        loggedIn: true,
        homeOrganizationId: "CSCfi",
    }
}

const authSlice = createSlice({
    name: 'user',
    initialState: {
        name: undefined,
        firstName: undefined,
        lastName: undefined,
        loggedIn: false,
        homeOrganizationId: undefined,
    } as UserState,
    reducers: {
        setUser,
        resetUser,
    }
})

export const userSelector = (state: RootState) => state.auth
export const isLoggedInSelector = (state: RootState) => state.auth.loggedIn

export default authSlice
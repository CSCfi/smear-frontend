import axios from 'axios'
import { createAsyncThunk, createSlice, CaseReducer } from '@reduxjs/toolkit'

import { RootState } from './index'
import { API_URL } from '../constants'

// waiting for information on relevant fields
type UserState = {
  firstName: string | undefined,
  lastName: string | undefined,
  loggedIn: boolean,
  homeOrganizationId: string | undefined,
}

export const fetchUserDetails = createAsyncThunk(
    '/api/user',
    async () => {
        try {
            const response = await axios.get(API_URL + '/auth', {withCredentials: true})
            return response.data
        } catch (err) {
            return {'status_code': err.response.status, 'message': err.message}
        }
    })

const resetUser:CaseReducer<UserState> = (state) => {
    return {
        ...state,
        firstName: undefined,
        lastName: undefined,
        loggedIn: false,
        homeOrganizationId: undefined,
    }
}

const authSlice = createSlice({
    name: 'user',
    initialState: {
        firstName: undefined,
        lastName: undefined,
        loggedIn: false,
        homeOrganizationId: undefined,
    } as UserState,
    reducers: {
        resetUser,
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUserDetails.fulfilled, (state, action) => {
                if (action.payload.status_code == 401) {
                    state.loggedIn = false
                }
                else if ('authenticated_user' in action.payload) {
                    state.firstName = action.payload.authenticated_user.firstname
                    state.lastName = action.payload.authenticated_user.lastname
                    state.homeOrganizationId = action.payload.authenticated_user.organization.id
                    state.loggedIn = true
                }
                else {
                    state.loggedIn = false
                }
            })
            .addCase(fetchUserDetails.rejected, (state, action) => {
                console.log(action.error.message)
            })
    }
})

export const userSelector = (state: RootState) => state.auth
export const isLoggedInSelector = (state: RootState) => state.auth.loggedIn

export default authSlice
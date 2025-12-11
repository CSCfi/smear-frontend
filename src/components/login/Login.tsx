import axios from 'axios'
import { createAsyncThunk, createSlice, CaseReducer } from '@reduxjs/toolkit'

import { Button, Dropdown, Menu } from 'antd'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { API_URL, SSO_URL } from '../../constants'
import authSlice, { isLoggedInSelector, userSelector } from '../../store/auth'

const Login = () => {
    const isLoggedIn = useSelector(isLoggedInSelector)
    const user = useSelector(userSelector)
    const dispatch = useDispatch()
    const { resetUser } = authSlice.actions

    const redirectToLogin = () => {
        window.location.href = SSO_URL + `/login?service=SMARTSMEAR&redirect_url=${encodeURIComponent(window.location.href)}`
    }

    const redirectToLogout = () => {
        window.location.href = SSO_URL + `/logout?service=SMARTSMEAR&redirect_url=${encodeURIComponent(window.location.href)}`
    }

    const performLogout = () => {
        resetUser()
        redirectToLogout()
    }


    // ToDo: This is very crude implementation and should be used only for demonstration purposes.
    // Should be replaced with a proper implementation.
    const createDataset = createAsyncThunk(
        '/api/dataset',
        async () => {
            try {
                const response = await axios.post(API_URL + '/metax-client/dataset', {}, {withCredentials: true})
                console.log(response)
                return response.data
            } catch (err) {
                console.error(err)
                return {'status_code': err.response.status, 'message': err.message}
            }
        })

    const LoginButton = () => 
        <Button className="AppButton loginButton" data-cy="loginButton" type="primary" onClick={()=>redirectToLogin()} disabled={false}>
            Login
        </Button>

    const userActions = [
        {
            key: 1,
            label: (<a data-cy="logoutButton" onClick={()=>{dispatch(performLogout())}}>Logout</a>),
        },
        {
            key: 2,
            label: (<a data-cy="createDatasetButton" onClick={()=>{dispatch(createDataset())}}>Create dataset</a>),
        }
    ]

    const UserButton = () => {
        const menu = (
            <Menu>
                {userActions.map(action => <Menu.Item key={action.key}>{action.label}</Menu.Item>)}
            </Menu>
        )
        return <>
            <Dropdown overlay={menu} placement="bottomCenter" trigger= {["click"]} className="AppButton loginButton">
                <span data-cy="userActions">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512"
                        width="14px"
                        fill="white">
                            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 
                                13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
                            />
                    </svg>
                    <span style={{marginLeft: "5px", marginRight: "8px"}}>{user.firstName} {user.lastName}</span>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 320 512"
                        width="10px"
                        fill="white">
                            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 
                            6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
                    </svg>
                </span>

            </Dropdown>
        </>
    }

    return <>
    {isLoggedIn
    ? <UserButton/>
    : <LoginButton/>
    }
    </>
}

export default Login
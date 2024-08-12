import { LOGIN_SUCCESS, REGISTER_SUCCESS, USER_LOADED } from "../types"

const initialState = {
    token: '',
    user: {},
    isAuthenticated: false,
    
}

export default (state = initialState, { type, payload }) => {
  console.log(payload)
  switch (type) {

  case REGISTER_SUCCESS:
    localStorage.setItem("token", payload.token);
    return { ...state, isAuthenticated: true  ,token: payload.token }
  case LOGIN_SUCCESS:
    return {...state, isAuthenticated: true, token: payload.token}
  case USER_LOADED: 
    return {...state, user: payload}

  default:
    return state
  }
}

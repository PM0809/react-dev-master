import { LOGIN_SUCCESS } from "../types"

const initialState = {
    token: '',
    user: {},
    isAuthenticated: false,
    
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case LOGIN_SUCCESS:
    return { ...state, isAuthenticated: true  ,token: payload.token }

  default:
    return state
  }
}

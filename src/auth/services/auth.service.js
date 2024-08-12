import api from "../../utils/api"

export const registerService = (data) => {
    return api.post('/users', data);
}

export const loginService = (data) => {
    return api.post('/auth', data);
}

export const getUserDetails = () => {
    return api.get("/auth");
}

/* 
  endpoint /auth -> used for load user information 
*/
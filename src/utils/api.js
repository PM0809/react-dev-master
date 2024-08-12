import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5005/api',
    headers: {
        "Content-Type": "application/json"
    },
});

/*

In the provided JavaScript code snippet, the `axios` library is used to create an API instance with a custom base URL and headers. The `api.interceptors.response.use` function is used to intercept responses from the API.

The `api.interceptors.response.use` function takes two callback functions as arguments. The first callback function is executed when a response is received successfully, and it receives the response object as an argument. In this case, the function simply returns the response without any modifications.

The second callback function is executed when an error occurs during the API request. It receives the error object as an argument. In this case, the function is left empty, meaning that no specific actions are taken when an error occurs.

In the given line of code, `api.interceptors.response.use(    (res) => res,     (err) => {});`, it appears that the second callback function is missing its implementation. If you want to handle errors in a specific way, you can add your own logic inside the second callback function. For example, you can log the error, display an error message to the user, or retry the request.
*/
// api.interceptors.response.use(
//     (res) => res, 
//     (err) => err.response.data.errors
// );

export default api;

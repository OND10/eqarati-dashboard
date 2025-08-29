import axios, { AxiosRequestConfig } from 'axios';
import APP_URL from './api-url';
import { store } from '../../Redux/store';
// import { getCookie } from "../../../app/routes/utils";

// const dispatch = store.dispatch
// const slices = store.getState()

const baseConfig: AxiosRequestConfig = {
  baseURL: APP_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*'
  },
  withCredentials: true
};

const apiClient = axios.create(baseConfig);
/**
 * TODO : Remove the Fail Safe code
 */
apiClient.interceptors.request.use(
  (config) => {
    const slice = store.getState();
    const token = slice.authToken.token;
    //   const failSafeToken = getCookie("t...n")

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    // else if(failSafeToken){
    //     config.headers["Authorization"] = `Bearer ${failSafeToken}`
    // }

    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

/**
 * TODO : 1- add an event listener for beforeLoad
 */

// apiClient.interceptors.response.use(response => response, async (error) => {
//   console.log("RESPONSE INTERCEPTOR ENTER")
//   const previousReq = error?.config

//   if (error.response?.status === 401 &&  !previousReq.sent) {
//     console.log("401 STATUS HIT")
//     previousReq.sent = true;
//     const refreshed = await AuthController.refreshToken()
//     const token = refreshed.data["access_token"]
//     console.log("NEW TOKEN GOT " + token)

//     if (token) {
//       console.log("SETTING A NEW TOKEN ")
//       previousReq.headers['Authorization'] = `Bearer ${token}`;
//       dispatch(insertNewToken(token))
//       return apiClient(previousReq);
//     }
//   }
//   console.log("EVERYTHING IS COOKED")
//   return Promise.reject(error);
// })

export default apiClient;

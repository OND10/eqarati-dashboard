import axios from "axios";
import APP_URL from "../api/common/api-url";
import endpoints from "../api/common/api-end-points";
import { jwtDecode } from "jwt-decode";
import { userTokenDetails } from "../../features/Authentication/types/user-details";

//-------------------Refresh Access Token------------------------
export const refreshAccessToken = async (
  refreshToken: string
): Promise<string | null> => {
  try {
    const response = await axios.post(APP_URL + endpoints.refreshToken, {
      refresh_token: refreshToken,
    });

    return response.data.access_token;
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
};

//-----------------TokenExpireChecker------------------------------
export const isTokenExpired = (token: string): boolean => {
  try {
    const token_details = jwtDecode<userTokenDetails>(token);
    const expirationTime = (token_details.exp * 1000) / 1000 / 60; // change up to min
    const currentTime = Date.now() / 1000 / 60; // change up to min
    const timeRemaining = expirationTime - currentTime;
    const token_expired = timeRemaining < 2; // if true a new token request will start else continue
    return token_expired;
  } catch (error) {
    console.error("Error decoding token:", error);
    return true;
  }
};

//-----------------Get Token details------------------

export const tokenDetails = (token: string): number => {
  if(token){
    try {
      const currentUser = jwtDecode<{ user_id: number }>(token).user_id;
      return currentUser;
    } catch (e) {
      const error = e as Error;
      throw new Error(error.message);
    }
  }
  return 0
};

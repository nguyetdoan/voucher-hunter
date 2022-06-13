import API from "../services/api";
import { setAuthToken } from "./setAuthToken";

export const refreshTokenSetup = (res) => {
  // Timing to render access token
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResonse();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    const token = API.googleLogin(newAuthRes.tokenObj.idToken);
    localStorage.token = token;
    setAuthToken(token);

    setTimeout(refreshToken, refreshTiming);
  };

  setTimeout(refreshToken, refreshTiming);
};

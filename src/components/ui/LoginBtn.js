import { gapi } from "gapi-script";
import { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import authActions from "../../redux/actions/authActions";
import { refreshTokenSetup } from "../../utils/refreshTokenSetup";

const clientId = process.env.REACT_APP_CLIENT_ID;

const GoogleLoginBtn = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId,
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (res) => {
    dispatch(authActions.loginGoogle(res.tokenObj.id_token));
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("[Login failed] res:", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            className={`btn text-center w-100 google-btn d-flex align-items-center justify-content-center`}
          >
            <i className="bi bi-google me-2"></i> Continue with Google
          </button>
        )}
        buttonText="login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default GoogleLoginBtn;

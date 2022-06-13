import { Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import GoogleLoginBtn from "../components/ui/LoginBtn";
import authActions from "../redux/actions/authActions";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email!").required("Email is required!"),
  password: Yup.string().required("Password is required!"),
});

const initialValues = {
  email: "",
  password: "",
  remember: false,
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, loadingForm } = useSelector((state) => state.auth);

  const handleSubmit = (values) => {
    const { email, password } = values;
    dispatch(authActions.setLoadingForm());

    if (error) {
      dispatch(authActions.clearError());
    }

    setTimeout(() => dispatch(authActions.login({ email, password })), 500);
  };

  useEffect(() => {
    return () => dispatch(authActions.clearError());
  }, [dispatch]);

  return (
    <div className="sign-up-bg">
      <div className="container text-center">
        <div className="sign-up__container">
          <div className="logo-container">
            <img src="image/logo.png" alt="logo" />
          </div>
          <div className="sign-up-form">
            <h2 className="title">Welcome Back</h2>
            <div className="slogan">
              <p>Log Into Your Account!</p>
              {error && <p className="err-msg">{error}</p>}
            </div>
            <GoogleLoginBtn />

            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={LoginSchema}
            >
              {({ errors, touched }) => (
                <Form className="text-start">
                  <div className="input-field">
                    {errors.email && touched.email ? (
                      <div className="error-msg"></div>
                    ) : null}
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="form-control"
                    />
                    {errors.email && touched.email && (
                      <p className="error-txt">{errors.email}</p>
                    )}
                  </div>
                  <div className="input-field">
                    {errors.password && touched.password ? (
                      <div className="error-msg"></div>
                    ) : null}
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                    {errors.password && touched.password && (
                      <p className="error-txt">{errors.password}</p>
                    )}
                  </div>
                  <label className="checkbox">
                    Remember me
                    <Field type="checkbox" name="remember" />
                    <span className="checkmark"></span>
                  </label>
                  <button
                    className={`btn text-center w-100 submit-btn`}
                    type="submit"
                  >
                    {loadingForm ? (
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </Form>
              )}
            </Formik>
            <p className="policy-txt">
              Or
              <span onClick={() => navigate("/forgot-password")}>
                {" "}
                Forgot your password
              </span>
            </p>
            <p>
              Don't have an account?{" "}
              <span onClick={() => navigate("/register")}>Sign Up</span>
            </p>
          </div>
        </div>
        <p className="sign-footer">
          <img src="images/sign_logo.png" alt="" />© 2022{" "}
          <span className="fw-bold">Cursus</span>. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;

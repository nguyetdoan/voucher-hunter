import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import authActions from "./redux/actions/authActions";
import routes from "./routes/index";

const App = () => {
  const { user, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const role = user ? "user" : "guest";

  useEffect(() => {
    dispatch(authActions.loadUser());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="spinner-wrapper">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes[role].withLayout.map((route, index) => (
            <Route key={`route-${index}`} path={route.path} element={<route.component />} />
          ))}
        </Route>
        {routes[role].withoutLayout.map((route, index) => (
          <Route key={`route-2--${index}`} path={route.path} element={<route.component />} />
        ))}
        lfg;pkvdvfbkg.e
        <Route path="*" element={<>Not found</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

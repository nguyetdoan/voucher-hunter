import { Navigate } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Cart from "../pages/Cart";
import CheckOutPage from "../pages/CheckOutPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import News_router from "../pages/News_router";
import Productdetails from "../pages/Productdetails";
import ProductPage from "../pages/ProductPage";
import SignUp from "../pages/SignUp";
import ProductDetail from "../components/product/ProductDetail";


const guestRoutesWithLayout = [
  { path: "/", component: Home },
  { path: "/products", component: ProductPage },
  { path: "/news", component: News_router },
  { path: "/aboutus", component: AboutUs },
  { path: "/product/:id", component: ProductDetail},
  { path: "/productdetail", component: Productdetails },
  { path: "/checkout", component: () => <Navigate to="/login" />},
  { path: "/cart", component: () => <Navigate to="/login" />}
];

const guestRoutesWithoutLayout = [
  { path: "/register", component: SignUp },
  { path: "/login", component: Login },
];

const userRoutesWithLayout = [
  { path: "/", component: Home },
  { path: "/register", component: () => <Navigate to="/" /> },
  { path: "/login", component: () => <Navigate to="/" /> },
  { path: "/products", component: ProductPage },
  { path: "/news", component: News_router },
  { path: "/aboutus", component: AboutUs },
  { path: "/product/:id", component: ProductDetail },
  { path: "/productdetail", component: Productdetails },
  { path: "/account", component: () => <p>Account</p> },
  { path: "/cart", component: Cart },
  { path: "/checkout", component: CheckOutPage },
];

const userRoutesWithoutLayout = [];

const routes = {
  guest: {
    withLayout: guestRoutesWithLayout,
    withoutLayout: guestRoutesWithoutLayout,
  },
  user: {
    withLayout: userRoutesWithLayout,
    withoutLayout: userRoutesWithoutLayout,
  },
};

export default routes;

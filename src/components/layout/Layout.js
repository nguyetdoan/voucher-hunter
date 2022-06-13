import { Outlet } from "react-router-dom";
import BackToTopBtn from "../ui/BackToTopBtn";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
      <BackToTopBtn />
    </>
  );
};

export default Layout;

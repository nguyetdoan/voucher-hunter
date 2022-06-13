import { Badge } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import CartPopUp from "../CartPopUp";
import ProfilePopup from "../ui/ProfilePopup";
import SearchBar from "../ui/SearchBar";

const NavBar = () => {
  const navigate = useNavigate();
  const { user, loading } = useSelector((state) => state.auth);
  const { totalQuantity } = useSelector((state) => state.cart);
  const [showMenu, setShowMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleShowCart = (e) => {
    e.stopPropagation();
    setShowCart((show) => !show);
    if (showAccountMenu) {
      setShowAccountMenu(false);
    }
  };

  const toggleAccountMenu = (e) => {
    e.stopPropagation();
    setShowAccountMenu((show) => !show);
    if (showCart) {
      setShowCart(false);
    }
  };

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (showAccountMenu) {
        setShowAccountMenu(false);
      }
      if (showCart) {
        setShowCart(false);
      }
    });

    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      if (nav) {
        if (window.scrollY > 500) {
          nav.classList.add("fixed");
        } else {
          nav.classList.remove("fixed");
        }
      }
    });
  }, [user, showAccountMenu, showCart, loading]);

  const avtDefault =
    "https://gambolthemes.net/html-items/cursus_main_demo/images/left-imgs/img-2.jpg";

  return (
    <nav>
      <div className="nav-left">
        <i className="bi bi-list" onClick={openMenu}></i>
        <div className="logo" onClick={() => navigate("/")}>
          <p className="mb-0">Voucher HUNTER</p>
        </div>
        <SearchBar />
      </div>
      <div className={`nav-middle ${showMenu ? "show" : ""}`}>
        <div className="menu">
          <button className="exit-btn" onClick={closeMenu}>
            X
          </button>
          <NavLink
            to="./products"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={closeMenu}
          >
            Products
          </NavLink>
          <NavLink
            to="./news"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={closeMenu}
          >
            News
          </NavLink>
          <NavLink
            to="./aboutus"
            className={({ isActive }) => (isActive ? "active-link" : "")}
            onClick={closeMenu}
          >
            About us
          </NavLink>
        </div>
        <div className="back-drop" onClick={closeMenu}></div>
      </div>
      <div className="nav-right">
        {user ? (
          <>
            <Badge count={totalQuantity} onClick={(e) => toggleShowCart(e)}>
              <i className="bi bi-bag-heart"></i>
            </Badge>
            <div
              className="avt-container"
              onClick={(e) => toggleAccountMenu(e)}
            >
              <img src={user?.avatar || avtDefault} alt="" />
            </div>

            <ProfilePopup {...{ showAccountMenu, toggleAccountMenu }} />

            <CartPopUp show={showCart} setShowCart={setShowCart} />
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

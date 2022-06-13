import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import authActions from "../../redux/actions/authActions";

const ProfilePopup = ({ showAccountMenu, toggleAccountMenu }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(authActions.setLoading());

    setTimeout(() => dispatch(authActions.logout()), 500);
    navigate("/login");
  };

  const avtDefault =
    "https://gambolthemes.net/html-items/cursus_main_demo/images/left-imgs/img-2.jpg";

  return (
    <div
      className={`profile-pop-up${showAccountMenu ? " show" : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="profile__info">
        <div className="avt-container">
          <img src={user?.avatar || avtDefault} alt="" />
        </div>
        <div className="profile-info__txt">
          <p>{user.fullName}</p>
          <p>{user.email}</p>
        </div>
        <div>
          <Link
            onClick={toggleAccountMenu}
            to="/account"
            className="profile-link"
          >
            View Profile
          </Link>
        </div>
      </div>

      <ul className="profile-menu">
        <li onClick={toggleAccountMenu}>
          <Link to="/setting">Setting</Link>
        </li>
        <li onClick={logout}>Sign Out</li>
      </ul>
    </div>
  );
};

export default ProfilePopup;

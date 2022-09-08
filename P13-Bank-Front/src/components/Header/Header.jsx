import logo from "../../../src/assets/argentBankLogo.png";
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SignOut } from "../../actions/userActions";

const Header = () => {
  let storageState = localStorage.getItem("user") || sessionStorage.getItem("user");
  const location = useLocation().pathname;
  useEffect(() => {}, [location]);
  const firstName = useSelector((state) => state.firstName);
  const dispatch = useDispatch();

  return (
    <>
      <nav className="main-nav">
        <Link className="main-nav-logo" to={{ pathname: "/" }}>
          <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>

        <div>
          {storageState === null ? (
            <Link className="main-nav-item" to={{ pathname: "/user/login" }}>
              <i className="main-nav-icon fa fa-user-circle"></i>
              <div className="main-nav-text">Sign In</div>
            </Link>
          ) : (
            <>
              <Link className="main-nav-item" to={{ pathname: "/user/profile" }}>
                <i className="main-nav-icon fa fa-user-circle"></i>
                {firstName}
              </Link>
              <Link
                className="main-nav-item"
                to={{ pathname: "/" }}
                onClick={() => {
                  dispatch(SignOut());
                }}
              >
                <i className="main-nav-icon fa fa-sign-out"></i>
                <div className="main-nav-text">Sign Out</div>
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;

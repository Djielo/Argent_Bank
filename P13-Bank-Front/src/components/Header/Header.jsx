import logo from "../../../src/assets/argentBankLogo.png";

const Header = () => {
  return (
    <>
      <nav className="main-nav">
        <a className="main-nav-logo" href="/">
          <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <a className="main-nav-item" href="/user/signIn">
            <i className="main-nav-icon fa fa-user-circle"></i>
            <div className="main-nav-text">Sign In</div>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
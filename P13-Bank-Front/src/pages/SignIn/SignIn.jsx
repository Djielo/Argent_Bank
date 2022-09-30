import { useDispatch } from "react-redux";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../actions/userActions";
import { login } from "../../services/auth.service";

/**
 * [description] - This is the SignIn component. It is also used to handle the sign in process.
 * It is a functional component.
 * It uses the useDispatch hook to dispatch the signIn action.
 * It uses the useNavigate hook to navigate to the profile page.
 * It uses the useRef hook to create references to the email input, email error, password input, password error, and
 * remember me checkbox. It uses the signInButton function to handle the sign in process.
 * @return {JSX} - The SignIn component.
 */

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailInput = useRef();
  const emailError = useRef();
  const passwordInput = useRef();
  const passwordError = useRef();
  const rememberMe = useRef();

  const signInButton = (e) => {
    e.preventDefault();
    login(emailInput, passwordInput, rememberMe, navigate, emailError, passwordError, dispatch);
    if (!emailInput.current.value === "" || !passwordInput.current.value === "") {
      dispatch(signIn());
    }
  };
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={signInButton}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input ref={emailInput} type="text" className="username" />
            <div ref={emailError} style={{ color: "red" }}></div>
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input ref={passwordInput} type="password" className="password" />
            <div ref={passwordError} style={{ color: "red" }}></div>
          </div>
          <div className="input-remember">
            <input ref={rememberMe} type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;

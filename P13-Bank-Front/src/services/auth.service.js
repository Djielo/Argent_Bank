import axios from "axios";
import { getToken, setIdentity } from "../actions/userActions";

const BASE_URL = "http://localhost:3001/api/v1/user/";
// const register = (email, password, firstname, lastname ) => {
//   return axios.post(`${API_URL}signup`, {
//     email,
//     password,
//     firstname,
//     lastname,
//   });
// };

/**
 * It takes in the email and password input, the remember me checkbox, the navigate function, the email and password error divs, and the dispatch function. It then sends a post request to the backend with the email and password. If the response is successful, it sets the token in the redux store, and if the remember me checkbox is checked, it sets the user in local storage, otherwise it sets the user in session storage.
 *
 * @param   {String}    emailInput
 * @param   {String}    passwordInput
 * @param   {Boolean}   rememberMe
 * @param   {Object}    navigate
 * @param   {String}    emailError
 * @param   {String}    passwordError
 * @param   {Object}    dispatch
 *
 * @return  {Return}    It then navigates to the profile page. If the response is unsuccessful, it logs the error and sets the error message in the appropriate error div
 */
const login = async (emailInput, passwordInput, rememberMe, navigate, emailError, passwordError, dispatch) => {
  await axios
    .post(BASE_URL + "login", {
      email: emailInput.current.value,
      password: passwordInput.current.value,
    })
    .then((res) => {
      if (res.data.body.token) {
        dispatch(getToken(res.data.body.token));
        if (rememberMe.current.checked) {
          localStorage.setItem("user", JSON.stringify(res.data));
        } else {
          sessionStorage.setItem("user", JSON.stringify(res.data));
        }
      }
      navigate("/user/profile");
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      if (err.response.data.message === "Error: User not found!") {
        emailError.current.innerHTML = err.response.data.message;
        passwordError.current.innerHTML = "";
      } else {
        passwordError.current.innerHTML = err.response.data.message;
        emailError.current.innerHTML = "";
      }
    });
};

const resetStorage = () => {
  localStorage.removeItem("user");
  sessionStorage.removeItem("user");
};

/**
 * It gets the token from the response, sets the token in the header, and then makes a request to the
 * profile endpoint.
 * @param {Object}  dispatch
 * @param {String}  token
 * @param {Object}  navigate
 */
const getUserDatas = (dispatch, token, navigate) => {
  const myToken = token.body?.token;
  axios.defaults.headers.common["Authorization"] = "Bearer " + myToken;

  axios
    .post(BASE_URL + "profile")
    .then((userDataRes) => {
      dispatch(getToken(myToken));
      dispatch(
        setIdentity({
          firstName: userDataRes.data.body.firstName,
          lastName: userDataRes.data.body.lastName,
        })
      );
    })
    .catch((err) => {
      console.log(err);
      if (!myToken) {
        navigate("/user/login");
      }
    });
};

/**
 * This function takes in a firstName and lastName, and then dispatches an action to update the state
 * with the new firstName and lastName.
 * @param {String}    firstName
 * @param {String}    lastName
 * @param {Object}    dispatch
 */
const saveIdentity = (firstName, lastName, dispatch) => {
  axios
    .put(BASE_URL + "/profile", {
      firstName: firstName,
      lastName: lastName,
    })
    .then((userDataRes) => {
      dispatch(
        setIdentity({
          firstName: userDataRes.data.body.firstName,
          lastName: userDataRes.data.body.lastName,
        })
      );
    })
    .catch((err) => console.log(err));
};

export { login, resetStorage, saveIdentity, getUserDatas };

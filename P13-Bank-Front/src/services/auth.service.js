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

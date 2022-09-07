import axios from "axios";
import { tokenAction, setIdentity } from "../actions/userActions";

// const register = (email, password, firstname, lastname ) => {
//   return axios.post(`${API_URL}signup`, {
//     email,
//     password,
//     firstname,
//     lastname,
//   });
// };
const login = (emailInput, passwordInput, rememberMe, navigate, emailError, passwordError, dispatch) => {
  return axios({
    method: "POST",
    url: "http://localhost:3001/api/v1/user/login/",
    data: {
      email: emailInput.current.value,
      password: passwordInput.current.value,
    },
  })
    .then((res) => {
      if (res.data.body.token) {
        dispatch(tokenAction(res.data.body.token));
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
}

const resetStorageAndAuthorization = () => {
  localStorage.removeItem("user");
  sessionStorage.removeItem("user");
  axios.defaults.headers.common["Authorization"] = "";
};

const getUserDatas = (dispatch, token) => {
  const myToken = token.body?.token;
  axios.defaults.headers.common["Authorization"] = "Bearer " + myToken;

  axios
    .post("http://localhost:3001/api/v1/user/profile")
    .then((userDataRes) => {
      dispatch(tokenAction(myToken));
      dispatch(
        setIdentity({
          firstName: userDataRes.data.body.firstName,
          lastName: userDataRes.data.body.lastName,
        })
      );
    })
    .catch((err) => console.log(err));
};

const saveIdentity = (firstName, lastName, dispatch) => {
  axios
    .put("http://localhost:3001/api/v1/user/profile", {
      firstName: firstName,
      lastName: lastName,
    })
    .then((userDataRes) => {
      console.log("UserDataRes", userDataRes);
      dispatch(
        setIdentity({
          firstName: userDataRes.data.body.firstName,
          lastName: userDataRes.data.body.lastName,
        })
      );
    })
    .catch((err) => console.log(err));
}

export { login, resetStorageAndAuthorization, saveIdentity, getUserDatas };

import axios from "axios";

// const register = (email, password, firstname, lastname ) => {
//   return axios.post(`${API_URL}signup`, {
//     email,
//     password,
//     firstname,
//     lastname,
//   });
// };
const login = (emailInput, passwordInput, navigate, emailError, passwordError, setUserData) => {
  console.log(emailInput.current.value);
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
        // localStorage when rememberMe is checked
        // sessionStorage when rememberMe is not checked
        sessionStorage.setItem("user", JSON.stringify(res.data));
        //
        axios.defaults.headers.common["Authorization"] = "Bearer " + res.data.body.token;
        axios.post("http://localhost:3001/api/v1/user/profile").then((userDataRes) => {
          setUserData(userDataRes.data.body);
        });
        navigate("/user/profile");
      }
      return res.data;
    })
    .catch((err) => {
      if (err.response.data.message === "Error: User not found!") {
        emailError.current.innerHTML = err.response.data.message;
        passwordError.current.innerHTML = "";
      } else {
        passwordError.current.innerHTML = err.response.data.message;
        emailError.current.innerHTML = "";
      }
    });
};
const logout = () => {
  localStorage.removeItem("user");
  sessionStorage.removeItem("user");
  axios.defaults.headers.common["Authorization"] = "";  
};
export { login, logout };

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import User from "./pages/Profil/Profil";
import Error from "./pages/Error/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const [userData, setUserData] = useState();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header userData={userData} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/user/login" element={<SignIn setUserData={setUserData} />} />
          <Route path="/user/profile" element={<User userData={userData} />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

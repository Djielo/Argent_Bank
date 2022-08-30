import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import User from "./pages/Profil/Profil";
import Error from "./pages/Error/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [userData, setUserData] = useState();

  return (
    <BrowserRouter>
      <Header userData={userData}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/user/login" element={<SignIn setUserData={setUserData} />} />
        <Route path="/user/profile" element={<User userData={userData} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

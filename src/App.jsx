import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/User/Login";
import Home from "./Components/Home/Home";
import Register from "./Components/User/Register";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Profile from "./Components/Profile/Profile";
import Admin from "./Components/Admin/Admin";
import Loader from "./Components/Loader/Loader";
import { useEffect } from "react";
import Protected from "./ProtectedRoute/Protected";
import { userDetails } from "./Reducer/UserReducers";
import Services from "./Components/Services/Services";
import { useDispatch, useSelector } from "react-redux";
import ThankYou from "./Components/Contact/ThankYou";
function App() {
  const Dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.user.AuthA);
  const isUser = useSelector((state) => state.user.AuthU);
  useEffect(() => {
    Dispatch(userDetails());
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        <Route path="/about" element={<About />} />
        <Route element={<Protected isAuth={isUser} />}>
          <Route path="/me" element={<Profile />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Route>
        <Route element={<Protected isAuth={isAdmin} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

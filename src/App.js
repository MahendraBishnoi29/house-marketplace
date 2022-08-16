import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ForgotPassword from "./components/Auth/ForgotPassword";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Navbar from "./components/Navbar/Navbar";
import Explore from "./pages/explore/Explore";
import Offer from "./pages/offers/Offer";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  );
}

export default App;

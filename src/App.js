import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./components/Auth/ForgotPassword";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Category from "./pages/category/Category";
import Contact from "./pages/contact/Contact";
import CreateListing from "./pages/createListing/CreateListing";
import EditListing from "./pages/createListing/editListing/EditListing";
import Explore from "./pages/explore/Explore";
import Listing from "./pages/listing/Listing";
import Offer from "./pages/offers/Offer";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offer />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/edit-listing/:listingId" element={<EditListing />} />
          <Route
            path="/category/:categoryName/:listingId"
            element={<Listing />}
          />
          <Route path="/contact/:landlordId" element={<Contact />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  );
}

export default App;

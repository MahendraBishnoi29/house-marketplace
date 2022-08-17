import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ReactComponent as ArrowIcon } from "../../assets/svg/keyboardArrowRightIcon.svg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("A Link for Reset Password Has Been Sent To Your Email :)");
    } catch (error) {
      toast.error("Something went wrong, could not send the link");
    }
  };

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader"></p>
      </header>

      <main>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="enter your email"
            onChange={handleChange}
            className="emailInput"
          />
          <Link to="/sign-in" className="forgotPasswordLink">
            Sign In
          </Link>

          <div className="signInBar">
            <div className="signInText">Send Reset Link</div>
            <button className="signInButton">
              <ArrowIcon fill="#fffff" width="34px" height="34px" />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ForgotPassword;

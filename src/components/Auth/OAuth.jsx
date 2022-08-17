import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GoogleIcon from "../../assets/svg/googleIcon.svg";
import { db } from "../../firebase.config";
import { toast } from "react-toastify";

const OAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const GoogleAuth = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      toast.success("Signed In With Google 🚀");

      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="socialLogin">
      <p>Sign {location.pathname === "/sign-up" ? "up" : "in"} with </p>
      <button className="socialIconDiv" onClick={GoogleAuth}>
        <img className="socialIconImg" src={GoogleIcon} alt="google" />
      </button>
    </div>
  );
};

export default OAuth;

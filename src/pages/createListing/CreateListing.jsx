/* eslint-disable react-hooks/exhaustive-deps */
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

const CreateListing = () => {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    images: {},
    latitude: 0,
    longitude: 0,
  });
  const [geolocationEnabled, setGeolocationEnabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const auth = getAuth();
  const navigate = useNavigate();
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({ ...formData, userRef: user.uid });
        } else {
          navigate("/sign-in");
        }
      });
    }

    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  if (loading) {
    return <Spinner />;
  }

  return <div>CreateListing</div>;
};

export default CreateListing;

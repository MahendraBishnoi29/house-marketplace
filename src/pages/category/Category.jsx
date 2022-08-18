import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinner/Spinner";
import { db } from "../../firebase.config";

const Category = () => {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // Get reference
        const listingsRef = collection(db, "listings");

        // Create a query
        const q = query(
          listingsRef,
          where("type", "==", params.categoryName),
          orderBy("timestamp", "desc"),
          limit(10)
        );

        // Execute query
        const querySnap = await getDocs(q);

        const listings = [];

        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setListings(listings);
        console.log(listings);
        setLoading(false);
      } catch (error) {
        toast.error("Could not fetch listings");
      }
    };

    // SHORT METHOD 🚀
    // const fetchListings = async () => {
    //   const querySnapshot = await getDocs(collection(db, "listings"));
    //   const document = [];

    //   querySnapshot.forEach((doc) => {
    //     document.push({
    //       data: { ...doc.data() },
    //       id: doc.id,
    //     });
    //   });
    //   setListings(document);
    //   setLoading(false);
    // };

    fetchListings();
  }, [params.categoryName]);

  return (
    <div className="category">
      <header>
        <p className="pageHeader">
          {params.categoryName === "rent"
            ? "Places for Rent"
            : "Places for Sale"}
        </p>
      </header>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul className="categoryListings">
              {listings.map((listing) => (
                <h2 key={listing.id}>{listing.data?.name}</h2>
              ))}
            </ul>
          </main>
        </>
      ) : (
        <p>No Listings for {params.categoryName}</p>
      )}
    </div>
  );
};

export default Category;

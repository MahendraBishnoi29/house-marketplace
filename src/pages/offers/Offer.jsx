import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ListingItem from "../../components/ListingItem/ListingItem";
import Spinner from "../../components/Spinner/Spinner";
import { db } from "../../firebase.config";

const Offer = () => {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const q = query(
          collection(db, "listings"),
          where("offer", "==", true),
          limit(10)
        );
        const listings = [];

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          listings.push({
            data: doc.data(),
            id: doc.id,
          });
        });
        setListings(listings);
        setLoading(false);
      } catch (error) {
        toast.error("Unable to Fetch Offers");
      }
    };

    fetchListings();
  }, []);

  return (
    <div className="category">
      <header>
        <p className="pageHeader">Offers</p>
      </header>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul className="categoryListings">
              {listings.map((listing) => (
                <ListingItem
                  listing={listing.data}
                  id={listing.id}
                  key={listing.id}
                />
              ))}
            </ul>
          </main>
        </>
      ) : (
        <p>There Are No Current Offers</p>
      )}
    </div>
  );
};

export default Offer;

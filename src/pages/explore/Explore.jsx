import React from "react";
import { Link } from "react-router-dom";
// Images
import rentImage from "../../assets/jpg/rentCategoryImage.jpg";
import sellImage from "../../assets/jpg/sellCategoryImage.jpg";

const Explore = () => {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>

      <main>
        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img
              src={rentImage}
              alt="houseImage"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Places for Rent</p>
          </Link>

          <Link to="/category/sale">
            <img
              src={sellImage}
              alt="houseImage"
              className="exploreCategoryImg"
            />
            <p className="exploreCategoryName">Places for Sale</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Explore;

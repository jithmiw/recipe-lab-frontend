import React from "react";
import { Link } from "react-router-dom";
// import { FeatureItem } from "../components";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex flex-column flex-md-row pt-5">
        <div className="d-flex flex-column justify-content-center pe-md-5 w-md-50 mb-md-0 mb-4">
          <p
            className="fs-1 fw-bold text-uppercase"
            style={{ color: "#E1611F" }}
          >
            Discover Culinary
            <br />
            Delights!
          </p>
          <p style={{ fontSize: "17px" }}>
            Dive into a collection of yummy recipes, perfectly matched to your
            ingredients, and start your flavorful adventure today.
          </p>
          <Link
            to="/generate-recipe"
            className="nav-link active d-flex justify-content-center p-2 mt-3 rounded"
            aria-current="page"
            style={{
              backgroundColor: "#E1611F",
              color: "#fff",
              width: "165px",
            }}
          >
            Discover Recipes
          </Link>
        </div>
        <div>
          <img
            alt="img"
            className="img-fluid"
            style={{ borderRadius: "40px" }}
            src="/images/home-bg.jpg"
          />
        </div>
      </div>
      <div
        id="about"
        className="d-flex flex-column justify-content-center align-items-center rounded mt-5 mb-5 p-5"
        style={{ backgroundColor: "#FDF5F2" }}
      >
        <h2 className="text-uppercase mb-4">About</h2>
        <p style={{ fontSize: "17px" }}>
          Welcome to Recipe Lab, where culinary exploration meets cutting-edge
          technology! Recipe Lab is revolutionizing the way you cook by
          leveraging state-of-the-art AI models and a vast database of recipes.
          Powered by the t5-recipe-generation model from Hugging Face and
          trained on the extensive RecipeNLG dataset, Recipe Lab is your
          ultimate cooking companion.
        </p>
      </div>
      {/* <FeatureItem/> */}
    </div>
  );
};

export default Home;

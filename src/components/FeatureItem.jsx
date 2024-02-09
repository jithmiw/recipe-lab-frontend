import React from "react";

const FeatureItem = () => {
  const features = [
    { text: "Powered by the t5-recipe-generation model from Hugging Face" },
    {
      text: "Trained on the extensive RecipeNLG dataset with over 2 million cooking recipes",
    },
    {
      text: "Provides personalized recipe recommendations tailored to your ingredients",
    },
    {
      text: "Delivers structured, context-aware, and commonsense-driven content",
    },
    { text: "Start your culinary journey with Recipe Lab today!" },
  ];

  return (
    <div
      id="features"
      className="d-flex flex-column justify-content-center align-items-center rounded mt-5 mb-5"
    >
      <h2 className="text-uppercase">Features</h2>
      <div className="d-flex flex-column flex-md-row align-items-center mb-4">
        <div className="me-4 d-md-block d-none">
          <img alt="img" className="img-fluid" src="/images/features-bg.png" />
        </div>
        <div className="card w-100 w-md-75 mt-3 p-3">
          <div className="card-body">
            <h6
              className="card-title mb-4"
              style={{ color: "#656C7B", fontSize: "17px" }}
            >
              Discover the future of cooking with Recipe Lab! This app combines
              cutting-edge technology with a vast database of recipes to bring
              personalized culinary experiences. Explore a world of flavor with
              these features:
            </h6>
            {features.map((feature, index) => (
              <p key={index} className="card-text mb-2">
                <img className="me-2" alt="img" src="/images/check.png" />
                {feature.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;

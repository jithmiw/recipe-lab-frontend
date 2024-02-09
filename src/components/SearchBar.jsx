import React from "react";

const SearchBar = ({
  ingredients,
  onChange,
  isValid,
  onInspireMe,
  disabled,
  onSubmit,
}) => (
  <div className="form-group">
    <div className="column">
      <div className="col">
        <label
          htmlFor="ingredients"
          className="fw-bold"
          style={{ fontSize: "18px" }}
        >
          Enter Ingredients:
        </label>
        <textarea
          className="form-control mt-3"
          id="ingredients"
          value={ingredients}
          onChange={onChange}
          rows="5"
          required
        />
        {!isValid && (
          <p className="error-message fw-semibold" style={{ color: "#656C7B" }}>
            Please enter at least one ingredient, separated by commas.
          </p>
        )}
      </div>
      <button
        type="submit"
        className="btn mt-3 me-2"
        style={{ backgroundColor: "#E1611F", color: "#fff" }}
        disabled={disabled || !isValid}
        onClick={onSubmit}
      >
        Get Recipes
      </button>
      <button
        type="button"
        className="btn btn-outline-dark mt-3"
        onClick={onInspireMe}
      >
        Inspire Me!
      </button>
    </div>
  </div>
);

export default SearchBar;

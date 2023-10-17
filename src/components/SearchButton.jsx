import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "/Users/lisanilssoncarlsson/figmafamilyescape/src/homepage.css";

export const SearchButton = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`searchbutton ${state.property1} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="text-wrapper">sök</div>
      <img className="vector" alt="Vector" src={state.property1 === "variant-2" ? "image.svg" : "vector.svg"} />
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

SearchButton.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};

export default SearchButton;
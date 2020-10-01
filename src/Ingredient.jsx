import React from "react";

function Ingredient(props) {
  // displaying a prop called type, as well as one from our ingredient object
  // if we want to access nested properties, conditional rendering is important
  // otherwise we get that same error we got before
  // (e.g.) property name is undefined
  return (
    <div>
      <h1>
        {props.type} is {props.ingredient.name}
      </h1>
    </div>
  );
}

export default Ingredient;

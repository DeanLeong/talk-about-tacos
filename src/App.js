import React, { useEffect, useState } from "react";
import axios from "axios";
import Ingredient from "./Ingredient";
import "./App.css";

function App() {
  // creating a state with an initial value of a empty object
  const [taco, setTaco] = useState(null);

  // we want this function to happen when App mounts
  useEffect(() => {
    // we can declare our URL inside or outside of the getTaco function
    // as long as it's in scope
    const tacoURL = "http://taco-randomizer.herokuapp.com/random/";
    // in order to do an axios call, we need an asynchronous function
    const getTaco = async () => {
      // make an axios call to our endpoint
      const response = await axios.get(tacoURL);
      // save the data into our state
      setTaco(response.data);
    };
    // we gotta invoke our function to get the taco!! 🌮🌮
    getTaco();
  }, []);

  // if the taco has not been loaded (via our useEffect)
  if (taco === null) {
    // only render this lil h1 that says loading!
    return <h1>Loading...</h1>;
  }

  // ...in any other case (i.e. we've gotten our taco)
  // we're going to render a bunch of Ingredients, one for each ingredient
  return (
    <div className="App">
      <Ingredient type="Base Layer" ingredient={taco.base_layer} />
      <Ingredient type="Mixin" ingredient={taco.mixin} />
      <Ingredient type="Condiment" ingredient={taco.condiment} />
      <Ingredient type="Seasoning" ingredient={taco.seasoning} />
      <Ingredient type="Shell" ingredient={taco.shell} />
    </div>
  );
}

export default App;

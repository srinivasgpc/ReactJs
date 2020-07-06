const mutiply = {
  numbers: [23, 45, 65],
  multipyBy: 4,
  multiplying() {
    return this.numbers.map((num) => this.multipyBy * num);
  },
};
console.log(mutiply.multiplying());

const getFirstName = (fullName) => fullName.split(" ")[0];
console.log(getFirstName("Srinivas Gaddam"));
import React, { useReducer } from "react";

import "./App.css";
var movie = {
  title: "",
  subtitle: "age of alton",
  location: "usa",
  options: ["one", "Two"],
};

function getLocation(location) {
  if (location) {
    return <p>location: {location.toUpperCase()}</p>;
  }
}

function App() {
  return (
    <div className="App-header">
      <h1>{movie.title ? movie.title : "anonymous"}</h1>
      <p>
        {movie.options.length > 0
          ? "here are the options"
          : "No options for the movie"}
      </p>
      {movie.subtitle && <p>Subtitle: {movie.subtitle}</p>}
      {movie.age && movie.Age >= 18 && <p>Age:{movie.Age}</p>}
      {getLocation(movie.location)}
    </div>
  );
}

export default App;

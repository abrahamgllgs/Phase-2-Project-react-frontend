import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import RandomCocktailButton from "./Components/RandomCocktail.jsx";
import "../src/styles.css";

function cocktailButton() {
  return (
    <div>
      <h1> Random Cocktail generator</h1>
      <RandomCocktailButton /> {RandomCocktail}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

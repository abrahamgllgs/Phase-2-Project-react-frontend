import { useState } from "react";

const RandomCocktailButton = () => {
  const [cocktail, setCocktail] = useState(null);

  const getRandomCocktail = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        if (data.drinks && data.drinks.length > 0) {
          setCocktail(data.drinks[0]);
        } else {
          setCocktail(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setCocktail(null);
      });
  };

  return (
    <div>
      <button
        onClick={getRandomCocktail}
        style={{ backgroundColor: "pink", color: "white" }}
      >
        Get a Cocktail
      </button>
      {cocktail && (
        <div>
          <h2 className="DrinkName">{cocktail.strDrink}</h2>
          <p className="Instructions">{cocktail.strInstructions}</p>
          <p className="Ingredient">{cocktail.strIngredient1}</p>
          <p className="Ingredient">{cocktail.strIngredient2}</p>
          <p className="Ingredient">{cocktail.strIngredient3}</p>
          <p className="Ingredient">{cocktail.strIngredient4}</p>
          <p className="Ingredient">{cocktail.strIngredient5}</p>
          <p className="Ingredient">{cocktail.strIngredient6}</p>
          <p className="Ingredient">{cocktail.strIngredient7}</p>
        </div>
      )}
    </div>
  );
};

export default RandomCocktailButton;

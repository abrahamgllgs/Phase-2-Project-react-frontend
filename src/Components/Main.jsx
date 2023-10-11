import MargaritasList from "./MargaritasList";
import RandomCocktailButton from "./RandomCocktail";

const Main = () => {
  return (
    <>
      <main>
        <h2 className="SecondTitle"> Find a drink </h2>
        <h3 className="RandomizerTitle">Random Cocktail</h3>
        <RandomCocktailButton />
        <MargaritasList />
      </main>
    </>
  );
};

export default Main;

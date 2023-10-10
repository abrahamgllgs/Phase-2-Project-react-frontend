import MargaritasList from "./MargaritasList";
import RandomCocktailButton from "./RandomCocktail";

const Main = () => {
  return (
    <>
      <main>
        <h2 className="SecondTitle"> Find your drink </h2>
        <h3 className="RandomizerTitle">Randomizer</h3>
        <RandomCocktailButton />
        <MargaritasList />
      </main>
    </>
  );
};

export default Main;

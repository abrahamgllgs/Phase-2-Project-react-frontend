import MargaritasList from "./MargaritasList";
import RandomCocktailButton from "./RandomCocktail";

const Main = () => {
  return (
    <>
      <main>
        <h2>Main section </h2>
        <h3>Randomizer</h3>
        <RandomCocktailButton />
        <MargaritasList />
      </main>
    </>
  );
};

export default Main;

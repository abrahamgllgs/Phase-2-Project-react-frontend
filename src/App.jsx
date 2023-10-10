import { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import MargaritasList from "./Components/MargaritasList";
import RandomCocktailButton from "./Components/RandomCocktail";
import "../src/styles.css";
import MyForm from "./Components/PostForm";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

export default App;

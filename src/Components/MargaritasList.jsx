import { useEffect, useState } from "react";

import MargaritasRowList from "./MargaritasRowList";

const MargaritasList = () => {
  const [margartias, setMargaritas] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchMargaritas = async () => {
      const url = "http://localhost:3004/Margritas";
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        console.log(jsonData);
        setMargaritas(jsonData);
      } catch (error) {
        console.error("Error occured when fetching data", error);
        return null;
      }
    };

    fetchMargaritas();
  }, []);

  const filteredMargaritas = margartias.filter((margarita) => {
    const LowerCaseStrDrink = margarita.strDrink.toLowerCase();
    return LowerCaseStrDrink.includes(searchValue.toLowerCase());
  });

  const renderedMargartias = filteredMargaritas.map((margartia) => (
    <MargaritasRowList
      margartia={margartia}
      key={`${margartia.idDrink}${margartia.strTags}`}
    />
  ));

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <h1 className="ListOfM">List of Margaritas</h1>

      <form>
        <input
          type="text"
          placeholder="search margaritas..."
          onChange={handleSearchChange}
        />
      </form>

      <table>
        <thread className="tableThread">
          {filteredMargaritas.map((margartia) => (
            <tr key={`${margartia.idDrink} ${margartia.strTags}`}>
              <th className="TH-Name">Name</th>
              <td className="NameDrink">{margartia.strDrink} </td>
              <th className="TH-Cata">Catagory</th>
              <td className="CataDrink">{margartia.strCategory} </td>
              <th className="TH-ALC">Alcoholic</th>
              <td className="ALCDrink">{margartia.strAlcoholic} </td>
              <th className="TH-IN">Instructions</th>
              <td className="INSDrink">{margartia.strInstructions} </td>
            </tr>
          ))}
        </thread>
      </table>
    </>
  );
};

export default MargaritasList;

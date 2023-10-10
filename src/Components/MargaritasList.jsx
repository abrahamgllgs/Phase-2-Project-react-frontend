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
      <h1>List of Margaritas</h1>

      <form>
        <input
          type="text"
          placeholder="search margaritas..."
          onChange={handleSearchChange}
        />
        <select>
          <options></options>
          <options></options>
          <options></options>
        </select>
      </form>

      <table>
        <thread>
          <tr>
            <th>Name</th>
            <th>Catagory</th>
            <th>Alcoholic</th>
            <th>Instructions</th>
          </tr>
        </thread>
        <tbody>
          {filteredMargaritas.map((margartia) => (
            <tr key={`${margartia.idDrink}${margartia.strTags}`}>
              <td>{margartia.strDrink}</td>
              <td>{margartia.strCategory}</td>
              <td>{margartia.strAlcoholic}</td>
              <td style={{ fontSize: "50%" }}>{margartia.strInstructions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MargaritasList;

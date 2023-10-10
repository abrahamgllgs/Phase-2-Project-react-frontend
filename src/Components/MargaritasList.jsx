import { useEffect, useState } from "react";

const MargaritasList = () => {
  const [margartias, setMargaritas] = useState([]);

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

  const renderedMargartias = margartias.map((margartia) => (
    <tr key={`${margartia.idDrink}${margartia.strTags}`}>
      <td>{margartia.strDrink}</td>
      <td>{margartia.strCategory}</td>
      <td>{margartia.strAlcoholic}</td>
      <td style={{ fontSize: "50%" }}>{margartia.strInstructions}</td>
    </tr>
  ));

  return (
    <>
      <h1>List of Margaritas</h1>
      <table>
        <thread>
          <tr>
            <th>Name</th>
            <th>Catagory</th>
            <th>Alcoholic</th>
            <th>Instructions</th>
          </tr>
        </thread>
        <body>{renderedMargartias}</body>
      </table>
    </>
  );
};

export default MargaritasList;

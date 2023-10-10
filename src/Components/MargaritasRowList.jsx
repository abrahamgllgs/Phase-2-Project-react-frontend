const MargaritasRowList = ({ margartia }) => {
  <tr>
    <td>{margartia.strDrink}</td>
    <td>{margartia.strCategory}</td>
    <td>{margartia.strAlcoholic}</td>
    <td style={{ fontSize: "50%" }}>{margartia.strInstructions}</td>
  </tr>;
};

export default MargaritasRowList;

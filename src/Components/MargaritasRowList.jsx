const MargaritasRowList = ({ margartia }) => {
  <tr>
    <td className="NameDrink">{margartia.strDrink}</td>

    <td className="CataDrink">{margartia.strCategory}</td>

    <td className="ALCDrink">{margartia.strAlcoholic}</td>

    <td className="INSDrink">{margartia.strInstructions}</td>
  </tr>;
};
export default MargaritasRowList;

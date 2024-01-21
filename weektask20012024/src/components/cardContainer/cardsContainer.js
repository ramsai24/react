import { Card } from "../card/card";
import { cl } from "../../javascript.js";
import "./cardsContainer.css";

export const CardsContainer = (props) => {
  const { dataArrObj } = props;
  //   console.log(dataArrObj);
  return (
    <ul id="cardsContainer" className="cards-container" onClick={cl}>
      {dataArrObj.map((each) => (
        <li key={each.id} id={each.id}>
          <Card eachItem={each} />
        </li>
      ))}
    </ul>
  );
};

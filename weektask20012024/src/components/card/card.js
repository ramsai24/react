import "./card.css";

export const Card = (props) => {
  const { eachItem } = props;
  //   console.log(eachItem);

  return (
    <div className="card-item">
      <h1 className="card-heading">{eachItem.title}</h1>
      <p className="card-para">{eachItem.name}</p>
    </div>
  );
};

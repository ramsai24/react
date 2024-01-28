import "./card.css";

// export const Card = () = (
//   <div>
//     <h1>card</h1>
//   </div>
// );

export const Card = (props) => {
  const { data } = props;
  const {  imgUrl, phoneNum, name, email } = data;

  //   console.log(eachItem);

  return (
    <div className="card-item">
      <h1 className="card-heading">{name}</h1>
      <img className="profile-img" src={imgUrl} alt="profilePic" />
      <div className="details-container">
        <p className="card-para">{phoneNum}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

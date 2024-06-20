const UserCard = ({image, fullName, age, gender, city}) => {
  return (
    <div>
      <img src ={image}  alt= {`${fullName} profile`}/>
      <h2>{fullName}</h2>
      <p>{age}</p>
      <p>{gender}</p>
      <p>{city}</p>
    </div>
  );
};

export default UserCard;

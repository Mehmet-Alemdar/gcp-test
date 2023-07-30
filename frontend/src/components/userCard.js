import '../styles/userCard.css'

const UserCard = ({name, lastName, email, adress, phoneNumber}) => (
  <div className="userCardContainer">
    <h2>{name} {lastName}</h2>
    <p>{email}</p>
    <p>{adress}</p>
    <p>{phoneNumber}</p>
  </div>
)

export default UserCard;
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserCard from './components/userCard'
import AddButton from './components/addButton';
import Modal from './components/modal';

const baseUrl = process.env.REACT_APP_API_URL || "http://localhost:5000/user"
function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    axios.get(`${baseUrl}/user`)
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        console.log("err", err)
      })
  }, [])

  const handleSubmit = (user) => {
    axios.post(`${baseUrl}/user`, user)
      .then(res => {
        console.log(res.data)
        setUsers([...users, user])
      })
      .catch(err => {
        console.log("err", err)
      })
    setShowModal(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Users</h1>
      </header>
        <div className="usersContainer">
          {users.map((user,index) => (
            <UserCard key={index} name={user.name} lastName={user.lastName} email={user.email} adress={user.adress} phoneNumber={user.phoneNumber}/>
          ))}
        </div>
        <AddButton onClick={() => setShowModal(true)}/>
        <Modal show={showModal} handleClose={() => setShowModal(false)} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;

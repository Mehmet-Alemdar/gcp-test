import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserCard from './components/userCard'

function App() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:3000/user')
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        console.log("err", err)
      })
  }, [])


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
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import User from './component/User/User.js';

function App() {
  const [users, setUsers] = useState([]);
  const [team, setTeam] = useState([]);
  useEffect( () => {
    fetch('https://randomuser.me/api/?results=15')
    .then(res => res.json())
    .then(data => setUsers(data.results))
  }, [])
  const addMember = (name) => {
      setTeam([...team, name])
  }
// const add = (x, y) => x + y; example : call function
// const addWrapper = () => add(3,5);
// const total = addWrapper;
// console.log(total);

  return (
    <div>
       <h1>Team Builder</h1>
       <ul>
         {
           team.map((m, idx) => <li key={idx}>{m}</li>)
         }
       </ul>
       {
         users.map(user => <User user={user} addMember={addMember}></User>)
       }
    </div>
  );
}

export default App;

import { useState } from 'react'
import { Form } from './components/Form'
import { Cardlist } from './components/Cardlist';
import { Header } from './components/Header';
import { ButtonLoc } from './components/ButtonLoc';
import './styles/appStyle.css';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <>
      <div className='page'>
        <Header name="Fulano" />
        <Form addUser={addUser}/>
      </div>
      <ButtonLoc />
      <Cardlist users={users} />
    </>
  )
}

export default App

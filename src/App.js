import { useState } from 'react';
import Banner from './components/Banner';
import { Form } from './components/Form/Form';

function App() {
  const [persons, setPerson] = useState([]);

  const onNewPerson = (person) => {
    setPerson([...persons, person]);
  };

  console.log(persons)
  return (
    <div className='App'>
      <Banner />
      <Form onSavePerson={(person) => onNewPerson(person)} />
    </div>
  );
}

export default App;

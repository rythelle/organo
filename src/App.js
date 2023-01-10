import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {
  const [persons, setPerson] = useState([]);

  const teams = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondColor: '#D9F7E9',
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondColor: '#E8F8FF',
    },
    {
      name: 'Back-End',
      primaryColor: '#A6D157',
      secondColor: '#F0F8E2',
    },
    {
      name: 'Design',
      primaryColor: '#E06B69',
      secondColor: '#FDE7E8',
    },
  ];

  const onNewPerson = (person) => {
    setPerson([...persons, person]);
  };

  return (
    <div className='App'>
      <Banner />
      <Form onSavePerson={(person) => onNewPerson(person)} teams={teams} />
      {teams.map(({ name, primaryColor, secondColor }) => (
        <Team
          key={name}
          name={name}
          primaryColor={primaryColor}
          secondColor={secondColor}
          cards={persons.filter((person) => person.team === name)}
        />
      ))}
    </div>
  );
}

export default App;

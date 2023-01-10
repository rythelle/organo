import './Form.css';
import TextInput from '../TextInput';
import Dropdown from '../Dropdown';
import Button from '../Button';
import { useState } from 'react';

export const Form = (props) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState('');
  const [team, setTeam] = useState('');

  const onSave = (event) => {
    event.preventDefault();
    props.onSavePerson({ name, position, image, team });

    setName('');
    setPosition('');
    setImage('');
    setTeam('');
  };

  return (
    <section className='sectionForm'>
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextInput
          required={true}
          label='Nome'
          placeholder='Digite seu nome'
          value={name}
          onChange={(value) => setName(value)}
        />
        <TextInput
          required={true}
          label='Cargo'
          placeholder='Digite seu cargo'
          value={position}
          onChange={(value) => setPosition(value)}
        />
        <TextInput
          label='Imagem'
          placeholder='Informe o endereço da imagem'
          value={image}
          onChange={(value) => setImage(value)}
        />
        <Dropdown
          required={true}
          label='Time'
          items={props.teams.map(({ name }) => name)}
          value={team}
          onChange={(value) => setTeam(value)}
        />
        <Button>Enviar</Button>
      </form>
    </section>
  );
};

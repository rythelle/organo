import './Form.css';
import TextInput from '../TextInput';

export const Form = (props) => {
  return (
    <section className='section'>
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextInput label='Nome' placeholder='Digite seu nome' />
        <TextInput label='Cargo' placeholder='Digite seu cargo' />
        <TextInput label='Imagem' placeholder='Informe o endereço da imagem' />
      </form>
    </section>
  );
};

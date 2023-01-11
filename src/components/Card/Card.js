import './Card.css';

export const Card = (props) => {
  return (
    <div className='card'>
      <div className='header' style={{ backgroundColor: props.backgroundColor }}>
        <img src={props.params.image} alt={props.params.name} />
      </div>
      <div className='footer'>
        <h4>{props.params.name}</h4>
        <h5>{props.params.position}</h5>
      </div>
    </div>
  );
};

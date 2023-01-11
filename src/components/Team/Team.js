import { Card } from '../Card/Card';
import './Team.css';

export const Team = (props) => {
  return (
    props.cards.length > 0 && (
      <section className='sectionTeam' style={{ backgroundColor: props.secondColor }}>
        <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
        <div className='cardsDiv'>
          {props.cards.map((card) => (
            <Card backgroundColor={props.primaryColor} key={card} params={card} />
          ))}
        </div>
      </section>
    )
  );
};

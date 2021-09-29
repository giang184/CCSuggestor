import { useParams } from "react-router";
import useFirestore from '../hooks/useFirestore';

const CardDetails = () => {
  const {id} = useParams();
  const {cards} = useFirestore('cards');
  const card = (cards.length > 0) ? cards.filter(card => card.id === id)[0] : {};

  return (  
    <div className="card-details">
      <div>
        <h1>{card.name}</h1>
        <h4>Card Type: {card.type}</h4>
        <h4>Rewards: </h4>
        <ul>
        {card.categories && Object.entries(card.categories).map(([key, val]) => 
                      <li key={key}>{key}: {val}%</li>
                  )}
        </ul>
      </div>
    </div>
  );
}

export default CardDetails;
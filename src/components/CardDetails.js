import { useHistory,useParams } from "react-router";
import useFirestore from '../hooks/useFirestore';
import { projectFirestore } from '../firebase/config';

const CardDetails = () => {
  const {id} = useParams();
  const {cards} = useFirestore('cards');
  const card = (cards.length > 0) ? cards.filter(card => card.id === id)[0] : {};
  const history = useHistory();

  async function handleClick () {
    await projectFirestore.collection('cards').doc(id).delete();
    history.push('/');
  }

  return (  
    <div className="card-details">
      <div>
        {card &&
        <article>
          <h1>{card.name}</h1>
          <h4>Card Type: {card.type}</h4>
          <h4>Rewards: </h4>
          <ul>
            {card.categories && Object.entries(card.categories).map(([key, val]) => 
              <li key={key}>{key}: {val}%</li>
            )}
          </ul>
          <button onClick={handleClick}>delete</button>
        </article>}
      </div>
    </div>
  );
}

export default CardDetails;
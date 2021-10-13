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
          <h2 style={{color: "#f1356d"}}>{card.name}</h2>
          <img src={card.img} class="card-img" alt={card.name}/>
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
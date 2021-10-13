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
    history.push('/wallet');
  }

  return (  
    <div className="card-details">
      <div>
        {card &&
        <div className="card-template-list">
          <h2 style={{'text-align': "center", color: "#f1356d"}}>{card.name}</h2>
          <img src={card.img} class="card-img" alt={card.name}/>
          <div className="card-body">
            <h5 className="card-title">Cash Back Rewards:</h5>
            <ul>
              {
                  card.categories && Object.entries(card.categories).sort((a, b) => a[1] - b[1]).reverse().map(([key, val]) => 
                      <li key={key}>{key}: {val}%</li>
                  )
              }
            </ul>
            <div className="center">
              <button onClick={handleClick}>Delete</button>
            </div>
          </div>
        </div>

        // <article>
        //   <h2 style={{'text-align': "center", color: "#f1356d"}}>{card.name}</h2>
        //   <img src={card.img} class="card-img" alt={card.name}/>
        //   <h4>Cash Back Rewards: </h4>
        //   <ul>
        //     {card.categories && Object.entries(card.categories).map(([key, val]) => 
        //       <li key={key}>{key}: {val}%</li>
        //     )}
        //   </ul>
        //   <button onClick={handleClick}>delete</button>
        // </article>
      }
      </div>
    </div>
  );
}

export default CardDetails;
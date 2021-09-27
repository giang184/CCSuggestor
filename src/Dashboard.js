import {useState} from 'react'

const Dashboard = () => {
  const [cards, setCards] = useState([
    {name: 'chase freedom unlimited', type: 'visa', rewards: {travel: 5, restaurant: 3, drugstore: 3, other: 1.5}, user: 'temp', id: 1},
    {name: 'chase freedom flex', type: 'visa', rewards: {walmart: 5, paypal: 5, travel: 5, restaurant: 3, drugstore: 3, other: 1}, user: 'temp', id: 2},
    {name: 'chase sapphire preferred', type: 'visa', rewards: {travel: 5, restaurant: 3, grocery: 3, streaming: 3, other: 1}, user: 'temp', id: 3}
  ]);

  return (  
    <div className="home">
        {cards.map((card) => (
          <div className="card-preview" key={card.id}>
            <h2>{card.name}</h2>
            <h4>TYPE: {card.type}</h4>
            <h4>REWARDS: </h4>
            {
                Object.entries(card.rewards).map(([key, val]) => 
                    <p key={key}>{key}: {val}%</p>
                )
            }
            
          </div>
        ))}
    </div>
  );
}
export default Dashboard;
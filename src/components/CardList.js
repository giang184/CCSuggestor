import React from 'react';
import { Link } from 'react-router-dom';
import useFirestore from '../hooks/useFirestore';

const CardList = () => {
  const {cards} = useFirestore('cards');
  return (  
    <div className="card-list">
      {cards.length > 0 && <h1>What's in your wallet</h1>}
      {cards.length === 0 && <h3><em>your wallet is empty. Click "Add New Card" to add some!</em></h3>}
      {cards.map((card) => (
          <div className="card-preview" key={card.id}>
            <Link to={`/cards/${card.id}`}>
              <h2>{card.name}</h2>
              <h4>TYPE: {card.type}</h4>
              {/* <h4>REWARDS: </h4>
              {
                  Object.entries(card.rewards).map(([key, val]) => 
                      <p key={key}>{key}: {val}%</p>
                  )
              } */}
            </Link>
          </div>
        ))}
    </div>
  );
}
export default CardList;
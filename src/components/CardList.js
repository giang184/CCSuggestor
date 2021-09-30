import React from 'react';
import { Link } from 'react-router-dom';
import useFirestore from '../hooks/useFirestore';

const CardList = () => {
  const {cards} = useFirestore('cards');
  return (  
    <div className="card-list">
      {cards.length > 0 && <h1>Your Wallet:</h1>}
      {cards.length === 0 && <div>
      <h1>Your Wallet:</h1>
      <p><em>Click "Add New Card" to add a card!</em></p></div>}
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
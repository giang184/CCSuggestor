import React from 'react';
import { Link } from 'react-router-dom';
import useFirestore from '../hooks/useFirestore';

const CardList = ({title, handleDelete}) => {
  const {cards} = useFirestore('cards');
  return (  
    <div className="card-list">
      <h1>{title}</h1>
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
            
            <button onClick = {() => handleDelete(card.id)}>Delete Card</button>
          </div>
        ))}
    </div>
  );
}
export default CardList;
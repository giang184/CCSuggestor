import React from 'react';
import { Link } from 'react-router-dom';
import useFirestore from '../hooks/useFirestore';
import visa from './../img/visa.png'
import mastercard from './../img/mastercard.png'

const CardList = () => {
  const {cards} = useFirestore('cards');
  return (  
    <div className="card-list">
      {cards.length > 0 && <h1>Your Wallet:</h1>}
      {cards.length === 0 && <div>
      <h1>Your Wallet:</h1>
      <p><em>Click "Add New Card" to add a card!</em></p></div>}
      <div className="d-flex flex-row">
      {cards.map((card) => (
          <div className="card-preview" key={card.id}>
            <Link to={`/cards/${card.id}`}>
              <div className="card-template">
                <h1 style={{'text-align': "center", color: "gray"}}>{card.name}</h1>
                {card.type === 'visa' && <img src={visa} class="card-img" alt="Visa"/>}
                {card.type === 'mastercard' && <img src={mastercard} class="card-img" alt="Visa"/>}
                  
                <div className="card-body">
                  <h5 className="card-title">Cash Back Rewards:</h5>
                  <ul>
                    {
                        Object.entries(card.categories).map(([key, val]) => 
                            <li key={key}>{key}: {val}%</li>
                        )
                    }
                  </ul>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CardList;
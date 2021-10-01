import React from 'react';
import { Link } from 'react-router-dom';
import useFirestore from '../hooks/useFirestore';
import visa from './../img/visa.png'
import mastercard from './../img/mastercard.png'
import amex from './../img/amex.png'
import discover from './../img/discover.png'

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
              <div className="card-template-list">
                <h5 style={{'text-align': "center", color: "#f1356d"}}>{card.name}</h5>
                {card.img && <img src={card.img} class="card-img" alt={card.name}/>}
                {!card.img && card.type === 'visa' && <img src={visa} class="card-img" alt="visa"/>}
                {!card.img && card.type === 'mastercard' && <img src={mastercard} class="card-img" alt="mastercard"/>}
                {!card.img && card.type === 'discover' && <img src={discover} class="card-img" alt="discover"/>}
                {!card.img && card.type === 'amex' && <img src={amex} class="card-img" alt="american express"/>}
                <div className="card-body">
                  <h5 className="card-title">Cash Back Rewards:</h5>
                  <ul>
                    {
                        Object.entries(card.categories).sort((a, b) => a[1] - b[1]).reverse().map(([key, val]) => 
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
import React from 'react';
import { Link } from 'react-router-dom';
import useFirestore from '../hooks/useFirestore';
import visa from './../img/visa.png'
import mastercard from './../img/mastercard.png'
import amex from './../img/amex.png'
import discover from './../img/discover.png'

const Result = ({selectedCategory}) => {
  const {cards} = useFirestore('cards');
  console.log(cards);
  cards.sort(function(a, b) {
    const itemA = Math.max(a.categories.All_Other_Purchases ? a.categories.All_Other_Purchases: 0, a.categories[selectedCategory] ? a.categories[selectedCategory]: 0);
    const itemB = Math.max(b.categories.All_Other_Purchases ? b.categories.All_Other_Purchases: 0, b.categories[selectedCategory] ? b.categories[selectedCategory]: 0);
    console.log(itemA);
    if (itemA > itemB) {
      return -1;
    }
    if (itemA < itemB) {
      return 1;
    }
    return 0;
  });

  return (  
    <div className="card-list">
      {selectedCategory && <h1>Ranked Cards:</h1>}
          {selectedCategory && cards.map((card) => (
              <div className="card-preview" key={card.id}>
                <Link to={`/cards/${card.id}`}>
                  <div className="card-template-list">
                    <h2 style={{'text-align': "center", color: "#f1356d"}}>{card.name}</h2>
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
  );
}

export default Result;
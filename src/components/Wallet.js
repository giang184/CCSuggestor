import React from 'react';
import { Link } from 'react-router-dom';
import useFirestore from '../hooks/useFirestore';
import { useAuth } from "../contexts/AuthContext";
import { Grid, Row, Col } from "react-flexbox-grid";
import visa from './../img/visa.png'
import mastercard from './../img/mastercard.png'
import amex from './../img/amex.png'
import discover from './../img/discover.png'

const Wallet = () => {
  const { currentUser } = useAuth()
  const {cards} = useFirestore('cards')
  const filterCards=cards.filter(card => card.user === currentUser.email)

  return (  
    <div className="card-list">
      <h1 className="card-list">What's In Your Wallet:</h1>
      <Grid fluid className="grid">
        <Row>
          {filterCards.map((card) => (
            <Col sm={12} md={6} lg={4}>
              <div className="card-preview" key={card.id}>
                <Link to={`/cards/${card.id}`}>
                  <div className="card-template-list">
                    <h2 style={{textAlign: "center", color: "#f1356d"}}>{card.name}</h2>
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
            </Col>
          ))}
        </Row>
      </Grid>
    </div>
  );
}
export default Wallet;
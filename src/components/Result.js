import React from 'react';
import { Link } from 'react-router-dom';
import useFirestore from '../hooks/useFirestore';
import { Grid, Row, Col } from "react-flexbox-grid";
import visa from './../img/visa.png'
import mastercard from './../img/mastercard.png'
import amex from './../img/amex.png'
import discover from './../img/discover.png'

const Result = ({selectedCategory}) => {
  const {cards} = useFirestore('cards');
  // console.log(cards);
  // const newCards = cards.sort(
  //   function (a, b) {
  //   return a.name - b.name;
  // }
  // );
  // console.log(cards);

  let students = [
    { name: "Alex",   grade: 15 },
    { name: "Devlin", grade: 15 },
    { name: "Eagle",  grade: 13 },
    { name: "Sam",    grade: 14 },
  ];
  console.log(students);
  students.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade);
  console.log(students);

  return (  
    <div className="card-list">
      {selectedCategory && <h1>What's In Your Wallet:</h1>}
      <Grid fluid>
        <Row>
          {cards.map((card) => (
            <Col sm={12} md={6} lg={4}>
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
            </Col>
          ))}
        </Row>
      </Grid>
    </div>
  );
}

export default Result;
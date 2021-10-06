import { projectFirestore } from '../firebase/config';
import {useHistory} from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"
import { Grid, Row, Col } from "react-flexbox-grid";
import unlimited from './../img/chase-freedom-unlimited.png'
import flex from './../img/chase-freedom-flex.png'
import sapphire from './../img/chase-sapphire-reserve.png'
import amexPreferred from './../img/amex-blue-preferred.jpg'
import amexEveryday from './../img/amex-blue-everyday.jfif'
import discoverit from './../img/discover-it.jfif'
import savor from './../img/capital-one-savor.png'
import wellsFargo from './../img/wells-fargo-active.png'
import citi from './../img/citi-double-cash.jpg'

const AddCardTemplates = () => {
  const history = useHistory();
  const { currentUser } = useAuth()
  const dir = [
    {
      name: 'Chase Freedom Unlimited', 
      user: currentUser.email,
      type: 'visa', 
      categories: {
        Drug_Stores: 3,
        Dining:3,
        All_Other_Purchases: 1.5
      },
      img: unlimited,
    },
    {
      name: 'Chase Freedom Flex',
      user: currentUser.email,
      type: 'mastercard', 
      categories: {
        Paypal: 5,
        Walmart: 5,
        Dining: 3,
        Drug_Stores: 3,
        All_Other_Purchases: 1
      },
      img: flex,
    },
    {
      name: 'Chase Sapphire Reserve',
      user: currentUser.email,
      type: 'visa', 
      categories: {
        Dining: 3,
        Grocery_Stores: 3,
        Streaming_Services: 3,
        Travel: 2,
        All_Other_Purchases: 1,
      },
      img: sapphire,
    },
    {
      name: 'Discover it',
      user: currentUser.email,
      type: 'discover', 
      categories: {
        Amazon: 5,
        Walmart: 5,
        Target: 5,
        All_Other_Purchases: 1,
      },
      img: discoverit,
    },
    {
      name: 'Capital One Savor',
      user: currentUser.email,
      type: 'mastercard', 
      categories: {
        Entertainment: 3,
        Dining: 3,
        Grocery_Stores: 3,
        Streaming_Services: 3,
        All_Other_Purchases: 1,
      },
      img: savor,
    },  
    {
      name: 'Wells Fargo Active Cash',
      user: currentUser.email,
      type: 'visa', 
      categories: {
        All_Other_Purchases: 2,
      },
      img: wellsFargo,
    },  
    {
      name: 'Citi Double Cash',
      user: currentUser.email,
      type: 'mastercard', 
      categories: {
        All_Other_Purchases: 2,
      },
      img: citi,
    },  
    {
      name: 'Amex Blue Preferred',
      user: currentUser.email,
      type: 'amex', 
      categories: {
        Grocery_Stores: 6,
        Streaming_Services: 6,
        Transit: 3,
        Gas: 3,
        All_Other_Purchases: 1,
      },
      img: amexPreferred,
    },
    {
      name: 'Amex Blue Everyday',
      user: currentUser.email,
      type: 'amex', 
      categories: {
        Grocery_Stores: 3,
        Department_Stores: 2,
        Gas: 2,
        All_Other_Purchases: 1,
      },
      img: amexEveryday,
    },
  ]

  const handleClick = (event, card) => {
    event.preventDefault();
    const collectionRef = projectFirestore.collection('cards');
    collectionRef.add(card);
    history.push('/');
    console.log(card);
    };

  return ( 
    <div className="card-list">
      <h1>Click To Add From Selected List:</h1>
      <Grid fluid>
        <Row>
          {dir.map((card) => (
            <Col sm={12} md={6} lg={4}>
              <div className="card-preview" onClick={(event) => handleClick(event, card)}>
                <div className="card-template-list">
                  <h2>{card.name}</h2>
                  <img src={card.img} class="card-img" alt={card.name}/>
                  <div className="card-body">
                    <h5 className="card-title">Cash Back Rewards</h5>
                    <ul>
                      {
                        Object.entries(card.categories).sort((a, b) => a[1] - b[1]).reverse().map(([key, val]) => 
                            <li key={key}>{key}: {val}%</li>
                        )
                      }
                    </ul>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Grid>
    </div> 
  );
}
export default AddCardTemplates;


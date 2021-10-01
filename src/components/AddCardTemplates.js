import { projectFirestore } from '../firebase/config';
import {useHistory} from 'react-router-dom';
import unlimited from './../img/chase-freedom-unlimited.png'
import flex from './../img/chase-freedom-flex.png'
import sapphire from './../img/chase-sapphire-reserve.png'

const AddCardTemplates = () => {
  const history = useHistory();
  const dir = [
    {
      name: 'Chase Freedom Unlimited', 
      type: 'visa', 
      categories: {
        Travel:5, 
        Restaurant:5,
        All_Other_Purchases: 1
      },
      img: unlimited},
    {
      name: 'Chase Freedom Flex', 
      type: 'visa', 
      categories: {
        Walmart: 5,
        Paypal: 5,
        Travel: 5,
        Dining: 3,
        All_Other_Purchases: 1
      },
      img: flex},
    {
      name: 'Chase Sapphire Reserve', 
      type: 'visa', 
      categories: {
        Travel: 5,
        Dining: 3,
        Grocery_Stores: 3,
        Streaming_Services: 3,
        All_Other_Purchases: 1,
      },
      img: sapphire},  
  ]

  const handleClick = (event, card) => {
    event.preventDefault();
    const collectionRef = projectFirestore.collection('cards');
    collectionRef.add(card);
    history.push('/');
    console.log(card);
    };

  return ( 
    <div className="add-card-templates">
        <h1>Choose From Default List</h1>
        <div className="d-flex flex-row">
        {dir.map((card) => (
          <div className="card-preview" onClick={(event) => handleClick(event, card)}>
          <h5 style={{'text-align': "center", color: "#f1356d"}}>{card.name}</h5>
            <img src={card.img} class="card-img" alt={card.name}/>
            <div className="card-body">
              <h5 className="card-title">Cash Back Rewards</h5>
              <ul>
                {/* <li>Travel: 5%</li>
                <li>Dining: 3%</li>
                <li>All Other: 1.5%</li> */}
              </ul>
            </div>
          </div>
          ))}
          {/*<div className="card-preview" onClick={(event) => handleClick(event, dir.flex)}>
            <h5 style={{'text-align': "center", color: "#f1356d"}}>Chase Freedom Flex</h5>
            <img src={dir.flex.img} class="card-img" alt="Chase-Freedom-Flex"/>
            <div className="card-body">
              <h5 className="card-title">Cash Back Rewards</h5>
              <ul>
                <li>Walmart: 5%</li>
                <li>Paypal: 5%</li>
                <li>Travel: 5%</li>
                <li>Dining: 3%</li>
                <li>All Other: 1%</li>
              </ul>
            </div>
          </div>
          <div className="card-preview">
          <h5 style={{'text-align': "center", color: "#f1356d"}}>Chase Sapphire Reserve</h5>
            <img src={sapphire} class="card-img" alt="Chase-Sapphire-Reserve"/>
            <div className="card-body">
              <h5 className="card-title">Cash Back Rewards</h5>
              <ul>
                <li>Travel: 5%</li>
                <li>Dining: 3%</li>
                <li>Grocery Stores: 3%</li>
                <li>Streaming Services: 3%</li>
                <li>All Other: 1%</li>
              </ul>
            </div>
          </div> */}
        </div>
        </div> 
  );
}
export default AddCardTemplates;


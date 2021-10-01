import { projectFirestore } from '../firebase/config';
import {useHistory} from 'react-router-dom';
import unlimited from './../img/chase-freedom-unlimited.png'
import flex from './../img/chase-freedom-flex.png'
import sapphire from './../img/chase-sapphire-reserve.png'

const AddCardTemplates = () => {
  const history = useHistory();
  const dir = {
    unlimited : {
      name: 'Chase-Freedom-Unlimited', 
      type: 'visa', 
      categories: {
        Travel:5, 
        Restaurant:5,
        All_Other_Purchases: 1},
      img: unlimited}
      }

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
          <div className="card-preview">
          <h5 style={{'text-align': "center", color: "#f1356d"}}>Chase Freedom Unlimited</h5>
            <img src={unlimited} class="card-img" alt="Chase-Freedom-Unlimited"/>
            <div className="card-body">
              <h5 className="card-title">Cash Back Rewards</h5>
              <ul>
                <li>Travel: 5%</li>
                <li>Dining: 3%</li>
                <li>All Other: 1.5%</li>
              </ul>
            </div>
          </div>
          <div className="card-preview" onClick={(event) => handleClick(event, dir.unlimited)}>
            <h5 style={{'text-align': "center", color: "#f1356d"}}>Chase Freedom Flex</h5>
            <img src={dir.unlimited.img} class="card-img" alt="Chase-Freedom-Flex"/>
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
          </div>
        </div>
        </div> 
  );
}
export default AddCardTemplates;


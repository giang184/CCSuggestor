import { projectFirestore } from '../firebase/config';
import {useHistory} from 'react-router-dom';
import unlimited from './../img/chase-freedom-unlimited.png'
import flex from './../img/chase-freedom-flex.png'
import sapphire from './../img/chase-sapphire-reserve.png'

const AddCardTemplates = () => {
  const history = useHistory();

  const handleClick = (event, card) => {
    event.preventDefault();
    const collectionRef = projectFirestore.collection('cards');
    collectionRef.add(card);
    history.push('/');
    };

  return ( 
    <div className="add-card-templates">
        <h2>Choose From Default List</h2>
        <div className="d-flex flex-row">
          <div className="card-template-add">
            <img src={unlimited} class="card-img" alt="Chase-Freedom-Unlimited"/>
            <div className="card-body">
              <h5 className="card-title">Rewards</h5>
              <ul>
                <li>Travel: 5%</li>
                <li>Dining: 3%</li>
                <li>All Other: 1.5%</li>
              </ul>
            </div>
          </div>
          <div className="card-template-add" onClick={(event) => handleClick(event, {
                name: 'Chase-Freedom-Unlimited', 
                type: 'visa', 
                categories: {
                  Travel:5, 
                  Restaurant:5,
                  All_Other_Purchases: 1}})}>
            <img src={flex} class="card-img" alt="Chase-Freedom-Unlimited"/>
            <div className="card-body">
              <h5 className="card-title">Rewards</h5>
              <ul>
                <li>Walmart: 5%</li>
                <li>Paypal: 5%</li>
                <li>Travel: 5%</li>
                <li>Dining: 3%</li>
                <li>All Other: 1%</li>
              </ul>
              {/* <button onClick={(event) => handleClick(event, {
                name: 'Chase-Freedom-Unlimited', 
                type: 'visa', 
                categories: {
                  Travel:5, 
                  Restaurant:5,
                  All_Other_Purchases: 1}})}>Add</button> */}
            </div>
          </div>
          <div className="card-template-add">
            <img src={sapphire} class="card-img" alt="Chase-Freedom-Unlimited"/>
            <div className="card-body">
              <h5 className="card-title">Rewards</h5>
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


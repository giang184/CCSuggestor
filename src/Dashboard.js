import {useState} from 'react'
import CardList from './CardList';

const Dashboard = () => {
  const [cards, setCards] = useState([
    {name: 'chase freedom unlimited', type: 'visa', rewards: {travel: 5, restaurant: 3, drugstore: 3, other: 1.5}, owner: 'Andrew', id: 1},
    {name: 'chase freedom flex', type: 'visa', rewards: {walmart: 5, paypal: 5, travel: 5, restaurant: 3, drugstore: 3, other: 1}, owner: 'Gloria', id: 2},
    {name: 'chase sapphire preferred', type: 'visa', rewards: {travel: 5, restaurant: 3, grocery: 3, streaming: 3, other: 1}, owner: 'Andrew', id: 3}
  ]);

  return (  
    <div className="home">
      <CardList cards={cards}/>
    </div>
  );
}
export default Dashboard;
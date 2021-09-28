import { useState, useEffect } from 'react'
import CardList from './CardList';

const Dashboard = () => {
  const [cards, setCards] = useState([
    {name: 'chase freedom unlimited', type: 'visa', rewards: {travel: 5, restaurant: 3, drugstore: 3, other: 1.5}, owner: 'Andrew', id: 1},
    {name: 'chase freedom flex', type: 'visa', rewards: {walmart: 5, paypal: 5, travel: 5, restaurant: 3, drugstore: 3, other: 1}, owner: 'Gloria', id: 2},
    {name: 'chase sapphire preferred', type: 'visa', rewards: {travel: 5, restaurant: 3, grocery: 3, streaming: 3, other: 1}, owner: 'Andrew', id: 3}
  ]);

  const [name, setName] = useState('andrew')

  const handleDelete = (id) => {
    const newCards = cards.filter(card => card.id !== id);
    setCards(newCards);
  }

  useEffect(() => {
    console.log("use effect")

  }, []);

  return (
    <div className="home">
      <CardList cards={cards} title="All Cards" handleDelete = {handleDelete} />
      <CardList cards={cards.filter((card) => card.owner === "Andrew")} title="Andrew's Cards" handleDelete = {handleDelete} />
    </div>
  );
}
export default Dashboard;
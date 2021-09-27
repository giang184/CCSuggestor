import {useState} from 'react'

const Dashboard = () => {
  const [name, setName] = useState('Andrew');

  const handleClick = () => {
    setName('Gloria')
  }
  return (  
    <div className="home">
      <h2>Dashboard</h2>
      <p>{name}</p>
      <button onClick = {handleClick}>Click me</button>
    </div>
  );
}
export default Dashboard;
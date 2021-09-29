import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AddCard from './components/AddCard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Dashboard />
        <AddCard />
      </div>
    </div>
  );
}

export default App;
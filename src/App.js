import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AddCard from './components/AddCard';
import AddCardDynamic from './components/AddCardDynamic';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Dashboard />
        {/* <AddCard /> */}
        <AddCardDynamic />
      </div>
    </div>
  );
}

export default App;
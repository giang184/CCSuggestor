import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
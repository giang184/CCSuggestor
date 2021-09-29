import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AddCardDynamic from './components/AddCardDynamic';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/create">
              <AddCardDynamic />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
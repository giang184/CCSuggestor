import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AddCardDynamic from './components/AddCardDynamic';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CardDetails from './components/CardDetails';
import NotFound from './components/NotFound';

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
            <Route path="/cards/:id">
              <CardDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
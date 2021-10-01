import Navbar from './components/Navbar';
import Home from './components/Home';
import Suggest from './components/Suggest';
import AddCard from './components/AddCard';
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
              <Home />
            </Route>
            <Route path="/suggest">
              <Suggest />
            </Route>
            <Route path="/create">
              <AddCard />
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
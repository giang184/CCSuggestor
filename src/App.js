import Navbar from './components/Navbar';
import Home from './components/Home';
import Suggest from './components/Suggest';
import AddCard from './components/AddCard';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CardDetails from './components/CardDetails';
import NotFound from './components/NotFound';
import Signup from './components/Signup';
import {Container} from 'react-bootstrap'
import {AuthProvider} from '../src/contexts/AuthContext'

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
            <Route exact path="/signup">
              <AuthProvider>
                <Container 
                  className="d-flex align-items-center justify-content-center"
                  style={{minHeight: "100vh"}} 
                >
                  <div className="w-100" style={{maxWidth: '400px'}}>
                    <Signup />
                  </div>
                  </Container>
                  </AuthProvider>
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
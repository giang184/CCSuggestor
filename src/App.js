import Navbar from './components/Navbar';
import Home from './components/Home';
import Suggest from './components/Suggest';
import AddCard from './components/AddCard';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CardDetails from './components/CardDetails';
import NotFound from './components/NotFound';
import Signup from './components/Signup';
import Login from './components/Login';
import {Container} from 'react-bootstrap'
import {AuthProvider} from '../src/contexts/AuthContext'
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <AuthProvider>
            <PrivateRoute exact path="/" component={Home}/>
              <Container 
                className="d-flex align-items-center justify-content-center"
                style={{minHeight: "100vh"}} 
              >
                <div className="w-100" style={{maxWidth: '400px'}}>
                  <Route exact path='/signup' component={Signup} />
                  <Route exact path='/login' component={Login} />
                  <PrivateRoute exact path='/profile' component={Profile} />
                </div>
              </Container>
            <PrivateRoute exact path="/suggest" component={Suggest}/>
            <PrivateRoute exact path="/create" component={AddCard}/>
            <PrivateRoute exact path="/cards/:id" component={AddCard}/>
            <Route path="*">
              <NotFound />
            </Route>
            </AuthProvider>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
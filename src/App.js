import MyNavBar from './components/MyNavBar';
import Wallet from './components/Wallet';
import Suggest from './components/Suggest';
import AddCard from './components/AddCard';
import CardDetails from './components/CardDetails'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './components/NotFound';
import Signup from './components/Signup';
import Login from './components/Login';
import {Container} from 'react-bootstrap'
import {AuthProvider} from '../src/contexts/AuthContext'
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <MyNavBar />
          <div className="content">
            <Switch>
              <PrivateRoute exact path="/" component={Wallet}/>
              <PrivateRoute exact path="/suggest" component={Suggest}/>
              <PrivateRoute exact path="/create" component={AddCard}/>
              <PrivateRoute exact path="/cards/:id" component={CardDetails}/>
                <Container 
                  className="d-flex justify-content-center"
                  style={{minHeight: "100vh"}} 
                >
                  <div className="w-100" style={{maxWidth: '400px'}}>
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/login' component={Login} />
                    <Route path='/profile' component={Profile} />
                    <PrivateRoute path='/update-profile' component={UpdateProfile} />
                    <Route path='/forgot-password' component={ForgotPassword} />
                  </div>
                </Container>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
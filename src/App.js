import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import Suggest from './components/Suggest';
import AddCard from './components/AddCard';
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
import RequiredLogin from './components/RequireLogin';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <PrivateRoute exact path="/" component={Home}/>
              <PrivateRoute exact path="/suggest" component={Suggest}/>
              <PrivateRoute exact path="/create" component={AddCard}/>
              <PrivateRoute exact path="/cards/:id" component={AddCard}/>
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
                    <Route path='/login-required' component={RequiredLogin} />
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
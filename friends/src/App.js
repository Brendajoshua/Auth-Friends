import React, { useState} from "react";
import { Route, Link } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token'));

  const logout = () => {
    localStorage.clear();
    setLoggedIn(false)
  }

  const login = () => {
    setLoggedIn(true);
  }
  return (
    <div className="App">
      <div className="links-container">
        <div className="links">
        {!loggedIn && (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
          {loggedIn && (
            <Link to="/login" onClick={() => logout()}>
              <button>Logout</button>
            </Link>
          )}
          <Link to="/friends">
            <button>Friends</button>
          </Link>
        </div>
      </div>
      <Route path="/login" render={(props) => <Login {...props} login={Login} />} />
      <PrivateRoute path="/friends" component={FriendsList} />
    </div>
  );
}

export default App;

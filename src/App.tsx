import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
  const { state: { user } } = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
          <div className="app__body">
            <Router>
              {/* <Switch> */}
              <Sidebar />
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              {/* <Route path="/">
                </Route>
              </Switch> */}
            </Router>
          </div>
        )}

    </div>
  );
}

export default App;

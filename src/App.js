import React from 'react';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Login />
    // <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       <Login />
    //     </Route>
    //     <Route path="/chatroom" render={(p) => < ChatRoom {...p} />} />

    //   </Switch>
    // </Router>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';

const App = () => {
  const [name, setName] = useState("");

  return (
    <Login name={name} setName={setName} />
  );
}

export default App;

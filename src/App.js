import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';

const App = () => {
  const [name, setName] = useState("");
  const [isEntered, setIsEntered] = useState(false);
  
  return (
    (isEntered) ? <ChatRoom states={{ name }} /> :
      <Login states={{ name, isEntered }} stateFunctions={{ setName, setIsEntered }} />
  );
}

export default App;

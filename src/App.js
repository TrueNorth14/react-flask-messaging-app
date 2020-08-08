import React, { useState, useReducer } from 'react';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom/ChatRoom';

const initialState = {
  name: "",
  isEntered: false
};

const reducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value
  }
}

const App = () => {
  const [name, setName] = useState("");
  const [isEntered, setIsEntered] = useState(false);
  
  return (
    (isEntered) ? <ChatRoom states={{ name }} /> :
      <Login states={{ name, isEntered }} stateFunctions={{ setName, setIsEntered }} />
  );
}

export default App;

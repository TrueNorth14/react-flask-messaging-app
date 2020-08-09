import React, { useState, useReducer } from 'react';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom/ChatRoom';

const initialState = {
  name: "default",
  isEntered: true
};

const reducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { name, isEntered } = state;

  const onChangeName = (e) => {
    dispatch({ field: "name", value: e.target.value })
    console.log({ name })
  }

  const onChangeEntered = (e) => {
    dispatch({ field: "isEntered", value: e })
  }

  return (
    (isEntered) ? <ChatRoom name={name} /> :
      <Login states={{ name, isEntered }} stateFunctions={{ onChangeName, onChangeEntered }} />
  );
}

export default App;

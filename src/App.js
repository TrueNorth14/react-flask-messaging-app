import React, { useReducer } from 'react';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom/ChatRoom';
import MyAppBar from './components/MyAppBar';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    type: "light"
  }
})

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
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <MyAppBar />
        {isEntered ? <ChatRoom name={name} /> :
          <Login states={{ name, isEntered }} stateFunctions={{ onChangeName, onChangeEntered }} />}
      </ThemeProvider>
    </div>
  );
}

export default App;

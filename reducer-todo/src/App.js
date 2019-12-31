import React from 'react';
import './App.css';
import {Reducer} from './reducers/reducer.js'
import {StateProvider, initialState} from './state/StateProvider.js'
import {Form} from './components/Form.js'
import {TodoList} from './components/TodoList.js'

function App() {
  return (
      <StateProvider initialState={initialState} reducer={Reducer}>
          <Form />
          <TodoList />
      </StateProvider>
  );
}

export default App;

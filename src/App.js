import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import Alert from './components/Alert';
import Form from './components/Form';

const { v4: uuid } = require('uuid');

const initialExpenses = [
  {id: uuid(), charge:"rent", amount: 1600},
  {id: uuid(), charge:"car", amount: 5000},
  {id: uuid(), charge:"tax", amount: 200}
];

function App() {
const [expenses, setExpenses] = useState(initialExpenses);

  return (
    <>
      <Alert></Alert>
      <h1>Budget calculator</h1>
      <main className='App'>
        <Form></Form>
        <List expenses={expenses}></List>
      </main>
      <h1>
        total spending: <span className='total'>
          ${expenses.reduce((acc, curr)=>{
            return (acc += curr.amount);
          },0)}
        </span>
      </h1>
    </>
  );
}

export default App;

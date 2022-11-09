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
 
//state values
const [expenses, setExpenses] = useState(initialExpenses);  

const[charge, setCharge] = useState('');
const[amount, setAmount] = useState('');
const[alert, setAlert] = useState({show: false});
  
//functionality
const handleCharge = e =>{
  setCharge(e.target.value);
}

const handleAmount = e =>{
  setAmount(e.target.value);
}

const handleAlert = ({type, text}) =>{
  setAlert({show: true, type, text})
  setTimeout(()=>{
    setAlert({show: false})
  },7000)
}

const handleSubmit = e => {
  e.preventDefault();
  if(charge != '' && amount > 0)
  {
    const singleExpense = {id: uuid(), charge, amount};
    setExpenses([...expenses, singleExpense]);
    setCharge('');
    setAmount('');
    handleAlert({type: 'success', text:'success'})
  }
  else
  {
    //alert
    handleAlert({type: 'danger', text:'fail'})
  }
}

//clear all
const clearItems = () =>{
  setExpenses([]); 
  handleAlert({type: 'success', text:'cleared all the items'})
}

const handleDelete = (id) => {
  let tempExpenses = expenses.filter(item => item.id !== id)
  setExpenses(tempExpenses)
  handleAlert({type: 'success', text:'cleared item'})
}

const handleEdit = (id) => {
  
}

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert />
      <h1>Budget calculator</h1>
      <main className='App'>
        <Form 
          charge={charge} 
          amount={amount}
          handleAmount={handleAmount} 
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}>
        </Form>
        <List expenses={expenses}
        handleDelete = {handleDelete}
        handleEdit = {handleEdit}
        clearItems = {clearItems}></List>
      </main>
      <h1>
        total spending: <span className='total'>
          ${expenses.reduce((acc, curr)=>{
            return (acc += parseInt(curr.amount));
          },0)}
        </span>
      </h1>
    </>
  );
}

export default App;

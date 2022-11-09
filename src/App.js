import React, { useState, useEffect } from 'react';
import './App.css';
import List from './components/List';
import Alert from './components/Alert';
import Form from './components/Form';

const { v4: uuid } = require('uuid');

const initialExpenses = localStorage.getItem('expenses')
? JSON.parse(localStorage.getItem('expenses')) 
: [];

function App() {
 
//state values
const [expenses, setExpenses] = useState(initialExpenses);  

const[charge, setCharge] = useState('');
const[amount, setAmount] = useState('');
const[alert, setAlert] = useState({show: false});

const[edit, setEdit] = useState(false);
const[id, setId] = useState(0);

//useEffect
useEffect(()=>{
  localStorage.setItem('expenses', JSON.stringify(expenses))
},[expenses])


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
    if(edit){
      let tempExpenses = expenses.map(item => {
        return item.id === id? {...item, charge, amount} :item
      });
      setExpenses(tempExpenses);
      handleAlert({type: 'success', text: 'Edited'})
      setEdit(false);
      
    }
    else
    {
      const singleExpense = {id: uuid(), charge, amount};
      setExpenses([...expenses, singleExpense]);  
      handleAlert({type: 'success', text:'success'})
    }
    setCharge('');
    setAmount('');
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
  let expense = expenses.find(item => item.id === id);
  let {charge, amount} = expense;
  setCharge(charge);
  setAmount(amount);
  setEdit(true);
  setId(id)
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
          handleSubmit={handleSubmit}
          edit={edit}
        />
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

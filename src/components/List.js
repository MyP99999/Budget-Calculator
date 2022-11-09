import React from 'react'
import Item from './Item'

export default function List({expenses, handleEdit, handleDelete, clearItems}) {
  return (
    <>
      <ul className='list'>
        {expenses.map((expense)=>{
          return <Item key={expense.id} expense={expense} 
          handleDelete = {handleDelete}
          handleEdit = {handleEdit}
          />
        })}
      </ul>  
      {expenses.length > 0 && 
      <button className='btn' onClick={clearItems}>
        Clear expenses
      </button>}
    </>
  )
}

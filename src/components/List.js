import React from 'react'
import Item from './Item'

export default function List({expenses}) {
  return (
    <>
      <ul className='list'>
        {expenses.map((expense)=>{
          return <Item key={expense.id} expense={expense}/>
        })}
      </ul>  
      {expenses.length > 0 && <button className='btn' >Clear expenses</button>}
    </>
  )
}

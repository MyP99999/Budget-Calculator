import React from 'react'

export default function Item({expense, handleEdit, handleDelete}) {
  const {id, charge, amount} = expense
  return (
    <li className='item'>
      <div className='info'>
        <span className='expense'>{charge}</span>
        <span className='amount'>${amount}</span>
      </div>
      <div>
        <button className='edit-btn' aria-label='edit button' onClick={()=>handleEdit(id)}>
          Edit
        </button>
        <button className='clear-btn' aria-label='clear button' onClick={()=>handleDelete(id)}>
          Clear
        </button>
      </div>
    </li>
  )
}

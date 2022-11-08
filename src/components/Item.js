import React from 'react'

export default function Item({expense}) {
  const {id, charge, amount} = expense
  return (
    <li className='item'>
      <div className='info'>
        <span className='expense'>{charge}</span>
        <span className='amount'>${amount}</span>
      </div>
      <div>
        <button className='edit-btn' aria-label='edit button'>
          Edit
        </button>
        <button className='clear-btn' aria-label='clear button'>
          Clear
        </button>
      </div>
    </li>
  )
}

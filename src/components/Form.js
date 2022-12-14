import React from 'react'


export default function Form({charge, 
  amount, 
  handleCharge, 
  handleAmount, 
  handleSubmit,
  edit
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-center'>
        <div className='form-center'>
          <div className='form-group'>
            <label htmlFor="charge">charge</label>
            <input 
              type="text" 
              className='form-control' 
              id='charge' 
              name='charge' 
              placeholder='e.g. rent'
              value={charge}
              onChange={handleCharge} 
            />
          </div>
        </div>
        <div className='form-center'>
          <div className='form-group'>
            <label htmlFor="amount">amount</label>
            <input 
              type="number" 
              className='form-control' 
              id='amount' 
              name='amount' 
              placeholder='e.g. 30$'
              value={amount}
              onChange={handleAmount}
            />
          </div>
        </div>
        </div>
        <button type='submit' className='btn'>
          {edit?'edit':'submit'}
        </button>
      
    </form>
  )
}

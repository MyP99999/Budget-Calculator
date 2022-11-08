import React from 'react'


export default function Form() {
  return (
    <form>
      <div className='form-center'>
        <div className='form-group'>
          <label htmlFor="charge">charge</label>
          <input type="text" className='form-control' id='charge' name='charge' placeholder='e.g. rent'/>
        </div>
      </div>
      <div className='form-center'>
        <div className='form-group'>
          <label htmlFor="amount">amount</label>
          <input type="text" className='form-control' id='amount' name='amount' placeholder='e.g. 30$'/>
        </div>
      </div>
      <button type='submit' className='btn'>
        submit
      </button>
    </form>
  )
}

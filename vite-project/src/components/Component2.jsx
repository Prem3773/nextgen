import React from 'react'
import './comp2.css'

function Component2() {
  return (
    <>
   <div className='bmi  bg-lime-200 flex flex-col '  >
      <h1 className='bg-amber-100 text-center  ml-20 mr-20'> Calculator</h1>
      <form className='flex flex-col text-center items-center'>
        <label htmlFor="">enter first number:</label>
        <input type="number" className='bg-white rounded w-20 border-2 border-black py-1 '   />
       
        <label htmlFor="">enter second number:</label>
        <input type="number" className='bg-white rounded w-20 border-2 border-black py-1' />
        <div className="head ">

        <input type="button"  value="addition" className='bg-white mt-3 border border-black ml-4'/>
        <input type="button"  value="substraction" className='bg-white mt-3 border border-black ml-4'/>

        <input type="button"  value="multiply" className='bg-white mt-3 border border-black ml-5' />
        </div>
      </form>
      <div className="result  ">

      <h1 className='text-center'>RESULT :-</h1>
      </div>
    </div>


    </>
  )
}

export default Component2
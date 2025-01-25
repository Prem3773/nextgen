import React,{ useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import './comp1.css'
// import './comp2.css'


function component()
{


  return (
    <>
    <div className='bmi  bg-red-400' >
      <h1 className='bg-blue-900 text-center  ml-20 mr-20'>Body Mass Index Calculator</h1>
      <form className='flex flex-col text-center items-center'>
        <label htmlFor="">weight (in kg):</label>
        <input type="number" className='bg-white rounded w-20 border-2 border-black py-1 '   />
       
        <label htmlFor="">height (in cm):</label>
        <input type="number" className='bg-white rounded w-20 border-2 border-black py-1' />
        <input type="button"  value="submit"/>
      </form>
      <div className="result  ">

      <h1 className='text-center'>RESULT :-</h1>
      </div>
    </div>










   
    </>
  )
}

export default component
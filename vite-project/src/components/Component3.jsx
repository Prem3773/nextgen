import React from 'react'

function Component3() {
  return (
    <>
    <div className='bmi  bg-transparent' >
      <h1 className='bg-teal-200 text-center  ml-20 mr-20'>Kg to Pounds Converter</h1>
      <form className='flex flex-col text-center items-center'>
        <label htmlFor="">enter kg</label>
        <input type="number" className='bg-white rounded w-20 border-2 border-black py-1 '   />
       
        {/* <label htmlFor="">height (in cm):</label>
        <input type="number" className='bg-white rounded w-20 border-2 border-black py-1' /> */}
        <input type="button"  value="submit"/>
      </form>
      <div className="result  ">

      <h1 className='text-center'>RESULT :-</h1>
      </div>
    </div>

    
    </>
  )
}

export default Component3
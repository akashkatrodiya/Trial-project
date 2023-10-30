import React from 'react'
import Autocompleteaddreess from './Autocompleteaddreess'
import Cars from './Cars'
import Cards from './Cards'

const Booking = () => {
  // const screenheight=window.innerHeight;

  // if (window !== undefined) {
  //   // browser code
  // }
  return (
    <div className='booking_main'>
        <h2 className='booking_headinng'>Booking</h2>
        <div style={{ border:"2px solid", padding:"25px"}}>
        <Autocompleteaddreess/>
        <Cars/>
<Cards/>
<button className='btn_book'>Book</button>
        </div>
        
        </div>
  )
}

export default Booking
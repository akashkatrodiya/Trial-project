import Image from 'next/image'
import React from 'react'
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}
    className='navbar_main_div'>
    <div style={{display:"flex",gap:"25px",alignItems:"center"}}>
      <Image
      src={"/logo.png"}
      height={60}
      width={120}
      alt='logo'
      className='logo'/>


      <div style={{display:"flex",gap:"50px"}} className='menu_navbar'>
        <h2 className='home_h2'>Home</h2>
        <h2 className='history_h2'>History</h2>
        <h2 className='help_h2'>Help</h2>
      </div>

    </div>
    <UserButton afterSignOutUrl="/"/>  

    </div>  )
}

export default Navbar
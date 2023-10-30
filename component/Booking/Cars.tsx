"use client"
import Carlist from '@/Data/Carlist'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
const Cars = () => {

    
        const [activeIndex, setActiveIndex] = useState(-1);
      
        const handleItemClick = (index:any) => {
          setActiveIndex(index);
        };
    console.log(activeIndex);
    
  return (
    <div>
        <h2 className='cars_heading'>Select Car</h2>
        <div className='cars_list'>
      {Carlist.map((item, index) => (
        <div
          key={index}
          className={`cars_image ${activeIndex === index ? 'active_remove_event' : ''}`}
          onClick={() => handleItemClick(index)}
        >
          <Image
            src={item.image}
            alt={item.name}
            height={90}
            width="120"
            className='img_'
          />
          <h2 style={{ fontSize: "12px" }}>
            {item.name}
            <span style={{ float: "right" }}> {item.charges * 8}</span>
          </h2>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Cars
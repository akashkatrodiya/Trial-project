"use client"
import React from "react";
import Cardslist from "@/Data/Cardslist";
import { useState } from "react";
import Image from "next/image";
const Cards = () => {

    const [activeIndex, setActiveIndex] = useState(-1);
    const handleItemClick = (index:any) => {
        setActiveIndex(index);
      };


  return (
    <div>
      <h2 className="cards_heading">Payment Methods</h2>
      <div className="cards_img_div">
        {Cardslist.map((item, index) => (
          <div className={`d3_ ${activeIndex === index ? 'active_remove' :''}`}
          key={index}
          onClick={()=>handleItemClick(index)}>
            <Image src={item.image} alt={item.name} height={50} width={30}  className="cards_img"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

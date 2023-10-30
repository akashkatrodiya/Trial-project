"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Booking from "@/component/Booking/Booking";
import Mapbox from "@/component/Map/Mapbox";
import { useEffect, useState } from "react";
import { UserLocationContext } from "@/Context/UserLocationContext";
// import { UserButton } from "@clerk/nextjs";
export default function Home() {
  const [userLocation, setuserLocation] = useState<any>([]);
  useEffect(() => {
    getuserlocation();
  }, []);
  const getuserlocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log(pos);
      setuserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };

  return (
    <div>
        <UserLocationContext.Provider value={{ userLocation, setuserLocation }}>

      <div className="div_page">
          <div className="booking_main_div">
            <Booking />
          </div>

          <div className="map_main_div">
            <Mapbox />
          </div>
      </div>
      </UserLocationContext.Provider>

    </div>
  );
}

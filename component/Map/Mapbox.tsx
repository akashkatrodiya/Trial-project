"use client"

import { UserLocationContext } from '@/Context/UserLocationContext';
import React, { useContext } from 'react'
import {Map,Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Mapbox = () => {

  const {userLocation, setuserLocation} = useContext(UserLocationContext);
  console.log(userLocation)
  
  return (
    <div style={{marginTop:"28px"}}>
<h2 className='heading_mapbox'>Map</h2>
{userLocation?(
<Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        longitude: -122.4,
        latitude:37.8,
        zoom: 14
      }}
      style={{width: '100%', height: 500}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker longitude={userLocation?.lng} latitude={userLocation?.lat} anchor="bottom" >
      <img src="./pin.png" className='marker_location' />
    </Marker>
      
      
      
      </Map>):null}

    </div>
  )
}

export default Mapbox
// -122.4
// 37.8



// -100
//40
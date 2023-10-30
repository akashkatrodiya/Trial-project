"use client"
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

// const axios = require('axios'); // Import the axios library

// const options = {
//   method: 'POST',
//   url: 'https://mapboxdurationvolodimir-kudriachenkov1.p.rapidapi.com/getCyclingDuration',
//   headers: {
//     'X-RapidAPI-Key': 'cee3e4b60cmsha376a9d7a737b54p1ff2abjsn990f4c46d5e1',
//     'X-RapidAPI-Host': 'MapboxDurationvolodimir-kudriachenkoV1.p.rapidapi.com'
//   }
// };

// async function getCyclingDuration() {
//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }

  
// }



// useEffect

// getCyclingDuration(); // Call the async function





const router = useRouter();
const [Datas, setDatas] = useState([]);
useEffect(() => {
    axios.get(
'    https://api.mapbox.com/geocoding/v5/mapbox.places/central%20mall.json?proximity=ip&access_token=pk.eyJ1IjoibGp3ZWJjb25zdWx0aW5nIiwiYSI6ImNsa2hhYjlrcDA2em4zZm9obzc4MGIwczgifQ.KntUAy04tMCpw-haR_a-7Q'
    ).then(function(response) {
        setDatas(response.data);
        console.log(Datas)
    }).catch(function(error) {
        console.log(error);
    });
}, [Datas])
console.log('Data:', Datas);
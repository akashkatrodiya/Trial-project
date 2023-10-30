"use client";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";


const session_token='5ccce4a4-ab0a-4a7c-943d-580e55542363'
const MAPBOX_RETRIVE_URL='https://api.mapbox.com/search/searchbox/v1/retrieve/'

const Autocompleteaddreess = () => {
  // const router = useRouter();

  const [source,setSource]=useState<any>()
  const [sourceChange,setSourceChange]=useState<any>(false)

  const [soruceCordinates,setSourceCordinates]=useState<any>( );


  const [Datas, setDatas] = useState<any>({
    from: "",
    whereto: "",
  });

  const [Addresstlist, setAddresslist] = useState<any>([]);
  const [WheretoAddress, setWheretoAddress] = useState<any>([]);
  useEffect(() => {
    axios
      .get(
        ` https://api.mapbox.com/geocoding/v5/mapbox.places/${Datas.from}.json?proximity=ip&access_token=pk.eyJ1IjoibGp3ZWJjb25zdWx0aW5nIiwiYSI6ImNsa2hhYjlrcDA2em4zZm9obzc4MGIwczgifQ.KntUAy04tMCpw-haR_a-7Q`
      )
      .then(function (response) {
        setAddresslist(response.data);
        // console.log(Datas)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [Datas.from]);
  useEffect(() => {
    axios
      .get(
        ` https://api.mapbox.com/geocoding/v5/mapbox.places/${Datas.whereto}.json?proximity=ip&access_token=pk.eyJ1IjoibGp3ZWJjb25zdWx0aW5nIiwiYSI6ImNsa2hhYjlrcDA2em4zZm9obzc4MGIwczgifQ.KntUAy04tMCpw-haR_a-7Q`
      )
      .then(function (response) {
        setWheretoAddress(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [Datas.whereto]);

  const input = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setDatas((prevalue:any) => ({
      ...prevalue,
      [name]: value,
    }));
  };


const onSourceAddressClick=async(item:any)=>{
  Datas.whereto = item.place_name;
  setWheretoAddress({ });



  const res=await fetch(MAPBOX_RETRIVE_URL+item.place_name+"?session_token="+
  session_token+"&access_token="+process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN)

    const result=await res.json()
    setSourceCordinates(result)

    console.log("hi",setSourceCordinates);
    
}



  return (
    <div style={{ marginTop: "5px" }}>
      <div>
        <label htmlFor="">Where From</label>
        <input
          type="text"
          name="from"
          className="aca_input_field"
          onChange={input}
          value={Datas.from}
        />

        {Addresstlist?.features ? (
          <div>
            {Addresstlist?.features.map((item: any, index: number) => (
              <h4
                onClick={() => {
                  Datas.from = item.place_name;
                  setAddresslist({});
                }}
                className="h4_suggetion"
              >
                {item.place_name}
              </h4>
            ))}
          </div>
        ) : null}
      </div>

      <div style={{ marginTop: "5px" }}>
        <label htmlFor="">Where To </label>
        <input
          name="whereto"
          type="text"
          className="aca_input_field"
          onChange={input}
          value={Datas.whereto}
        />

        {WheretoAddress?.features ? (
          <div>
            {WheretoAddress?.features.map((item: any, index: number) => (
              <h4
                onClick={() => {
                  onSourceAddressClick(item)
                }}
                className="h4_suggetion"
              >
                {item.place_name}
              </h4>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Autocompleteaddreess;

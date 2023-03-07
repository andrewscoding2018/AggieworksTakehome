import React, { useState } from "react";

function FetchTiingo(){
    const [data, setData] = useState([]);


    const apiGet = async () => {
        const res = await fetch("https://api.tiingo.com/tiingo/daily/AAPl/prices?token=2f2fbf36a5040e4f35e351ec5b6d905ec13eee43");
        const data1 = await res.json();
        setData(data1);
        console.log(data1);
      };
      
    const displayData = () => {
    return (
        <div>
            <p>{data.high}</p>
            <p>{data.low}</p>
            <p>{data.open}</p>
        </div>
    );
    };

      return(
          <div>
            <button onClick = {apiGet}>Get Tiingo Data for Apple</button>
            <div>Placeholder for FetchTiingo</div>
            <>{displayData()}</>
          </div>
      )
}


export default FetchTiingo;
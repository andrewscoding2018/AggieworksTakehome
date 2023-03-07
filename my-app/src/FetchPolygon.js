import React, { useState } from "react";

function FetchPolygon(){
    const [data, setData] = useState([]);
    const [results,setResults] = useState([]);

    const apiGet = async () => {
        const res = await fetch("https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-03-06/2023-03-06?apiKey=z7NGhivxL2I3TxvBt2UUnb31JcSMqkqp");
        const data1 = await res.json();
        setData(data1);
        console.log(data1);
        setResults(data1.results[0]);
        console.log(results)
      };
      
    const displayTicker = () => {
    return (
        <div>
            <p>Your ticker symbol is: {data.ticker}</p>
            <p>Your query count is: {data.queryCount}</p>
        </div>
    );
  };

  const timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
  }

    const displayData = () =>{
      const dataList = (
        <div> 
          <ul>Close is: ${results.c}</ul>
          <ul>High is: ${results.h}</ul>
          <ul>Low is: ${results.l}</ul>
          <ul>Transaction count is: {results.n}</ul>
          <ul>Open is: ${results.o}</ul>
          {/* <ul>Timestamp is: {timeConverter(results.t)}</ul> */}
          {/* <ul>Timestamp is: {results.t}</ul> */}
          <ul>Volume is: {results.v}</ul>
          <ul>Volume-weighted prices is is: ${results.vw}</ul>
        </div>
      )
      return(
        <div>
          {dataList}
        </div>
      ) 
    }

      return(
          <div align = "left">
            <button onClick = {apiGet}>Get Polygon Data for Apple</button>
            <div align = "justify">
            <>{displayTicker()}</>
            <>{displayData()}</>
            </div>
          </div>
      )
}


export default FetchPolygon;
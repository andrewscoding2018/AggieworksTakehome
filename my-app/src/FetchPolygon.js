import React, { useState } from "react";

function FetchPolygon() {
  const [data, setData] = useState([]);
  const[date1, setDate1] = useState([]);
  const[date2, setDate2] = useState([]);
  const [results, setResults] = useState([]);
  const [ticker, setTicker] = useState([]);
  const today = new Date();

const settingSet = () =>{
  setDate1(document.querySelector(".search-box-date1").value);
  setDate2(document.querySelector(".search-box-date2").value);
  setTicker(document.querySelector(".search-box").value);

}

  const apiGet = async () => {
    console.log(ticker)
    const res = await fetch(
      `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/day/${date1}/${date2}?apiKey=z7NGhivxL2I3TxvBt2UUnb31JcSMqkqp`
    );
    const data1 = await res.json();
    setData(data1);
    console.log(data);
    setResults(data.results[0]);
    console.log(results);
  };

  const displayTicker = () => {
    return (
      <div>
        <p>Your ticker symbol is: {data.ticker}</p>
        <p>Your request count (you get 5 per minute) is: {data.queryCount}</p>
      </div>
    );
  };

  const timeConverter = (UNIX_timestamp) => {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time =
      date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
    return time;
  };

  const displayData = () => {
    const dataList = (
      <div>
        <ul>Close is: ${data.c}</ul>
        <ul>High is: ${results.h}</ul>
        <ul>Low is: ${results.l}</ul>
        <ul>Transaction count is: {results.n}</ul>
        <ul>Open is: ${results.o}</ul>
        {/* <ul>Timestamp is: {timeConverter(results.t)}</ul> */}
        {/* <ul>Timestamp is: {results.t}</ul> */}
        <ul>Volume is: {results.v}</ul>
        <ul>Volume-weighted prices is is: ${results.vw}</ul>
      </div>
    );
    return <div>{dataList}</div>;
  };

  return (
    <div align="left">
      <div>
      <input
          className = "search-box-date1"
          type="text"
          size = "40"
          placeholder="Start Date, formated like: 2023-01-09"
        />
        <input
          className = "search-box-date2"
          type="text"
          size = "40"
          placeholder="End Date, formatted like 2023-01-10"
        />
        <input
          className = "search-box"
          type="text"
          size = "40"
          placeholder = "Ticker Symbol"
        />
      </div>
      <button onClick={settingSet}>Set Date, Time, Ticker</button>
      <p>Start Date: {date1}, End Date: {date2}, Ticker: {ticker}</p>
      <button onClick={apiGet}>Get Polygon Data</button>
      <div align="justify">
        <>{displayTicker()}</>
        <>{displayData()}</>
      </div>
    </div>
  );
}
export default FetchPolygon;

import React, { useEffect } from "react";
import { useState } from "react";
import Plot from "react-plotly.js";


function Stock() {
  const [stockX, setStockX] = useState([]);
  const [stockY, setStockY] = useState([]);
  const [ticker, setTicker] = useState([]);

  const inputTicker = () => {
    setTicker(document.querySelector(".search-box").value)
    fetchStock();
  };

  function fetchStock() {
    const API_KEY = "URH333F2JW8XFISO";
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ticker}&apikey=${API_KEY}`;
    let chartXValues = [];
    let chartYValues = [];
    console.log(ticker)

    fetch(API_Call)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data);

        for (var key in data["Time Series (Daily)"]) {
          chartXValues.push(key);
          chartYValues.push(data["Time Series (Daily)"][key]["1. open"]);
        }
        setStockX(chartXValues);
        setStockY(chartYValues);
      });
  }

  return (
    <div>
        <div>
        <input
          className="search-box"
          type="text"
          size="40"
          placeholder="Ticker Symbol"
        />
        <button onClick={inputTicker}>Set Stock Ticker</button>
        </div>
    <div>

        <h1>Stock Market</h1>
        <Plot
          data={[
            {
              x: stockX,
              y: stockY,
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "blue" },
              fillpattern:{
                  bgcolor:"red"
              }
            },
          ]}
          layout={{ width: 720, height: 440, title: "Try Clicking and Dragging!" }}
        />
      </div>
    </div>
  );
}

export default Stock;

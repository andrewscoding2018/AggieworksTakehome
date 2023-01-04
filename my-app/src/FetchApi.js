import React, { useState } from "react";

function FetchAPI() {
  const [data, setData] = useState([]);

  const Stock = ({ time, USD, EUR, GBP }) => {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <h5>{time}</h5>
            </td>
            {/* <td>
              <h5>{USD}</h5>
            </td>
            <td>
              <h4>{EUR}</h4>
            </td>
            <td>
              <p>{GBP}</p>
            </td> */}
          </tr>
        </tbody>
      </table>
    );
  };

  const apiGet = async () => {
    const res = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    const data1 = await res.json();
    setData(data1);
    console.log(data1);
  };

  const displayData = () => {
    return (
      <div>
        <p>{data.disclaimer}</p>
        <p>{data.bpi.USD.code}</p>
      </div>
    );
  };

  return (
    <>
      <button onClick={apiGet}>Fetch API</button>
      <>{displayData}</>
      <div className="stock-container">
        {/* {data.map((item, i) => {
          return (
            <div key={i}>
              <Stock
              time = {item.time}
            //   USD = {data.USD}
            //   EUR = {data.EUR}
            //   GBP = {data.GBP}
              />
            </div>
          );
        })} */}
      </div>
    </>
  );
}

export default FetchAPI;

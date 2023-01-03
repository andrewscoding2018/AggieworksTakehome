import React, { useState } from 'react';

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
            <td>
              <h5>{USD}</h5>
            </td>
            <td>
              <h4>{EUR}</h4>
            </td>
            <td>
              <p>{GBP}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };
  
  const apiGet = () => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => response.json())
      .then((json) =>{
          console.log(json);
          setData(json);
      })
      
    
    };
  return (
    <>
      <button onClick={apiGet}>Fetch API</button>
      <div className="stock-container">
        {data.map((data, key) => {
          return (
            <div key={key}>
              <Stock
              time = {data.time}
              USD = {data.USD}
              EUR = {data.EUR}
              GBP = {data.GBP}/>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FetchAPI;

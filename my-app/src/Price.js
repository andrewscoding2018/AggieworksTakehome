import React from "react";
import "./App.css";

const Stock = ({ time, USD, EUR, GBP }) => {
  if (!company) return <div />;
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

export const Price = (data) => {
  return (
    <>
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
};
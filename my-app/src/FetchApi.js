import React, { useState } from 'react';

function FetchAPI() {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => response.json())
      .then((json) =>{
          console.log(json);
          setData(json);
      })
      
    
    };
  return (
    <div>
      My API <br />
      <button onClick={apiGet}>Fetch API</button>
      <br/>
      <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  );
}

export default FetchAPI;

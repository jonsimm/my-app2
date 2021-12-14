import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      let response = await fetch('api/HttpTrigger1');

      console.log(response.status);
      console.log(response.statusText);

      let data = await response.text();
      setData(data);
    })();
  });
  return (
    <div className="App">{data}</div>
  );
}

export default App;

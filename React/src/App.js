


import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    // Fetch data from the Flask backend on component mount
    axios.get('http://127.0.0.1:5000/api/data')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const sendData = () => {
    const data = { data: "Hello from React!" };
    axios.post('http://127.0.0.1:5000/api/data', data)
      .then(response => {
        setResponseData(response.data.received);
      })
      .catch(error => {
        console.error("There was an error posting the data!", error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
        <button onClick={sendData}>Send Data</button>
        {responseData && <p>Response: {JSON.stringify(responseData)}</p>}
      </header>
    </div>
  );
}

export default App;
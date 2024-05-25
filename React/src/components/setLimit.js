import React, { useState } from 'react';

function SetLimit() {
  const [limits, setLimits] = useState([
    { name: 'Daily Limit', value: 100 },
    { name: 'Weekly Limit', value: 500 },
    { name: 'Monthly Limit', value: 2000 }
  ]);
  const [newLimitName, setNewLimitName] = useState('');
  const [newLimitValue, setNewLimitValue] = useState('');

  const handleInputChange = (index, value) => {
    const newLimits = [...limits];
    newLimits[index].value = value;
    setLimits(newLimits);
  };

  const handleAddLimit = () => {
    if (newLimitName && newLimitValue) {
      setLimits([...limits, { name: newLimitName, value: newLimitValue }]);
      setNewLimitName('s');
      setNewLimitValue('s');
    }
  };

  return (

<>
    <div className="container mt-5">
      <h2>Set Limits</h2>
      <br></br>
      {limits.map((limit, index) => (
        <div key={index} className="form-group">
          <label>{limit.name}</label>
          <input
            type="number"
            className="form-control"
            value={limit.value}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        </div>
      ))}
      <div className="form-group">
       
      </div>
      <br></br>
      <button className="btn btn-primary" onClick={handleAddLimit}>Add Limit</button>
      <br></br>
    </div>
    <br></br>

    </>
  );
}

export default SetLimit;

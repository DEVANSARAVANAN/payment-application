import React from 'react';

function AnalyticalPage() {
  return (
    <div className="container mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-md p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Budget Fixed</h2>
          <p className="text-gray-600 mb-2">Monthly</p>
          <p className="text-3xl text-green-600">20,000</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Yet Used</h2>
          <span className="badge bg-primary text-white px-2 py-1 rounded-full mb-2">Discretionary Expenses</span>
          <span className="badge bg-primary text-white px-2 py-1 rounded-full mb-2">Variable Expenses</span>
          <span className="badge bg-secondary text-white px-2 py-1 rounded-full mb-2">Fixed Expenses</span>
          <span className="badge bg-success text-white px-2 py-1 rounded-full mb-2">Inversment</span>
          <p className="text-gray-600 mb-2">Daily</p>
          <p className="text-3xl text-green-600">15,000</p>
        </div>
        <br></br>
      </div>
    </div>
  );
}

export default AnalyticalPage;

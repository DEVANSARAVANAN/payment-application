import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AnalyticalPage() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white">
              Payment Analytics
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4">
                    <div className="card-body">
                      <h5 className="card-title">Buget Fixed </h5>
                      <h7 className="card-title">Monthly </h7>
                      <h3 className="card-text">20,000</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-4">
                    <div className="card-body">
                      <h5 className="card-title">Yet Used</h5>
                      <h7 className="card-title">Monthly </h7>
                      <h3 className="card-text">500</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4">
                    <div className="card-body">
                      <h5 className="card-title">Hangout</h5>
                      <h7 className="card-title">Monthly</h7>
                      <h3 className="card-text">1000</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-4">
                    <div className="card-body">
                      <h5 className="card-title">Yet Used</h5>
                      <h7 className="card-title">Monthly </h7>
                      <h3 className="card-text"> 400</h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add more analytical metrics as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticalPage;

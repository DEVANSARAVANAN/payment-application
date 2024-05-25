import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Navigation from "./navbar";

function PayContact() {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h5 className="card-title text-center">Send Money</h5>
        <br />
        <form>
          <div className="form-group mb-3">
            <input type="text" className="form-control" id="phoneNumber" placeholder="Enter phone number" />
          </div>
          <div className="form-group mb-3">
            <input type="number" className="form-control" id="amount" placeholder="Enter amount" />
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Money</button>
        </form>
        <br />
        <button className="btn btn-link text-decoration-none mb-4" onClick={() => navigate("/pay")}>
          <i className="fas fa-arrow-left"></i> Back
        </button>
      </div>
      <div>
        <Navigation/>
      </div>
    </div>
  );
}

export default PayContact;

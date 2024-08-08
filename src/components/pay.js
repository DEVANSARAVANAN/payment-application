import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./navbar";
import { useNavigate } from "react-router-dom";

function Pay() {
    const navigate = useNavigate()
    function handlePay(){
        navigate("/chooseCard")
    }

  return (
    <div className="d-flex flex-column justify-content-between" style={{ height: '100vh' }}>
      <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
        <button  onClick={handlePay} className="btn btn-lg btn-primary rounded-pill shadow-lg m-2">
          <i className="fas fa-money-bill-alt"></i> Fixed Expenses
        </button>
        <button onClick={handlePay} className="btn btn-lg btn-primary rounded-pill shadow-lg m-2">
          <i className="fas fa-money-bill-alt"></i> Vaible Expenses
        </button>
        <button onClick={handlePay} className="btn btn-lg btn-primary rounded-pill shadow-lg m-2">
          <i className="fas fa-money-bill-alt"></i> Discretionary Expenses
        </button>
      </div>
      <Navigation />
    </div>
  );
}

export default Pay;

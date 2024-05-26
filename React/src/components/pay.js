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
          <i className="fas fa-money-bill-alt"></i> Label-1
        </button>
        <button onClick={handlePay} className="btn btn-lg btn-primary rounded-pill shadow-lg m-2">
          <i className="fas fa-money-bill-alt"></i> Label-2
        </button>
      </div>
      <Navigation />
    </div>
  );
}

export default Pay;

import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
// import { Navigate } from 'react-router-dom';
import Navigation from './navbar';

function Payment() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');

  const handlePayment = () => {
    // Implement payment logic here
    console.log('Payment processed successfully!');
  };

  return (
<>
    <div><Navigation/></div>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              Make Payment
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="cardNumber">Card Number:</label>
                <input
                  type="text"
                  className="form-control"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date:</label>
                <input
                  type="text"
                  className="form-control"
                  id="expiryDate"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV:</label>
                <input
                  type="text"
                  className="form-control"
                  id="cvv"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="amount">Amount:</label>
                <input
                  type="text"
                  className="form-control"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <button className="btn btn-primary" onClick={handlePayment}>Pay Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>

</>
  );
}

export default Payment;






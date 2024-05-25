import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './navbar';
import SetLimit from './setLimit';
import Profile from './profilepage';

function Settings() {
  return (

<>
<div><Navigation/></div>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white">
              Payment Application Settings
            </div>
            <div className="card-body">
              <h2 className="card-title">General Settings</h2>
              <br></br>
              <div className="form-group">
                <label htmlFor="currency">Currency:</label>
                <select className="form-control" id="currency">
                  <option value="USD">USD - United States Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound Sterling</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <hr />
              <h5 className="card-title">Security Settings</h5>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="enableTwoFactorAuth" />
                <label className="form-check-label" htmlFor="enableTwoFactorAuth">Enable Two-Factor Authentication</label>
              </div>
              <hr />
              <h5 className="card-title">Payment Gateway Settings</h5>
              <div className="form-group">
                <label htmlFor="paymentGateway">Payment Gateway:</label>
                <select className="form-control" id="paymentGateway">
                  <option value="stripe">Stripe</option>
                  <option value="paypal">PayPal</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="stripeApiKey">Stripe API Key:</label>
                <input type="text" className="form-control" id="stripeApiKey" />
              </div>
              {/* Add more payment gateway settings as needed */}
              <br></br>
              <button type="submit" className="btn btn-primary">Save Changes</button>
            </div>
            
           
          </div>
          <br></br>
          
        <div className="card"><SetLimit/></div>
        <br></br>
          <br></br>
          <br></br>
          <br></br>

        </div>
      </div>
      
    </div>
    

    </>
  );
}

export default Settings;

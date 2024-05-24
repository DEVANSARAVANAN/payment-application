import React from 'react';
import Navigation from './navbar';

function Notifications() {
  return (
<>
<div><Navigation/></div>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white">
              Notifications
            </div>
            <div className="card-body">
              <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Payment Successful</h5>
                    <small>1 min ago</small>
                  </div>
                  <p className="mb-1">Your payment of 100 Rupees was successful.</p>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">Payment Failed</h5>
                    <small>5 mins ago</small>
                  </div>
                  <p className="mb-1">Your payment of 50 Rupees failed. Please try again.</p>
                </a>
                <a href="#" className="list-group-item list-group-item-action">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">New Message</h5>
                    <small>1 hour ago</small>
                  </div>
                  <p className="mb-1">You have a new message from customer support.</p>
                </a>
                {/* Add more notification items as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Notifications;

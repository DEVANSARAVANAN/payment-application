import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './navbar';

function Profile() {
  return (

<>

    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white">
              User Profile
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" className="form-control" id="fullName" value="John Doe" disabled />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" value="john@example.com" disabled />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="text" className="form-control" id="phoneNumber" value="+1234567890" disabled />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <textarea className="form-control" id="address" rows="3" value="123 Main St, New York, USA" disabled />
              </div>
              <div className="form-group">
                <label htmlFor="paymentMethod">Payment Method:</label>
                <input type="text" className="form-control" id="paymentMethod" value="Credit Card" disabled />
              </div>
              <br></br>
              <button className="btn btn-primary">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</>
  );
}

export default Profile;

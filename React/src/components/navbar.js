




import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navigation.css'; // Import custom CSS file for additional styling


function Navigation() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <p className="navbar-brand" >Payment App</p>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <p className="nav-link" onClick={() => navigate('../home', { replace: true })}>Home</p>
              </li>
             
              <li className="nav-item">
                <p className="nav-link" onClick={() => navigate('../payment', { replace: true })}>Payment</p>
              </li>
              <li className="nav-item">
                <p className="nav-link" onClick={() => navigate('../notification', { replace: true })}>Notifications</p>
              </li>
              <li className="nav-item">
                <p className="nav-link" onClick={() => navigate('../settings', { replace: true })}>Settings</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;

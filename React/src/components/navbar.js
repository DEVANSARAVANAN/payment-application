import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMoneyBillAlt, faBell,faCog ,faHome } from '@fortawesome/free-solid-svg-icons';
// faBars
import './Navigation.css'; // Import custom CSS file for additional styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Navigation() {
  const navigate = useNavigate();

  return (
    <div className="navbar fixed-bottom bg-light">
      <div className="container-fluid  d-flex justify-content-around">
        <button className="btn btn-primary rounded-circle shadow" onClick={() => navigate('/profile')}>
          <FontAwesomeIcon icon={faUser} />
        </button>
        <button className="btn btn-primary rounded-circle shadow" onClick={() => navigate('/pay')}>
          <FontAwesomeIcon icon={faMoneyBillAlt} />
        </button>
        <button className="btn btn-primary rounded-circle shadow" onClick={() => navigate('/notification')}>
          <FontAwesomeIcon icon={faBell} />
        </button>
        <button className="btn btn-primary rounded-circle shadow" onClick={() => navigate('/settings')}>
          <FontAwesomeIcon icon={faCog} />
        </button>
        <button className="btn btn-primary rounded-circle shadow" onClick={() => navigate('/home')}>
          <FontAwesomeIcon icon={faHome} />
        </button>
      </div>
    </div>
  );
}

export default Navigation;

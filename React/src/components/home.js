import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './navbar';
import AnalyticalPage from './analytics';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faComments, faRobot } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Home() {

const navigate = useNavigate();


  
  return (
    <>
      <div><Navigation/></div>
      <div className="container mt-5">
        <div><AnalyticalPage/></div>
        <br />
      </div>
      <div className="position-fixed  bottom-20  end-0 m-3">
        <button onClick={()=>navigate("/chatbot")} className="btn btn-primary btn-lg shadow p-3 rounded-circle">
          <FontAwesomeIcon icon={faRobot} size="2x" />
        </button>
      </div>
    </>
  );
}

export default Home;

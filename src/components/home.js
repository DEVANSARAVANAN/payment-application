import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './navbar';
import AnalyticalPage from './analytics';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import {  faRobot } from '@fortawesome/free-solid-svg-icons';
// faComments
// import { useNavigate } from 'react-router-dom';
import Dashboard from './dashboard';

function Home() {

// const navigate = useNavigate();


  
  return (
    <>
      <div><Navigation/></div>
      <div className="container  mt-5">
        <div>
        <Dashboard/>
<AnalyticalPage/></div>
        <br />
      </div>
      <div className="position-fixed  bottom-20  end-0 m-3">
        <button onClick={()=>{
          
          window.open('https://chatgpt.com/');



        }} className="btn btn-primary btn-lg shadow p-3 rounded-circle">
          <FontAwesomeIcon icon={faRobot} size="2x" />
        </button>
      </div>
    </>
  );
}

export default Home;

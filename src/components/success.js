import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

function Success(){

    const navigate= useNavigate()

    return(
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="text-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-success display-1 mb-3" />
                <h2 className="text-success">Payment Successful!</h2>
                <p className="lead">Your payment has been processed successfully.</p>
                <button className="btn btn-primary"     onClick={() => navigate("/home")}
>Continue</button>
            </div>
        </div>
    );
}

export default Success;

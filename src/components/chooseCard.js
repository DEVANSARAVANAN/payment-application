import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

function ChoosePayment(){

   const navigate=useNavigate()

    return(
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="d-flex flex-column align-items-center">
                <button className="btn btn-primary mb-5" onClick={() => navigate("/payContact")}>
                    <FontAwesomeIcon icon={faUserFriends} className="me-2" />
                    Pay to Contact
                </button>
                <button className="btn btn-primary" onClick={() => navigate("/payment")}>
                    <FontAwesomeIcon icon={faCreditCard} className="me-2" />
                    Card Payment
                </button>
            </div>
        </div>
    );
}

export default ChoosePayment;

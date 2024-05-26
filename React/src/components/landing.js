import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faRocket, faPiggyBank, faRobot } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="landing-page">
        <header className="bg-cover bg-center text-white py-20" style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?finance")' }}>
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold">EasyPay</h1>
            <p className="text-xl mt-4">Simplify Your Payments</p>
          </div>
        </header>
        <section className="py-10 bg-gray-100">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
            <div className="flex flex-wrap justify-center">
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <FontAwesomeIcon icon={faLock} className="text-primary text-4xl mb-4" />
                  <h5 className="text-xl font-bold">Secure Payments</h5>
                  <p className="text-gray-600 mt-2">Ensuring your transactions are safe and secure.</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <FontAwesomeIcon icon={faPiggyBank} className="text-yellow-500 text-4xl mb-4" />
                  <h5 className="text-xl font-bold">Financial Goals</h5>
                  <p className="text-gray-600 mt-2">Set and track your financial goals easily.</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <FontAwesomeIcon icon={faRobot} className="text-blue-500 text-4xl mb-4" />
                  <h5 className="text-xl font-bold">Personal Assistant Bot</h5>
                  <p className="text-gray-600 mt-2">Get assistance with your payments from our AI bot.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Get Started Today!</h2>
            <button className="btn btn-primary btn-lg shadow" onClick={() => navigate("/auth")}>Continue</button>
          </div>
        </section>
        <footer className="py-4 bg-gray-800 text-white text-center">
          <div className="container mx-auto">
            <p>&copy; 2024 EasyPay. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default LandingPage;

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navigation from './navbar';
// import SetLimit from './setLimit';
// import Profile from './profilepage';

// function Settings() {
//   return (

// <>
// <div><Navigation/></div>
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-8">
//           <div className="card">
//             <div className="card-header bg-primary text-white">
//               Payment Application Settings
//             </div>
//             <div className="card-body">
//               <h2 className="card-title">General Settings</h2>
//               <br></br>
//               <div className="form-group">
//                 <label htmlFor="currency">Currency:</label>
//                 <select className="form-control" id="currency">
//                   <option value="USD">USD - United States Dollar</option>
//                   <option value="EUR">EUR - Euro</option>
//                   <option value="GBP">GBP - British Pound Sterling</option>
//                   {/* Add more options as needed */}
//                 </select>
//               </div>
//               <hr />
//               <h5 className="card-title">Security Settings</h5>
//               <div className="form-check">
//                 <input type="checkbox" className="form-check-input" id="enableTwoFactorAuth" />
//                 <label className="form-check-label" htmlFor="enableTwoFactorAuth">Enable Two-Factor Authentication</label>
//               </div>
//               <hr />
//               <h5 className="card-title">Payment Gateway Settings</h5>
//               <div className="form-group">
//                 <label htmlFor="paymentGateway">Payment Gateway:</label>
//                 <select className="form-control" id="paymentGateway">
//                   <option value="stripe">Stripe</option>
//                   <option value="paypal">PayPal</option>
//                   {/* Add more options as needed */}
//                 </select>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="stripeApiKey">Stripe API Key:</label>
//                 <input type="text" className="form-control" id="stripeApiKey" />
//               </div>
//               {/* Add more payment gateway settings as needed */}
//               <br></br>
//               <button type="submit" className="btn btn-primary">Save Changes</button>
//             </div>
            
           
//           </div>
//           <br></br>
          
//         <div className="card"><SetLimit/></div>
//         <br></br>
//           <br></br>
//           <br></br>
//           <br></br>

//         </div>
//       </div>
      
//     </div>
    

//     </>
//   );
// }

// export default Settings;




import React from 'react';
import Navigation from './navbar';
import SetLimit from './setLimit';
// import Profile from './profilepage';

function Settings() {
  return (
    <>
      <div><Navigation /></div>
      <div className="container mx-auto mt-10">
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <div className="bg-white shadow-lg rounded-lg">
              <div className="bg-blue-500 text-white p-4 rounded-t-lg">
                Payment Application Settings
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-4">General Settings</h2>
                <div className="mb-6">
                  <label htmlFor="currency" className="block text-gray-700">Currency:</label>
                  <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" id="currency">
                    <option value="USD">USD - United States Dollar</option>
                    <option value="EUR">EUR - Euro</option>
                    <option value="GBP">GBP - British Pound Sterling</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <hr className="my-6" />
                <h5 className="text-lg font-semibold mb-4">Security Settings</h5>
                <div className="mb-6">
                  <input type="checkbox" className="mr-2" id="enableTwoFactorAuth" />
                  <label htmlFor="enableTwoFactorAuth" className="text-gray-700">Enable Two-Factor Authentication</label>
                </div>
                <hr className="my-6" />
                <h5 className="text-lg font-semibold mb-4">Payment Gateway Settings</h5>
                <div className="mb-6">
                  <label htmlFor="paymentGateway" className="block text-gray-700">Payment Gateway:</label>
                  <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" id="paymentGateway">
                    <option value="stripe">Stripe</option>
                    <option value="paypal">PayPal</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="stripeApiKey" className="block text-gray-700">Stripe API Key:</label>
                  <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" id="stripeApiKey" />
                </div>
                {/* Add more payment gateway settings as needed */}
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md shadow-md hover:bg-blue-600 transition duration-200">Save Changes</button>
              </div>
            </div>
            <div className="mt-10">
              <div className="bg-white shadow-lg rounded-lg">
              <br/>
             
                <SetLimit />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;

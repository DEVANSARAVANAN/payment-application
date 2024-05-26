// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navigation from './navbar';

// function Profile() {
//   return (

// <>

//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-8">
//           <div className="card">
//             <div className="card-header bg-primary text-white">
//               User Profile
//             </div>
//             <div className="card-body">
//               <div className="form-group">
//                 <label htmlFor="fullName">Full Name:</label>
//                 <input type="text" className="form-control" id="fullName" value="John Doe" disabled />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" className="form-control" id="email" value="john@example.com" disabled />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="phoneNumber">Phone Number:</label>
//                 <input type="text" className="form-control" id="phoneNumber" value="+1234567890" disabled />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="address">Address:</label>
//                 <textarea className="form-control" id="address" rows="3" value="123 Main St, New York, USA" disabled />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="paymentMethod">Payment Method:</label>
//                 <input type="text" className="form-control" id="paymentMethod" value="Credit Card" disabled />
//               </div>
//               <br></br>
//               <button className="btn btn-primary">Edit Profile</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     <div><Navigation/></div>

// </>
//   );
// }

// export default Profile;



import React from 'react';
import Navigation from './navbar';

function Profile() {
  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="bg-blue-500 text-white p-4">
                <h2 className="text-xl font-semibold">User Profile</h2>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <label htmlFor="fullName" className="block text-gray-700">Full Name:</label>
                  <input type="text" id="fullName" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value="John Doe" disabled />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">Email:</label>
                  <input type="email" id="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value="john@example.com" disabled />
                </div>
                <div className="mb-4">
                  <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number:</label>
                  <input type="text" id="phoneNumber" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value="+1234567890" disabled />
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="block text-gray-700">Address:</label>
                  <textarea id="address" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" rows="3" value="123 Main St, New York, USA" disabled />
                </div>
                <div className="mb-4">
                  <label htmlFor="paymentMethod" className="block text-gray-700">Payment Method:</label>
                  <input type="text" id="paymentMethod" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" value="Credit Card" disabled />
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600">Edit Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10"><Navigation /></div>
    </>
  );
}

export default Profile;

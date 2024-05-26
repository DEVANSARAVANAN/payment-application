// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

// function AnalyticalPage() {
//   return (
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-8">
//           <div className="card">
//             <div className="card-header bg-primary text-white">
//               Payment Analytics
//             </div>
//             <div className="card-body">
//               <div className="row">
//                 <div className="col-md-6">
//                   <div className="card mb-4">
//                     <div className="card-body">
//                       <h5 className="card-title">Buget Fixed </h5>
//                       <h7 className="card-title">Monthly </h7>
//                       <h3 className="card-text">20,000</h3>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div className="card mb-4">
//                     <div className="card-body">
//                       <h5 className="card-title">Yet Used</h5>
//                       <h7 className="card-title">Monthly </h7>
//                       <h3 className="card-text">500</h3>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-md-6">
//                   <div className="card mb-4">
//                     <div className="card-body">
//                       <h5 className="card-title">Hangout</h5>
//                       <span class="badge badge-primary">Hangout</span>
//                       <span class="badge badge-primary">Primary</span>
//   <span class="badge badge-secondary">Secondary</span>
// <span class="badge badge-success">Success</span>
// <span class="badge badge-danger">Danger</span>
// <span class="badge badge-warning">Warning</span>
// <span class="badge badge-info">Info</span>
// <span class="badge badge-light">Light</span>
// <span class="badge badge-dark">Dark</span>
//                       <h7 className="card-title">Monthly</h7>
//                       <h3 className="card-text">1000</h3>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div className="card mb-4">
//                     <div className="card-body">
//                       <h5 className="card-title">Yet Used</h5>
//                       <h7 className="card-title">Monthly </h7>
//                       <h3 className="card-text"> 400</h3>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* Add more analytical metrics as needed */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AnalyticalPage;












import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function AnalyticalPage() {
  return (

    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card" style={{ width: '470px' }}>
            <div className="card-header bg-primary text-white">
              Payment Analytics
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4">
                    <div className="card-body">
                      <h5 className="card-title">Budget Fixed </h5>
                      
                      {/* <br></br> */}
                      <h7 className="card-title">Monthly </h7>
                      <h3 className="card-text">20,000</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-4">
                    <div className="card-body">
                      <h5 className="card-title">Yet Used</h5>
                      {/* <h7 className="card-title">Monthly </h7> */}
                      <span className="badge bg-success">Daily </span>
                      <span className="badge bg-danger">Hangout</span>
                      <span className="badge bg-warning">Travel</span>
                      <span className="badge bg-success">Food</span>
                      <h3 className="card-text">15,000</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4">
                    <div className="card-body">
                      <h5 className="card-title">Hangout</h5>
                      
                      {/* <span className="badge bg-primary">Primary</span>
                      <span className="badge bg-secondary">Secondary</span> */}
                      
                      {/* <span className="badge bg-danger">Danger</span> */}
                      
                      {/* <span className="badge bg-info">Info</span> */}
                      {/* <span className="badge bg-light text-dark">Light</span> */}
                      
                      <h7 className="card-title">Monthly</h7>
                      <h3 className="card-text">1000</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-4">
                    <div className="card-body">
                      <h5 className="card-title">Yet Used</h5>
                      {/* <h7 className="card-title">Monthly </h7> */}
                      <span className="badge bg-secondary">school friend</span>
                      <span className="badge bg-secondary">college friend</span>
                      <span className="badge bg-secondary">colleagues</span>
                      <h3 className="card-text">400</h3>
                    </div>
                  </div>
                </div>
                
              </div>
              {/* Add more analytical metrics as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticalPage;

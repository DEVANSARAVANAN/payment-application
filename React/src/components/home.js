
// import 'bootstrap/dist/css/bootstrap.min.css';

// import React from "react";

// function App() {
//   return (
//     <div>
//       {/* Navigation Bar */}
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         <div className="container">
//           <a className="navbar-brand" href="#">
//             Your Company Name
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   About
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Dummy Analytical Dashboard */}
//       <div className="container mt-5">
//         <h2 className="mb-4">Analytical Dashboard</h2>
//         <div className="row">
//           <div className="col-md-6">
//             <div className="card mb-3">
//               <div className="card-body">
//                 <h5 className="card-title">Analytics Widget 1</h5>
//                 <p className="card-text">Some quick example text to build on the card title.</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="card mb-3">
//               <div className="card-body">
//                 <h5 className="card-title">Analytics Widget 2</h5>
//                 <p className="card-text">Some quick example text to build on the card title.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scrollable Page */}
//       <div className="container mt-5">
//         <h2 className="mb-4">Scrollable Content</h2>
//         <div className="scrollable-content">
//           {/* Add your scrollable content here */}
//           <p>
//             Scrollable content goes here. You can add any text, images, or other components
//             that you want to be scrollable.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;





import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './navbar';
import AnalyticalPage from './analytics';

function Home() {
  return (
    <>
    <div><Navigation/></div>
    <div className="container mt-5">
    <div><AnalyticalPage/></div>
    <br></br>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-primary text-white">
              Welcome to Your Payment App
            </div>
            <div className="card-body">
              <p className="card-text">
                This is a simple payment application that allows you to manage your transactions conveniently and securely.
              </p>
              <ul>
                <li>Make payments</li>
                <li>Set limits</li>
                <li>Receive notifications</li>
                <li>View transaction history</li>
                {/* Add more features as needed */}
              </ul>
              <p className="card-text">
                Get started by exploring the menu options above.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </>
  );
}

export default Home;

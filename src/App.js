


// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import 'bootstrap/dist/css/bootstrap.min.css';

// // // function App() {
// // //   const [message, setMessage] = useState('');
// // //   const [responseData, setResponseData] = useState(null);



// // //   useEffect(() => {
// // //     // Fetch data from the Flask backend on component mount
// // //     axios.get('http://127.0.0.1:5000/api/data')
// // //       .then(response => {
// // //         setMessage(response.data.message);
// // //       })
// // //       .catch(error => {
// // //         console.error("There was an error fetching the data!", error);
// // //       });
// // //   }, []);

// // //   const sendData = () => {
// // //     const data = { data: message };
// // //     axios.post('http://127.0.0.1:5000/api/data', data)
// // //       .then(response => {
// // //         setResponseData(response.data.received);
// // //       })
// // //       .catch(error => {
// // //         console.error("There was an error posting the data!", error);
// // //       });
// // //   };

// // //   return (
// // //     <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
// // //     <div className="bg-white p-5 rounded shadow-sm">
// // //       <header className="text-center mb-4">
// // //         <h1 className="display-4">Colorful Page</h1>
// // //       </header>
// // //       <div className="mb-3">
// // //         <input
// // //           type="text"
// // //           className="form-control"
// // //           placeholder="Enter message"
// // //           value={message}
// // //           onChange={(e) => setMessage(e.target.value)}
// // //         />
// // //       </div>
// // //       <button
// // //         onClick={sendData}
// // //         className="btn btn-primary btn-block mb-3"
// // //       >
// // //         Send Data
// // //       </button>
// // //       {responseData && (
// // //         <p className="text-success">Response: {JSON.stringify(responseData)}</p>
// // //       )}
// // //     </div>
// // //   </div>
// // //   );
// // // }

// // // export default App;






// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // function Home() {
// //   const [message, setMessage] = useState('');
// //   const [responseData, setResponseData] = useState(null);

// //   useEffect(() => {
// //     // Fetch data from the Flask backend on component mount
// //     axios.get('http://127.0.0.1:5000/api/data')
// //       .then(response => {
// //         setMessage(response.data.message);
// //       })
// //       .catch(error => {
// //         console.error("There was an error fetching the data!", error);
// //       });
// //   }, []);

// //   const sendData = () => {
// //     const data = { data: message };
// //     axios.post('http://127.0.0.1:5000/api/data', data)
// //       .then(response => {
// //         setResponseData(response.data.received);
// //       })
// //       .catch(error => {
// //         console.error("There was an error posting the data!", error);
// //       });
// //   };

// //   return (
// //     <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
// //       <div className="bg-white p-5 rounded shadow-sm">
// //         <header className="text-center mb-4">
// //           <h1 className="display-4">Colorful Page</h1>
// //         </header>
// //         <div className="mb-3">
// //           <input
// //             type="text"
// //             className="form-control"
// //             placeholder="Enter message"
// //             value={message}
// //             onChange={(e) => setMessage(e.target.value)}
// //           />
// //         </div>
// //         <button
// //           onClick={sendData}
// //           className="btn btn-primary btn-block mb-3"
// //         >
// //           Send Data
// //         </button>
// //         {responseData && (
// //           <p className="text-success">Response: {JSON.stringify(responseData)}</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // function App() {
// //   return (
// //     <Router>
// //       <Switch>
// //         <Route path="/" exact component={Home} />
// //         {/* Add more routes here if needed */}
// //       </Switch>
// //     </Router>
// //   );
// // }

// // export default App;













// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function Home() {
//   const [message, setMessage] = useState('');
//   const [responseData, setResponseData] = useState(null);

//   useEffect(() => {
//     // Fetch data from the Flask backend on component mount
//     axios.get('http://127.0.0.1:5000/api/data')
//       .then(response => {
//         setMessage(response.data.message);
//       })
//       .catch(error => {
//         console.error("There was an error fetching the data!", error);
//       });
//   }, []);

//   const sendData = () => {
//     const data = { data: message };
//     axios.post('http://127.0.0.1:5000/api/data', data)
//       .then(response => {
//         setResponseData(response.data.received);
//       })
//       .catch(error => {
//         console.error("There was an error posting the data!", error);
//       });
//   };

//   return (
//     <div className="bg-light min-vh-100 d-flex align-items-center justify-content-center">
//       <div className="bg-white p-5 rounded shadow-sm">
//         <header className="text-center mb-4">
//           <h1 className="display-4">Colorful Page</h1>
//         </header>
//         <div className="mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Enter message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//         </div>
//         <button
//           onClick={sendData}
//           className="btn btn-primary btn-block mb-3"
//         >
//           Send Data
//         </button>
//         {responseData && (
//           <p className="text-success">Response: {JSON.stringify(responseData)}</p>
//         )}
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Route path="/" exact component={Home} />
//     </Router>
//   );
// }

// export default App;













import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home'; 
import Settings from './components/settings';
import Profile from './components/profilepage';
import Payment from './components/payment';
import LandingPage from './components/landing';
import Notifications from './components/notification';
import Navigation from './components/navbar';
import SetLimit from './components/setLimit';
import AnalyticalPage from './components/analytics';
import ChatbotPage from './components/chatbot';
import Pay from './components/pay';
import PayContact from './components/payContact';
import Dashboard from './components/dashboard';
import Signup from './components/signup';
import Auth from './components/auth';
import ChoosePayment from './components/chooseCard';
import Success from './components/success';
// import { PieChart } from '@mui/x-charts/PieChart';
// import Chart from './components/Chart';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/success" element={<Success/>} />
        <Route path="/settings" element={<Settings />} />
        {/* <Route path="/piechart" element={<Chart />} /> */}

        <Route path="/profile" element={<Profile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/navbar" element={<Navigation/>} />
        <Route path="/pay" element={<Pay/>} />
        <Route path="/payContact" element={<PayContact/>} />
        <Route path="/notification" element={<Notifications/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path='/auth' element={<Auth/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/chooseCard" element={<ChoosePayment/>} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/setLimit" element={<SetLimit />} />
        <Route path="/analytics" element={<AnalyticalPage/>} />
        <Route path="/chatbot" element={<ChatbotPage />} />

        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;




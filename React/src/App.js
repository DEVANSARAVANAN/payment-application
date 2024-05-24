// // // // import logo from './logo.svg';
// // // // import './App.css';

// // // // function App() {
// // // //   return (
// // // //     <div className="App">
// // // //       <header className="App-header">
// // // //         <img src={logo} className="App-logo" alt="logo" />
// // // //         <p>
// // // //           Edit <code>src/App.js</code> and save to reload.
// // // //         </p>
// // // //         <a
// // // //           className="App-link"
// // // //           href="https://reactjs.org"
// // // //           target="_blank"
// // // //           rel="noopener noreferrer"
// // // //         >
// // // //           Learn React
// // // //         </a>
// // // //       </header>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;






// // // import React from 'react';
// // // import './App.css';
// // // import FinancialAdvice from './FinancialAdvice';

// // // function App() {
// // //     return (
// // //         <div className="App">
// // //             <FinancialAdvice />
// // //         </div>
// // //     );
// // // }

// // // export default App;






// // import React, { useState, useEffect } from 'react';
// // import './App.css';
// // import FinancialAdvice from './FinancialAdvice';
// // import Auth from './Auth';

// // function App() {
// //     const [token, setToken] = useState(localStorage.getItem('token'));

// //     useEffect(() => {
// //         if (token) {
// //             localStorage.setItem('token', token);
// //         } else {
// //             localStorage.removeItem('token');
// //         }
// //     }, [token]);

// //     return (
// //         <div className="App">
// //             {token ? (
// //                 <FinancialAdvice token={token} />
// //             ) : (
// //                 <Auth setToken={setToken} />
// //             )}
// //         </div>
// //     );
// // }

// // export default App;




// import React, { useState, useEffect } from 'react';
// import './App.css';
// import FinancialAdvice from './FinancialAdvice';
// import Auth from './Auth';

// function App() {
//     const [token, setToken] = useState(localStorage.getItem('token'));

//     useEffect(() => {
//         if (token) {
//             localStorage.setItem('token', token);
//         } else {
//             localStorage.removeItem('token');
//         }
//     }, [token]);

//     return (
//         <div className="App">
//             {token ? (
//                 <FinancialAdvice token={token} />
//             ) : (
//                 <Auth setToken={setToken} />
//             )}
//         </div>
//     );
// }

// export default App;







import React, { useState, useEffect } from 'react';
import './App.css';
import FinancialAdvice from './FinancialAdvice';
import Auth from './Auth';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

    return (
        <div className="App">
            {token ? (
                <FinancialAdvice token={token} />
            ) : (
                <Auth setToken={setToken} />
            )}
        </div>
    );
}

export default App;

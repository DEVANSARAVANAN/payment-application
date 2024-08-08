// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navigation from './navbar';

// function ChatbotPage() {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   const handleMessageSubmit = (e) => {
//     e.preventDefault();
//     if (newMessage.trim() !== '') {
//       setMessages([...messages, { text: newMessage, sender: 'user' }]);
//       // You can add logic here to handle responses from the chatbot
//       setNewMessage('');
//     }
//   };

//   return (
// <>
// <div><Navigation/></div>
//     <div className="container mt-5">
//       <div className="row justify-content-center">
//         <div className="col-md-8">
//           <div className="card">
//             <div className="card-header bg-primary text-white">
//               Chat with our Virtual Assistant
//             </div>
//             <div className="card-body">
//               <div className="chat-box">
//                 {messages.map((message, index) => (
//                   <div key={index} className={`message ${message.sender}`}>
//                     {message.text}
//                   </div>
//                 ))}
//               </div>
//               <form onSubmit={handleMessageSubmit} className="mt-3">
//                 <div className="input-group">
//                   <input
//                     type="text"
//                     className="form-control"
//                     placeholder="Type your message here..."
//                     value={newMessage}
//                     onChange={(e) => setNewMessage(e.target.value)}
//                   />
//                   <div className="input-group-append">
//                     <button type="submit" className="btn btn-primary">Send</button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//     </>
//   );
// }

// export default ChatbotPage;
import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './navbar';
import './ChatBotPage.css'; // Make sure to create this CSS file

function ChatbotPage() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const chatBoxRef = useRef(null);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() !== '') {
      setMessages([{ text: newMessage, sender: 'user' }, ...messages]);
      setNewMessage('');
      setTimeout(() => {
        setMessages((prevMessages) => [
          { text: 'This is a response from the chatbot.', sender: 'bot' },
          ...prevMessages
        ]);
      }, 1000); // Simulate a delay for chatbot response
    }
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = 0;
    }
  }, [messages]);

  return (
    <>
      <div><Navigation /></div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header bg-primary text-white">
                Chat with our Virtual Assistant
              </div>
              <div className="card-body">
                <div className="chat-box" ref={chatBoxRef}>
                  {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                      {message.text}
                    </div>
                  ))}
                </div>
              </div>
              <form onSubmit={handleMessageSubmit} className="input-form">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type your message here..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-primary">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatbotPage;


// src/components/StoreData.js
import React, { useState,useEffect } from 'react';
import { firestore, auth } from '../config/firebaseConfig'; // Import Firestore instance
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

function Signup() {

  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [user_name, setUserName] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);


  const handleAddItem = async (e) => {

    if (!currentUser) {
      console.error("No user is signed in.");
      return;
    }
    e.preventDefault(); // Prevent form submission

    try {
      // Add item to Firebase collection
      await firestore.collection("users").doc(currentUser.uid).set({
        user_name: user_name,
        mobile: mobile,
      });

      // Navigate to profile page after successfully adding the item
      navigate("/home");

      // Clear input fields after adding item
      setUserName("");
      setMobile("");

      console.log("Item added successfully!");
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <form className="space-y-4" onSubmit={handleAddItem}>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="User Name"
            value={user_name}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Mobile No"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;

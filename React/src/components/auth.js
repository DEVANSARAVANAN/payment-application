import React, { useEffect, useState } from 'react';
import { auth, provider } from '../config/firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { Navigate } from 'react-router-dom';

const Auth = () => {
  const [value, setValue] = useState("");
  const [uid, setUid] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("uid", data.user.uid);
      setUid(data.user.uid)
      setRedirect(true);
      console.log(uid)
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem('email'));
    setUid(localStorage.getItem('uid'));
  }, []);

  return (
    <div>
      {value ? <Navigate to="/home" /> :
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm text-center">
            <h1 className="text-2xl font-bold mb-4">Sign In with Google</h1>
            <p className="text-gray-600 mb-6">Access your account using Google authentication.</p>
            <button
              onClick={handleClick}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              Sign in with Google
            </button>
          </div>
        </div>
      }
      {redirect && <Navigate to="/signup" />}
    </div>
  );
};

export default Auth;

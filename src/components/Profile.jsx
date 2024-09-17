import React, { useEffect, useState } from 'react';
import { auth, db } from '../auth/firebase';
import { getDoc, doc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const Profile = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log(docSnap.data());
        } else {
          console.log("No such document!");
        }
      }
    });
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
      toast.success("Signed out successfully!", { position: "top-center" });
    } catch (error) {
      console.log("Error logging out: ", error);
    }
  };

  const handleEdit = () => {
    navigate("/Edit");
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black'>
      <ToastContainer />
      <div className='bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 relative'>
        {
          userDetails ? (
            <div className='flex flex-col justify-center items-center text-center'>
              <h3 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mb-4'>Welcome, {userDetails.name}</h3>
              <div className='text-gray-700'>
                <p className='text-lg font-semibold'>Email: {userDetails.email}</p>
                <p className='text-lg font-semibold'>Name: {userDetails.name}</p>
              </div>
              <div className='flex gap-4 mt-6'>
                <button 
                  className='bg-gradient-to-r from-red-400 to-red-600 text-white py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105'
                  onClick={handleLogout}>
                  LogOut
                </button>
                <button 
                  className='bg-gradient-to-r from-green-400 to-green-600 text-white py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-105'
                  onClick={handleEdit}>
                  Edit
                </button>
              </div>
            </div>
          ) : (
            <div className='flex justify-center items-center'>
              <p className='text-gray-500 text-lg'>Loading...</p>
            </div>
          )
        }
      </div>
    </div>
  );
};

import React, { useEffect, useState } from 'react'
import { auth, db } from '../auth/firebase';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const EditData = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                auth.onAuthStateChanged(async (user) => {
                    if (user) {
                        const docRef = doc(db, "Users", user.uid);
                        const docSnap = await getDoc(docRef);
                        if (docSnap.exists()) {
                            const userData = docSnap.data();
                            setName(userData.name || '');
                            setEmail(userData.email || '');
                            setPassword(userData.password || '');
                            setUserId(user.uid);
                        } else {
                            console.log("No such document!");
                        }
                    }
                });
            } catch (error) {
                console.log("Error fetching user data: ", error);
                toast.error("Error fetching user data!");
            }
        };

        fetchUserData();
    }, []);

    const editFireData = async () => {
        const updateData = doc(db, "Users", userId);
        await updateDoc(updateData, { name: name, email: email, password: password });
        toast.success("Edited Successfully!!", {
            position: "top-center"
        })
        navigate('/');
    };

    return (
        <div className='h-screen bg-gradient-to-b from-gray-700 via-gray-900 to-black flex justify-center items-center p-6'>
            <ToastContainer />
            <div className='bg-white rounded-lg shadow-2xl p-8 w-full max-w-lg'>
                <div className='text-center mb-6'>
                    <h1 className='text-4xl font-bold text-orange-500 mb-2 animate-bounce'>Welcome to the Edit Center</h1>
                    <p className='text-gray-600'>Here, you can update your database information.</p>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-3'>
                        <label className='text-gray-500'>New Name</label>
                        <input
                            type="text"
                            placeholder='Enter new Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='border border-gray-300 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-orange-500'
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='text-gray-500'>New Email</label>
                        <input
                            type="email"
                            placeholder='Enter New Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='border border-gray-300 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-orange-500'
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='text-gray-500'>New Password</label>
                        <input
                            type="text"
                            placeholder='Enter New Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='border border-gray-300 rounded-full p-3 focus:outline-none focus:ring-2 focus:ring-orange-500'
                        />
                    </div>
                    <button
                        className='bg-gradient-to-r from-green-400 to-green-600 text-white py-3 rounded-full hover:shadow-lg transition duration-300 ease-in-out hover:scale-105'
                        onClick={editFireData}
                    >
                        Submit
                    </button>
                </div>

            </div>
        </div>
    );
};

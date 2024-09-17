import React, { useState, useEffect } from 'react';
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../auth/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addCart, removeCart } from './features/CartSlice';

export const NavIcons = () => {
    const [isSearch, setIsSearch] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [isRegister, setIsRegister] = useState(false);
    const [inemail, setInemail] = useState("");
    const [inpass, setInpass] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [isCartOpen, setIsCartOpen] = useState(false);

    const dispatch = useDispatch();

    const cartIn = useSelector(state => state.cart);

    console.log(cartIn);

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    name: name,
                    password: password,
                });
                setName("");
                setEmail("");
                setPassword("");
                setIsRegister(false);
                setIsLogin(true);
            }
            console.log("Registered Successfully");
            toast.success("Registered Successfully!!", {
                position: "top-center"
            })
        } catch (error) {
            console.log(error.message);
            toast.success(error.message, {
                position: "bottom-center"
            })
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, inemail, inpass);
            console.log("User Loggedin successfull");
            navigate("/Profile");
            toast.success("LoggedIn Successfully!!", {
                position: "top-center"
            })
        } catch (error) {
            console.log(error.message);
            toast.success(error.message, {
                position: "bottom-center"
            })
        }
    }

    const products = [
        {
            id: 1,
            title: 'square-textured-striped',
            price: 130.00,
            oldPrice: 150.00,
            rating: 4.5,
            image1: 'https://umino-demo.myshopify.com/cdn/shop/products/fashion_products_21_1.jpg?v=1680666321&width=600',
        },
        {
            id: 2,
            title: 'colorful-wind-coats',
            price: 90.00,
            oldPrice: 120.00,
            rating: 4.0,
            image1: 'https://umino-demo.myshopify.com/cdn/shop/products/fashion_products_1_1_00ef18a3-976e-488e-a83a-defd8515ec61.jpg?v=1679883409&width=600',
        },
        {
            id: 3,
            title: 'short-sleeve-sweater',
            price: 75.00,
            oldPrice: 100.00,
            rating: 3.5,
            image1: 'https://umino-demo.myshopify.com/cdn/shop/products/fashion_products_7_1_6858d5e7-b1a2-4f31-92f2-16681ef4dcd4.jpg?v=1679883456&width=600',
        },
        {
            id: 4,
            title: 'summer-oversized-shirt',
            price: 150.00,
            oldPrice: 180.00,
            rating: 4.0,
            image1: 'https://umino-demo.myshopify.com/cdn/shop/products/fashion_products_20_1_2dcbacf8-0e0b-4bc5-9c57-abeaffbbc1f3.jpg?v=1679883014&width=600',
        },
    ];

    useEffect(() => {
        if (isSearch || isLogin || isRegister) {
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto'; // Clean up
        };
    }, [isSearch, isLogin, isRegister]);

    const quantIn = (item) => {
        console.log(item);
        dispatch(addCart(item));
    };

    const quantDec = (item) => {
        dispatch(removeCart(item.id))
    };

    return (
        <>
            {/* Background overlay for modals */}
            {(isLogin || isRegister) && <div className='fixed top-0 left-0 w-full h-screen bg-black/50 z-[49]' onClick={() => { setIsLogin(false); setIsRegister(false); }}></div>}

            {/* Nav Icons */}
            <div className='relative'>
                <ToastContainer />
                <div className='flex gap-4 items-center'>
                    <IoSearch size={22} className='hover:text-red-500 hover:cursor-pointer' onClick={() => setIsSearch(true)} />
                    <FaRegUser size={20} className='hover:text-red-500 hover:cursor-pointer' onClick={() => setIsLogin(true)} />
                    <FiClock size={22} className='hover:text-red-500 hover:cursor-pointer' />
                    <FaRegHeart size={20} className='hover:text-red-500 hover:cursor-pointer' />
                    <IoCartOutline size={22} className='hover:text-red-500 hover:cursor-pointer' onClick={() => setIsCartOpen(true)} />
                </div>



                {/* Cart Side Drawer */}
                {isCartOpen && (
                    <div
                        className={`fixed top-0 right-0 w-[350px] h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    >
                        <div className="flex justify-between p-4 border-b border-gray-200">
                            <h2 className="text-xl font-semibold">Your Cart</h2>
                            <RxCross2 size={24} className="hover:text-red-500 cursor-pointer" onClick={() => setIsCartOpen(false)} />
                        </div>
                        <div className="p-4">
                            {cartIn && cartIn.map((item) => (
                                <div key={item.id}>
                                    <div className="flex items-center justify-between mb-4">
                                        <img src={item.image1} alt={item.title} className="w-[60px] h-[60px] object-cover rounded" />
                                        <div>
                                            <h3 className="font-semibold">{item.title}</h3>
                                            <div className='flex'>
                                                {Array(Math.floor(item.rating)).fill().map((_, i) => (
                                                    <IoStarSharp key={i} />
                                                ))}
                                                {item.rating % 1 !== 0 && <IoIosStarHalf />}
                                            </div>
                                            <p className="text-gray-600">${item.price}</p>
                                            <p className="text-gray-600">Quantity: {item.quantity}</p>
                                        </div>
                                        <button
                                            onClick={() => dispatch(removeCart(item.id))}
                                            className="text-red-500 hover:text-red-600"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <button className='w-14 bg-gray-300 font-semibold text-xl' onClick={() => { quantIn(item); }}>+</button>
                                        <p className='w-14 bg-gray-200 text-center'>{item.quantity}</p>
                                        <button className='w-14 bg-gray-300 font-semibold text-xl' onClick={() => { quantDec(item); }}>-</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 border-t border-gray-200">
                            <button className="w-full bg-black text-white p-3 rounded-full">Checkout</button>
                        </div>
                    </div>
                )}




                {/* Search Modal */}
                {isSearch && (
                    <div className='fixed top-0 left-0 w-screen h-full bg-gray-100 z-50'>
                        <div className='absolute top-4 right-7 cursor-pointer'>
                            <RxCross2 size={24} className='hover:text-red-500 opacity-80' onClick={() => setIsSearch(false)} />
                        </div>
                        <div className='flex flex-col items-center justify-center mt-20'>
                            <h2 className='text-4xl font-bold mb-6'>Search Our Site</h2>
                            <div className='relative flex flex-col gap-4'>
                                <input
                                    type="text"
                                    placeholder="I'm looking for..."
                                    className='w-[650px] h-[50px] p-4 border border-gray-700 rounded-full shadow-sm'
                                />
                                <IoIosSearch className='absolute top-3 right-4' size={25} />
                                <p className='opacity-[0.8]'>Quick Search : Shirt, Dress, Sweater</p>
                            </div>
                        </div>
                        <div className='relative'>
                            <h2 className='absolute left-5 top-5 text-[20px] font-semibold'>Popular Products</h2>
                            <div className='flex justify-between m-3'>
                                {products.map((product) => (
                                    <div key={product.id} className="flex flex-col items-center p-4 mt-10">
                                        <img src={product.image1} alt={product.title} className="w-[150px] h-[150px] object-cover rounded-lg" />
                                        <h3 className="mt-2 font-semibold">{product.title}</h3>
                                        <p className="text-gray-500">${product.price}</p>
                                        <div className='flex w-[65px]'>
                                            {Array(Math.floor(product.rating)).fill().map((_, i) => (
                                                <IoStarSharp key={i} />
                                            ))}
                                            {product.rating % 1 !== 0 && <IoIosStarHalf />}
                                        </div>
                                        <p className='text-[15px] flex gap-2'>
                                            <span className='text-red-600'>${product.price.toFixed(2)}</span>
                                            <span className='line-through opacity-55'>${product.oldPrice.toFixed(2)}</span>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Login/Register Modals */}
                {(isLogin || isRegister) && (
                    <div className='opacity-100 fixed top-[50px] left-0 right-0 mx-auto w-[80%] h-[80%] bg-white z-50'>
                        <div className='absolute top-4 right-7 cursor-pointer'>
                            <RxCross2 size={24} className='hover:text-red-500' onClick={() => { setIsLogin(false); setIsRegister(false); }} />
                        </div>

                        {isLogin ? (
                            <div>
                                <h3 className='mt-20 m-10 text-2xl font-semibold'>Login</h3>
                                <div className='flex flex-col justify-center items-center gap-8'>
                                    <input type="email" placeholder='Your email*' className='w-[500px] border border-gray-400 h-[50px] p-4 rounded-full' value={inemail} onChange={(e) => setInemail(e.target.value)} required />
                                    <input type="password" placeholder='Password*' className='w-[500px] border border-gray-400 h-[50px] p-4 rounded-full' value={inpass} onChange={(e) => setInpass(e.target.value)} required />
                                </div>
                                <p className='opacity-80 text-gray-700 m-4'>Forgot your password?</p>
                                <div className='flex flex-col justify-center items-center gap-5'>
                                    <button className='bg-black text-white w-[500px] h-[50px] p-4 rounded-full' onClick={handleSubmit}>LogIn</button>
                                    <span className='font-semibold hover:bg-black hover:text-white w-[500px] border border-gray-400 h-[50px] p-4 rounded-full cursor-pointer' onClick={() => { setIsLogin(false); setIsRegister(true); }}>
                                        Create Account
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <h2 className='mt-20 m-10 text-2xl font-bold'>Register</h2>
                                <div className='flex flex-col justify-center items-center gap-8'>
                                    <input type="text" placeholder='Full Name*' className='w-[500px] border border-gray-400 h-[50px] p-4 rounded-full' value={name} onChange={(e) => setName(e.target.value)} required />
                                    <input type="email" placeholder='Your email*' className='w-[500px] border border-gray-400 h-[50px] p-4 rounded-full' value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    <input type="password" placeholder='Password*' className='w-[500px] border border-gray-400 h-[50px] p-4 rounded-full' value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-5 mt-5'>
                                    <button className='bg-red-500 text-white w-[500px] h-[50px] p-4 rounded-full' onClick={handleRegister}>Register</button>
                                    <p className='text-sm mt-2'>
                                        Already have an account?{' '}
                                        <span className='text-blue-500 cursor-pointer' onClick={() => { setIsRegister(false); setIsLogin(true); }}>
                                            Login
                                        </span>
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

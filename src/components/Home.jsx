import React, { useEffect, useState } from 'react'

import { IoMdArrowDropdown } from "react-icons/io";
import { Carousels } from './Carousels';
import { Slider } from './Trends';
import { NewArrivals } from './NewArrivals';
import { CustomerSay } from './CustomerSay';
import { ShopByGram } from './ShopByGram';
import { Info } from './Info';
import { Footer } from './Footer';
import { TbArrowBadgeUpFilled } from "react-icons/tb";
import { DropDown } from './DropDown';
import HomeStyle from "../styles/HomeStyle.css"
import { NavIcons } from './NavIcons';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (scrollTop / docHeight) * 100;
            setScrollPercent(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const buttonOpacity = scrollPercent < 80 ? scrollPercent / 80 : 1;

    return (
        <div>
            <ToastContainer />
            <div
                className='sticky top-20 z-10'
                style={{ opacity: buttonOpacity, transition: 'opacity 0.3s ease' }}
            >
                <button
                    className='border rounded-[50%] p-2 bg-black'
                    style={{ color: 'white', backgroundColor: `rgba(0, 0, 0, ${buttonOpacity})` }}
                    onClick={handleScrollToTop}
                >
                    <TbArrowBadgeUpFilled />
                </button>
            </div>
            <div className='flex justify-between mt-0 m-2 items-center pl-3 pr-3  text-center '>
                <div className='flex gap-3 font-mono'>
                    <p className='flex items-center'>INDIA (IND) <IoMdArrowDropdown /></p>
                    <p className='flex items-center'>English <IoMdArrowDropdown /></p>
                </div>
                <div className='text-center flex flex-col items-center'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_tiOElKFKwwfVbwXSQKo9t8WKtzZ42_zhaA&s" alt="LtRoz" width={50} />
                </div>
                <NavIcons />
            </div>
            <hr className="h-px mt-8 bg-gray-200 border-0 dark:bg-gray-300" />
            <DropDown />
            <Carousels />
            <div className='flex flex-col justify-center items-center mt-20 gap-2'>
                <h1 className='text-[35px] '>Featured Collections</h1>
                <p className='text-[rgb(161, 163, 166)] tracking-wider text-[13px] font-medium'>Upgrade your style with our curated sets. Choose confidence, embrace your unique look.</p>
            </div>

            <div className='flex mt-8 justify-center items-center gap-5 '>
                <div className='relative h-[694px] hover:cursor-pointer' onClick={() => navigate('/Clothing')}>
                    <div className='bg-[rgb(237, 238, 240)] w-[430px] h-[694px] overflow-hidden border rounded-md '>
                        <img src="https://umino-demo.myshopify.com/cdn/shop/files/main-cate-1.jpg?v=1698809240" className='w-max scale-100 hover:scale-110 transition ease-in-out duration-300' />

                    </div>
                    <p className='border w-48 absolute bottom-7 bg-white rounded-full left-28 p-3 text-center font-medium '>Clothing</p>
                </div>

                <div className=' h-[694px] flex flex-col gap-8 overflow-hidden '>
                    <div className='  hover:cursor-pointer bg-[rgb(237, 238, 240)] w-[410px] h-[330px] overflow-hidden  rounded-md relative'>
                        <div className='bg-[rgb(237, 238, 240)] w-[430px] h-[694px] overflow-hidden border rounded-md'>
                            <img src="https://umino-demo.myshopify.com/cdn/shop/files/main-cate-2.jpg?v=1698809266" className='w-max scale-100 hover:scale-110 transition ease-in-out duration-300' />

                        </div>

                        <p className='border w-48 absolute bottom-7 bg-white rounded-full left-28 p-3 text-center font-medium'>Sunglasses</p>
                    </div>

                    <div className=' hover:cursor-pointer bg-[rgb(237, 238, 240)] w-[410px] h-[330px] overflow-hidden border rounded-md relative'>
                        <div className='bg-[rgb(237, 238, 240)] w-[430px] h-[694px] overflow-hidden border rounded-md'>
                            <img src="https://umino-demo.myshopify.com/cdn/shop/files/main-cate-3.jpg?v=1698809278" className='w-max scale-100 hover:scale-110 transition ease-in-out duration-300' />
                        </div>
                        <p className='border w-48 absolute bottom-7 bg-white rounded-full left-28 p-3 text-center font-medium'>Bags</p>
                    </div>
                </div>
                <div className=' hover:cursor-pointer relative h-[694px]'>
                    <div className='bg-[rgb(237, 238, 240)] w-[430px] h-[694px] overflow-hidden  rounded-md'>
                        <img src="https://umino-demo.myshopify.com/cdn/shop/files/collection-main-demo-shoes.jpg?v=1699524745&width=535" className='w-max scale-100 hover:scale-110 transition ease-in-out duration-300' />

                    </div>
                    <p className=' w-48 absolute bottom-7 bg-white rounded-full left-28 p-3 text-center font-medium '>Sneaker</p>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center mt-20 gap-2'>
                <h1 className='text-[35px] '>Trending this Week</h1>
                <p className='text-[rgb(161, 163, 166)] tracking-wider text-[13px] font-medium'>Here’s some of our most popular products people are in love with.</p>
            </div>
            <Slider />

            <div className='mt-10 flex justify-center gap-8'>
                <div className='relative h-[532px] '>
                    <div className='bg-[rgb(237, 238, 240)] w-[400px] h-auto overflow-hidden border rounded-md animated-line'>
                        <img src="https://umino-demo.myshopify.com/cdn/shop/files/main-banner-1.jpg?v=1698726656"
                            className='w-max scale-100 hover:scale-110 transition ease-in-out duration-300'
                        />
                    </div>
                    <p className='absolute bottom-7 left-16 p-3 font-medium opacity-80'>
                        ONLINE EXCLUSIVE <br />
                        <span className='text-4xl'>Oversized Shirt</span> <br />
                        <span className=' relative '>SHOP THE LOOK</span>
                    </p>
                </div>

                <div className='relative h-[532px] '>
                    <div className='bg-[rgb(237, 238, 240)] w-[400px] h-auto overflow-hidden border rounded-md animated-line'>
                        <img src="https://umino-demo.myshopify.com/cdn/shop/files/main-banner-2.jpg?v=1698726545"
                            className='w-max scale-100 hover:scale-110 transition ease-in-out duration-300'
                        />
                    </div>
                    <p className='absolute bottom-7 left-16 p-3  font-medium opacity-80'>
                        BEST SELLERS<br />
                        <span className='text-4xl'>Unique SS'23</span> <br />
                        <span className='relative'>SHOP THE LOOK</span>
                    </p>
                </div>

                <div className='relative h-[532px] '>
                    <div className='bg-[rgb(237, 238, 240)] w-[400px] h-auto overflow-hidden border rounded-md animated-line'>
                        <img src="https://umino-demo.myshopify.com/cdn/shop/files/main-banner-3_1.jpg?v=1698997619"
                            className='w-max scale-100 hover:scale-110 transition ease-in-out duration-300'
                        />
                    </div>
                    <p className='absolute bottom-7 left-16 p-3  font-medium opacity-80'>
                        Limited Edition <br />
                        <span className='text-4xl '>Autumn Trending</span> <br />
                        <span className=' relative'>SHOP THE LOOK</span>
                    </p>
                </div>

            </div>

          
            <div className='flex flex-col justify-center items-center mt-20 gap-2'>
                <h1 className='text-[35px] tracking-wider font-semibold opacity-85'>New Arrivals</h1>
                <p className='text-[rgb(161, 163, 166)] tracking-wider text-[14px] opacity-80 font-medium'>Find the top most popular items in Umino best sellers.</p>
            </div>

            <NewArrivals />
            <CustomerSay />
            <ShopByGram />
            <Info />
            <Footer />
        </div>
    )
}

import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { IoLogoTiktok } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

export const Info = () => {
    return (
        <div>
            <div className='mt-20 m-6 flex justify-around '>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_tiOElKFKwwfVbwXSQKo9t8WKtzZ42_zhaA&s" alt="LtRoz" width={50} className='border rounded-md' />
                    <div className='gap-1 flex flex-col mt-4'>
                        <p className='tracking-tighter text-slate-700 font-medium text-[15px]'> F 177 4th Floor, Sector 74, Punjab 160070</p>
                        <p className='tracking-tighter text-slate-700 font-medium text-[15px]'>91 7814537847</p>
                        <p className='tracking-tighter text-slate-700 font-medium text-[15px]'>sales@aronwebsolutions.com</p>
                    </div>
                    <div className='flex mt-4 gap-6'>
                        <BsInstagram className='border rounded-[50%] border-gray-600 h-8 w-8 p-2 opacity-[0.8] hover:opacity-[1] hover:cursor-pointer' />
                        <IoLogoTiktok className='border rounded-[50%] border-gray-600 h-8 w-8 p-2 opacity-[0.8] hover:opacity-[1] hover:cursor-pointer'/>
                        <IoLogoYoutube className='border rounded-[50%] border-gray-600 h-8 w-8 p-2 opacity-[0.8] hover:opacity-[1] hover:cursor-pointer'/>
                        <FaXTwitter className='border rounded-[50%] border-gray-600 h-8 w-8 p-2 opacity-[0.8] hover:opacity-[1] hover:cursor-pointer'/>
                        <FaFacebookF className='border rounded-[50%] border-gray-600 h-8 w-8 p-2 opacity-[0.8] hover:opacity-[1] hover:cursor-pointer'/>
                    </div>
                </div>

                <div className='text-center'>
                    <h2 className='font-semibold text-[20px]'>Company</h2>
                    <div className='mt-4 flex flex-col gap-3 text-gray-700 font-medium'>
                        <p className='text-[14px]'>About Us</p>
                        <p className='text-[14px]'>Our Stores</p>
                        <p className='text-[14px]'>Contact Us</p>
                        <p className='text-[14px]'>Size Guide</p>
                        <p className='text-[14px]'>My Account</p>
                    </div>
                </div>

                <div className='text-center'>
                    <h2 className='font-semibold text-[20px]'>Customer Service</h2>
                    <div className='mt-4 flex flex-col gap-3 text-gray-700 font-medium'>
                        <p className='text-[14px]'>Privacy Policy</p>
                        <p className='text-[14px]'>Refund Policy</p>
                        <p className='text-[14px]'>Shipping & Return</p>
                        <p className='text-[14px]'>Term & Conditions</p>
                        <p className='text-[14px]'>Advanced Search</p>
                        <p className='text-[14px]'>Theme FAQs</p>
                        <p className='text-[14px]'>Store Locations</p>
                    </div>
                </div>

                <div className='flex gap-2 flex-col'>
                    <h2 className='font-semibold text-[20px]'>Sign Up to Newsletter</h2>
                    <div className='mt-4 flex flex-col gap-3 text-gray-700 font-medium tracking-wide'>
                        <p className='text-[14px]'>Enter your email address to get $10 off your first order and <br /> free shipping.Updates information on Sales and Offers.</p>
                    </div>
                    <div className='mt-8 flex gap-4'>
                        <input type="text" placeholder='Enter your email...' className='border h-[50px] rounded-full p-4 border-gray-500'/>
                        <button className='text-white text-[14px] tracking-wide font-medium bg-black h-[50px] rounded-full w-32'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { blog, bootsale, headerdata, page, productDetails, productFeatures, thumbnails } from "../data/headerdata";
import { shopdata } from '../data/headerdata';
import { shoppage } from '../data/headerdata';
import { productLayout } from '../data/headerdata';
import { BiMessageSquare } from "react-icons/bi";

export const DropDown = () => {
    const [isHomeDropdownOpen, setHomeDropdownOpen] = useState(false);
    const [isShopDropdownOpen, setShopDropdownOpen] = useState(false);
    const [isProductDropdownOpen, setProductDropdownOpen] = useState(false);
    const [isBlogDropdownOpen, setBlogDropdownOpen] = useState(false);
    const [isPageDropdownOpen, setPageDropdownOpen] = useState(false);

    const handleHomeMouseEnter = () => {
        setHomeDropdownOpen(true);
    };

    const handleHomeMouseLeave = () => {
        setHomeDropdownOpen(false);
    };

    const handleShopMouseEnter = () => {
        setShopDropdownOpen(true);
    };

    const handleShopMouseLeave = () => {
        setShopDropdownOpen(false);
    };
    const handleProductMouseEnter = () => {
        setProductDropdownOpen(true);
    };

    const handleProductMouseLeave = () => {
        setProductDropdownOpen(false);
    };
    const handleBlogMouseEnter = () => {
        setBlogDropdownOpen(true);
    };

    const handleBlogMouseLeave = () => {
        setBlogDropdownOpen(false);
    };
    const handlePageMouseEnter = () => {
        setPageDropdownOpen(true);
    };

    const handlePageMouseLeave = () => {
        setPageDropdownOpen(false);
    };

    return (
        <div className="relative">
            <div className='flex justify-center gap-14 font-semibold sticky top-0 z-[1] bg-white p-5'>


                <div onMouseEnter={handleHomeMouseEnter} onMouseLeave={handleHomeMouseLeave}>
                    <button
                        id="dropdownHoverButton"
                        className="text-black flex items-center hover:text-red-400"
                        type="button"
                    >
                        Home
                        <IoMdArrowDropdown />
                    </button>

                    {isHomeDropdownOpen && (
                        <div
                            id="dropdownHover"
                            className=" z-10 absolute left-0 w-screen h-fit bg-white rounded-lg shadow w-30 text-black hover:transition hover:ease-in-out hover:duration-[1000ms]"
                        >
                            <div className='flex '>
                                <div className='flex gap-5 pt-2 w-screen h-[50%] container justify-center flex-wrap '>
                                    {headerdata.map((data, id) => {
                                        return (
                                            <div key={id} className='w-64 overflow-hidden border rounded-md'>
                                                <img src={data} className='scale-100 hover:scale-110' alt={`header-${id}`} />
                                            </div>
                                        );
                                    })}
                                </div>


                            </div>
                        </div>
                    )}
                </div>

                {/*Shop*/}

                <div onMouseEnter={handleShopMouseEnter} onMouseLeave={handleShopMouseLeave}>
                    <button
                        id="dropdownHoverButton"
                        className="text-black flex items-center hover:text-red-400"
                        type="button"
                    >
                        Shop
                        <IoMdArrowDropdown />
                    </button>


                    {isShopDropdownOpen && (
                        <div
                            id="dropdownHover"
                            className=" flex justify-around  z-[1] absolute left-0 w-screen h-fit bg-white rounded-lg shadow text-black hover:transition hover:ease-in-out hover:duration-[1000ms]"
                        >

                            <div className='z-10 flex flex-col gap-5 p-2 justify-between items-center flex-wrap mt-6'>
                                {shopdata.map((data, id) => {
                                    return (
                                        <div key={id} className='mt-1 duration-700 hover:pl-2'>
                                            {id === 0 ? (
                                                <h3 className='font-bold'>{data}</h3>
                                            ) : (
                                                <p className='text-[14px] opacity-[0.9]'>{data}</p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className='flex flex-col gap-5 p-2 flex-wrap mt-6'>
                                {shoppage.map((data, id) => {
                                    return (
                                        <div key={id} className='mt-1 duration-700 hover:pl-2'>
                                            {id === 0 ? (
                                                <h3 className='font-bold'>{data}</h3>
                                            ) : (
                                                <p className='text-[14px] opacity-[0.9]'>{data}</p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className='p-2 mt-6 relative '>
                                <div className='hover:cursor-pointer overflow-hidden'>
                                    <img src="https://umino-demo.myshopify.com/cdn/shop/files/collection-banner.png?v=1679891172&width=1500" className='rounded-md hover:scale-110 hover:transition hover:ease-in-out hover:duration-500 duration-500' />
                                </div>
                                <button className=' absolute bg-white bottom-10 left-20 rounded-full w-36 p-2'>Underwear</button>
                            </div>

                            <div className='p-2 mt-6 relative '>
                                <div className='hover:cursor-pointer overflow-hidden w-[270px]'>
                                    <img src="https://umino-demo.myshopify.com/cdn/shop/collections/collection2.jpg?v=1680244866&width=1500" className='rounded-md hover:scale-110 hover:transition hover:ease-in-out hover:duration-500 duration-500' />
                                </div>
                                <button className='absolute bg-white bottom-10 left-20 rounded-full w-36 p-2'>Blazers</button>
                            </div>

                        </div>
                    )}
                </div>

                {/*Product*/}

                <div onMouseEnter={handleProductMouseEnter} onMouseLeave={handleProductMouseLeave}>
                    <button
                        id="dropdownHoverButton"
                        className="text-black flex items-center hover:text-red-400"
                        type="button"
                    >
                        Product
                        <IoMdArrowDropdown />
                    </button>


                    {isProductDropdownOpen && (
                        <div
                            id="dropdownHover"
                            className=" flex justify-around  z-[1] absolute left-0 w-screen h-fit bg-white rounded-lg shadow w-30 text-black hover:transition hover:ease-in-out hover:duration-[1000ms]"
                        >

                            <div className='flex flex-col gap-5 p-2 justify-between items-center flex-wrap mt-6'>
                                {productLayout.map((data, id) => {
                                    return (
                                        <div key={id} className='mt-1 duration-700 hover:pl-2'>
                                            {id === 0 ? (
                                                <h3 className='font-bold'>{data}</h3>
                                            ) : (
                                                <p className='text-[14px] opacity-[0.9]'>{data}</p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className='flex flex-col gap-5 p-2 flex-wrap mt-6'>
                                {productFeatures.map((data, id) => {
                                    return (
                                        <div key={id} className='mt-1 duration-700 hover:pl-2'>
                                            {id === 0 ? (
                                                <h3 className='font-bold'>{data}</h3>
                                            ) : (
                                                <p className='text-[14px] opacity-[0.9]'>{data}</p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className='flex flex-col gap-5 p-2 flex-wrap mt-6'>
                                {productDetails.map((data, id) => {
                                    return (
                                        <div key={id} className='mt-1 duration-700 hover:pl-2'>
                                            {id === 0 ? (
                                                <h3 className='font-bold'>{data}</h3>
                                            ) : (
                                                <p className='text-[14px] opacity-[0.9]'>{data}</p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className='flex flex-col gap-5 p-2 flex-wrap mt-6'>
                                {thumbnails.map((data, id) => {
                                    return (
                                        <div key={id} className='mt-1 duration-700 hover:pl-2'>
                                            {id === 0 ? (
                                                <h3 className='font-bold'>{data}</h3>
                                            ) : (
                                                <p className='text-[14px] opacity-[0.9]'>{data}</p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            <div className='flex flex-col gap-5 p-2 flex-wrap mt-6'>
                                {bootsale.map((data, id) => {
                                    return (
                                        <div key={id} className='mt-1 duration-700 hover:pl-2'>
                                            {id === 0 ? (
                                                <h3 className='font-bold'>{data}</h3>
                                            ) : (
                                                <p className='text-[14px] opacity-[0.9]'>{data}</p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    )}
                </div>

                {/*Blogs*/}


                <div onMouseEnter={handleBlogMouseEnter} onMouseLeave={handleBlogMouseLeave}>
                    <button
                        id="dropdownHoverButton"
                        className="text-black flex items-center hover:text-red-400"
                        type="button"
                    >
                        Blog
                        <IoMdArrowDropdown />
                    </button>


                    {isBlogDropdownOpen && (
                        <div
                            id="dropdownHover"
                            className=" flex justify-around  z-[1] absolute left-0 w-screen h-fit bg-white rounded-lg shadow w-30 text-black hover:transition hover:ease-in-out hover:duration-[1000ms]"
                        >

                            <div className='flex flex-col gap-5 p-2 justify-between items-center flex-wrap mt-6'>
                                {blog.map((data, id) => {
                                    return (
                                        <div key={id} className='mt-1 duration-700 hover:pl-2'>
                                            {id === 0 ? (
                                                <h3 className='font-bold'>{data}</h3>
                                            ) : (
                                                <p className='text-[14px] opacity-[0.9]'>{data}</p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>

                {/*Page */}

                <div onMouseEnter={handlePageMouseEnter} onMouseLeave={handlePageMouseLeave}>
                    <button
                        id="dropdownHoverButton"
                        className="text-black flex items-center hover:text-red-400"
                        type="button"
                    >
                        Page
                        <IoMdArrowDropdown />
                    </button>


                    {isPageDropdownOpen && (
                        <div
                            id="dropdownHover"
                            className=" flex justify-around  z-[1] absolute left-0 w-screen h-fit bg-white rounded-lg shadow w-30 text-black hover:transition hover:ease-in-out hover:duration-[1000ms]"
                        >

                            <div className='flex flex-col gap-5 p-2 justify-between items-center flex-wrap mt-6'>
                                {page.map((data, id) => {
                                    return (
                                        <div key={id} className='mt-1 duration-700 hover:pl-2'>
                                            {id === 0 ? (
                                                <h3 className='font-bold'>{data}</h3>
                                            ) : (
                                                <p className='text-[14px] opacity-[0.9]'>{data}</p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>

                <div>
                    <p className='flex items-center hover:text-red-500 hover:cursor-pointer'>Sale</p>
                </div>

            </div>
        </div>
    );
};

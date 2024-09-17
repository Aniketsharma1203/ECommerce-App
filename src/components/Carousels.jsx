import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export const Carousels = () => {
    return (
        <div>
            <Carousel 
                autoPlay={true} 
                infiniteLoop={true} 
                showThumbs={false} 
                interval={2000} 
                showStatus={false} 
                showIndicators={false} // Hides the indicators
            >
                <div className='relative'>
                    <p className='absolute top-44 left-80 text-5xl h-16'>Stylish <br /> 
                    Top Trending
                    </p>
                    <p className='absolute top-72 left-[300px] decoration-transparent font-mono'>So soft, you don't want to take it off.</p>
                    <button className='border bg-black text-white p-3 w-[280px] rounded-full absolute top-96 left-[320px]'>SHOP NOW</button>
                    <img 
                        src="https://umino-demo.myshopify.com/cdn/shop/files/h1-slide-show-1_1_1.jpg?v=1690341642&width=1500" 
                    />
                </div>
                <div className='relative'>
                    <p className='absolute top-44 left-80 text-5xl h-16'>Online <br /> 
                    Limited Edition
                    </p>
                    <p className='absolute top-72 left-[310px] decoration-transparent font-mono'>So soft, you don't want to take it off.</p>
                    <button className='border bg-black text-white p-3 w-[280px] rounded-full absolute top-96 left-[320px]'>SHOP NOW</button>
                    <img 
                        src="https://umino-demo.myshopify.com/cdn/shop/files/h1-slide-show-3.jpg?v=1679891172&width=1500" 
                    />
                </div>
                <div className='relative'>
                    <p className='absolute top-44 left-80 text-5xl h-16'>Hulton <br /> 
                    Perfect Simple
                    </p>
                    <p className='absolute top-72 left-[310px] decoration-transparent font-mono'>So soft, you don't want to take it off.</p>
                    <button className='border bg-black text-white p-3 w-[280px] rounded-full absolute top-96 left-[320px]'>SHOP NOW</button>
                    <img 
                        src="https://umino-demo.myshopify.com/cdn/shop/files/h1-slide-show-2.jpg?v=1679891172&width=1500" 
                    />
                </div>
            </Carousel>
        </div>
    );
};

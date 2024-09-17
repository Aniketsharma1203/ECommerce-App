import React, { useState } from 'react';
import { IoStarSharp } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";
import { Slide } from 'react-slideshow-image';
import { products } from '../data/headerdata';
import 'react-slideshow-image/dist/styles.css'
export const NewArrivals = () => {
    const [hovered, setHovered] = useState(null);

  
    return (
      <div className="slider-container mt-10">
        <Slide slidesToShow={4} slidesToScroll={1} autoplay={false}>
          {products.map((product) => (
            <div key={product.id} className='gap-2 flex flex-col items-center'>
              <div
                className="relative w-[270px] h-[400px] overflow-hidden"
                onMouseEnter={() => setHovered(product.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  src={hovered === product.id ? product.image2 : product.image1}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out"
                />
              </div>
              <p className="mt-2">{product.title}</p>
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
        </Slide>
      </div>
    );
};

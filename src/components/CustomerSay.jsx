import React, { useState } from 'react';
import { IoStarSharp } from "react-icons/io5";
import { IoIosStarHalf } from "react-icons/io";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export const CustomerSay = () => {
  const [reviews, setReviews] = useState([
    {
      image: "https://umino-demo.myshopify.com/cdn/shop/files/h-main-test1.png?v=1698741261",
      desc: "A perfect product, it keeps you very warm without over heating. True to size, I couldn't be happier with the purchase... Thank you!",
      rating: 5,
      name: "Algistino Lionel - Verified Buyer",
    },

    {
      image: "https://umino-demo.myshopify.com/cdn/shop/files/h-main-test2.png?v=1698741271",
      desc: "Great to be able to order everything I needed from the comfort of my home and the delivery was extremely quick. Recommend... ",
      rating: 5,
      name: "Siarhei Dzenisenka - Verified Buyer",
    },
    {
      image: "https://umino-demo.myshopify.com/cdn/shop/files/h-main-test1.png?v=1698741261",
      desc: "A perfect product, it keeps you very warm without over heating. True to size, I couldn't be happier> with the purchase... Thank you! ",
      rating: 5,
      name: "Algistino Lionel - Verified Buyer",
    },
    {
      image: "https://umino-demo.myshopify.com/cdn/shop/files/h-main-test3.png?v=1698741276",
      desc: "These are sooo pretty and very comfy. Perfect color as well. I love wearing these with a neutral top and Chelsea boots. Wicked cute...  ",
      rating: 5,
      name: "Sarah Bond - Verified Buyer",
    },

  ]);
  return (
    <div>
      <div className='mt-20 flex flex-col justify-center items-center gap-2'>
        <h1 className='text-[35px]'>Customer Say!</h1>
        <p className='text-[#5b5c5e] tracking-wider text-[13px] '>Customers love our products and we always strive to please them all.</p>
      </div>
      <div className='flex flex-col gap-2 m-10 '>
        <Slide slidesToShow={3} slidesToScroll={1} autoplay={false}>
          {reviews.map((product) => (
            <div className='gap-2 flex flex-col items-center border w-[400px] p-3 rounded-md'>
              <img src={product.image} />

              <p className='p-2 font-serif text-[14px]'>{product.desc}</p>

              <div className='flex w-[65px]'>
                {Array(Math.floor(product.rating)).fill().map((_, i) => (
                  <IoStarSharp key={i} />
                ))}
                {product.rating % 1 !== 0 && <IoIosStarHalf />}
              </div>
              <p className='font-serif text-[14px]'>
                {product.name}
              </p>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  )
}

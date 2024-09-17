import React from 'react'
import { FaShoppingBag } from "react-icons/fa";

export const ShopByGram = () => {
    const images = [

        "https://umino-demo.myshopify.com/cdn/shop/files/bg_13_1c3f17e6-797b-4720-9167-61cae1930376.png?v=1680599335&width=360"
        ,

        "https://umino-demo.myshopify.com/cdn/shop/files/bg.jpg?v=1680600213&width=360"
        ,

        "https://umino-demo.myshopify.com/cdn/shop/files/bg_15_870dde28-a681-4bae-b27c-23d0c548cf2a.png?v=1680599335&width=360"
        ,

        "https://umino-demo.myshopify.com/cdn/shop/files/bg_16_6040dbe7-ca8b-401a-bf57-f6c8d44d25ef.png?v=1680599335&width=360"
        ,

        "https://umino-demo.myshopify.com/cdn/shop/files/bg_17_a53e386b-81c7-4fe9-95b8-aad12bf0867a_3_1.png?v=1698997754&width=360"
        ,

        "https://umino-demo.myshopify.com/cdn/shop/files/bg_18_d2f5d8f0-7acb-4348-ae8a-88634e4d56f4_3_1.png?v=1698997690&width=360"
        ,
    ]
    return (
        <div>
            <div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h1 className='text-[35px]'>Shop by Gram</h1>
                    <p className='text-[#5b5c5e] tracking-wider text-[13px]'> Inspire and let yourself be inspired, from one unique fashion to another.</p>
                </div>
            </div>
            <div className='flex justify-evenly m-4 mt-10 '>
                {
                    images.map((image) => {
                        return (
                            <div className='overflow-hidden w-[210px] flex justify-center rounded-md h-[210px] hover:cursor-pointer relative'>
                                <img src={image} className='max-w-max hover:scale-110 hover:transition hover:ease-in-out hover:duration-[500ms] duration-[500ms]' />
                                <div className='absolute top-2 right-2 border rounded-full p-1 bg-white'>
                                    <FaShoppingBag />

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

import React from 'react'

export const Footer = () => {
    return (
        <div>
            <div className='mt-20'>
                <hr className="h-px mt-8 bg-gray-200 border-0 dark:bg-gray-300" />
            </div>
            <div className='flex justify-between m-10'>
                <p className='opacity-[0.7] hover:opacity-[1] hover:cursor-default'>© 2024 Ltroz. All Rights Reserved</p>
                <img src="https://umino-demo.myshopify.com/cdn/shop/files/payment_4.png?v=1680677580&width=360" />
            </div>
        </div>
    )
}

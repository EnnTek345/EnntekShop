import React from 'react'
import { FaHeadset, FaLock, FaMoneyBillWave, FaShippingFast, FaTag } from 'react-icons/fa'

const InfoSection = () => {
   const infoItems = [
        {
            icon: <FaShippingFast className='text-3xl text-red-600' />,
            title: 'Free Shipping',
            description: 'On all orders over $50',
        },
        {
            icon: <FaHeadset className='text-3xl text-red-600' />,
            title: '24/7 Support',
            description: 'We are here to help you',
        },
        {
            icon: <FaMoneyBillWave className='text-3xl text-red-600' />,
            title: 'Money Back Guarantee',
            description: '30 days money back guarantee',
        },
        {
            icon: <FaLock className='text-3xl text-red-600' />,
            title: 'Secure Payment',
            description: 'Yout payment information is 100% safe with us',
        },
        {
            icon: <FaTag className='text-3xl text-red-600' />,
            title: 'Best Price Discounts',
            description: 'We offer the best prices in the market',
        }

   ] 
  return (
    <div className='bg-white pb-8 pt-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
            {infoItems.map((item, index) => (
                <div key={index} className='flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
                    {item.icon}
                    <h3 className='mt-4 text-xl font-semibold'>{item.title}</h3>
                    <p className='mt-2 text-gray-600'>{item.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default InfoSection
import React from 'react'
import logo from "../../assests/ecommerce_smallsize_copy.png"
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from "react-icons/ai"
import { footerProductLinks, footercompanyLinks } from "../../staticdata/data"
import { RxSwitch } from 'react-icons/rx';

import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <div className='bg-[#000] text-white '>
            <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#342ac8] py-7">
                <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 '>
                    <span className='text-[#56d879]'> Subscribe </span>
                    us for get news..! <br />
                    Events and offers
                </h1>
                <div>
                    <input type="text" required placeholder='Enter your email...'
                        className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none' />
                    <button className='bg-[#56d879] hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md text-white md:w-auto w-full'>Submit</button>
                </div>
            </div>

            {/* actual footer */}

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
                <ul className='px-5 text-center sm:text-start flex sm:block flex-col items-center'>
                    <img src={logo} alt="logo alter data"
                        style={{ filter: "brightness(0) invert(1)", height: '90px', width: '120px' }} />
                    <br />
                    <p>The home and elememts needed to create beatiful products.</p>
                    <div className="flex items-center mt-[15px] ">
                        <AiOutlineTwitter size={25} className='cursor-pointer' />
                        <AiFillInstagram size={25} className='cursor-pointer ml-[15px]' />
                        <AiFillYoutube size={25} className='cursor-pointer ml-[15px]' />
                        <AiFillFacebook size={25} className='cursor-pointer ml-[15px]' />
                        <RxSwitch size={25}/>
                    </div>
                </ul>
                <ul className='text-center sm:text-start'>
                    <h1 className='mb-1 font-semibold'>Company</h1>
                    {footerProductLinks.map((link) => (
                        <li key={link.name}>
                            <Link className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                                to={link?.link} >{link.name}</Link>
                        </li>
                    ))}
                </ul>
                <ul className='text-center sm:text-start'>
                    <h1 className='mb-1 font-semibold'>shop</h1>
                    {footercompanyLinks.map((link) => (
                        <li key={link.name}>
                            <Link className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                                to={link?.link} >{link.name}</Link>
                        </li>
                    ))}
                </ul>
                <ul className='text-center sm:text-start'>
                    <h1 className='mb-1 font-semibold'>support</h1>
                    {footerProductLinks.map((link) => (
                        <li key={link.name}>
                            <Link className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
                                to={link?.link} >{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* last line */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8'>
                <span>&copy; 2020 Becodemy. All rights reserved.</span>
                <span>Terms and Privacy Policy.</span>
                <div className='sm:block flex items-center justify-center w-full'>
                    <img src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75" alt="payment" />
                </div>
            </div>

        </div>
    )
}

export default Footer
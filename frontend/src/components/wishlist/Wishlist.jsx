import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx"
import { IoBagHandleOutline } from "react-icons/io5"
import { HiPlus, HiOutlineMinus } from "react-icons/hi"

import styles from '../../styles/style'
import { Link } from 'react-router-dom'
const Wishlist = ({ setOpenWishlist }) => {
  const cartData = [
    {
      name: "Iphone 14 pro max ",
      description: "test",
      price: 999,
    },
    {
      name: "samsung galaxy s23 ",
      description: "test",
      price: 1099,
    },
    {
      name: "Iphone 13 pro max ",
      description: "test",
      price: 899,
    },
    {
      name: "samsung galaxy s23 ",
      description: "test",
      price: 1099,
    },
    {
      name: "Iphone 13 pro max ",
      description: "test",
      price: 899,
    },
  ]
  return (
    <div className={`fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10 `} >
      <div className='fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm'>
        <div>
          <div className="flex justify-end pt-5 px-5  ">
            <RxCross1 size={25} className="cursor-pointer" onClick={() => setOpenWishlist(false)} />
          </div>
          {/* Items length */}

          <div className={`${styles.noramlFlex} `}>
            <IoBagHandleOutline size={25} className='ml-[5px]' />
            <h5 className='p-2 text-[20px] font-[500]'>
              3 times
            </h5>
          </div>

          {/* cart Single Items */}

          <br />
          <div className='w-full border-t max-h-[384px] overflow-y-scroll'>
            {
              cartData && cartData.map((i, index) => (
                <CartSingle key={index} data={i} />
              ))
            }
          </div>
        </div>
        <div className="px-5 mb-3 ">
          {/* check out buttons */}
          <Link>
            <div className={`h-[45px] flex items-center justify-center w-[100$] bg-[#e44343] rounded-[5px]`}>
              <h1 className='text-#fff text-[18px] font-[600]'>Checkout Now (USD $600)</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

const CartSingle = ({ index, data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;
  return (
    <>
      <div className="border-b p-4">
        <div className="w-full flex items-center">
          <div>
            <div className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[25px] h-[25px] ${styles.noramlFlex} justify-center cursor-pointer`}
              onClick={() => setValue(value + 1)}>
              <HiPlus size={18} color="#fff" />
            </div>
            <span className='pl-[10px]'>{value}</span>
            <div className="bg-[#a7abb14f] rounded-full w-[25px] h-[25px] flex items-center justify-center cursor-pointer "
              onClick={() => setValue(value === 1 ? 1 : value - 1)}>
              <HiOutlineMinus size={16} color="#7d879c" />
            </div>
          </div>
          <img src="https://bonik-react.vercel.app/assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png" alt=""
            className='w-[80px] h-[80px] ml-2' />
          <div className="pl-[5px]">
            <h1>{data.name}</h1>
            <h4 className='font-[400] text-[15px] text-[#00000082]'>$ {data.price} * {value}</h4>
            <h4 className='font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto'>US${totalPrice}</h4>
          </div>
          <RxCross1 className='cursor-pointer' />
        </div>
      </div>
    </>

  )
}

export default Wishlist
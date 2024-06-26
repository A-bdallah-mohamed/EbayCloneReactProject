import React, { useEffect, useState } from 'react'
import '../App.css';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import Carthover from './carthover';
import { hover } from '@testing-library/user-event/dist/hover';
import { useLocation } from 'react-router-dom';
import { useCartContext } from './cartprovider';
export default function Loginbar() {
  const {cartlength,setcartlength,Uniquecart} = useCartContext()
  const location = useLocation()
  const [hovered,sethovered] = useState(false)
  useEffect(() => {
if(location.pathname === '/pages/cartpage'){
sethovered(false)
}
  },[hovered])
  return (
    <>
<div className=' loginbar smallfont'>
<div className='flexconetnt '>
   <div>Hi!     <Link to="/pages/signinpage"><span>Sign in </span></Link>or <span>register</span></div><div>Daily deals</div><div>Help & Contact</div>
</div>
<div className='flexconetnt'>
   <div>Ship to</div><div>Sell</div>
   <div className='flex items-center justify-center gap-1 cursor-pointer'>Watchlist <IoIosArrowDown /></div><div className='flex items-center justify-center gap-1 cursor-pointer'>My ePAY <IoIosArrowDown /></div><div><IoMdNotificationsOutline className='text-2xl'/></div>
   <Link to='/pages/cartpage' className='relative'><div onMouseEnter={()=>sethovered(true)} onMouseLeave={()=>sethovered(false)}>
   <div className={`absolute top-0 right-0 w-[13px] h-[13px] bg-red-500 rounded-full flex items-center justify-center text-white font-bold ${!(cartlength > 0) ? 'hidden' : 'flex'}`}>{cartlength}</div>

    <MdOutlineShoppingCart className='text-2xl'/></div></Link>
</div>
</div>
{hovered ? (
  <div className='absolute w-full h-full  z-40 left-0 flex justify-center'>
    <div className='relative w-[1200px] h-auto z-50 top-0'>
    <div className='absolute z-50 right-4 top-0'><Carthover hovered={hovered} sethovered={sethovered}/></div>
    </div>
  </div>
) : (<div></div>)}
  </>
  )
}

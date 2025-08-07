import React from 'react'
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link href="/"><Image src={logo} alt='logo' /></Link>
      <div className="navbar_btn_div">
        <button className='navbar_btn'>Sign Up</button>
      </div>
    </div>
  )
}

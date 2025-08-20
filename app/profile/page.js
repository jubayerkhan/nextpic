import React from 'react'
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import user from "@/public/assets/user.png";
import crown from "@/public/assets/crown.png";
import heart from "@/public/assets/heart.png";
import calender from "@/public/assets/calender.png";
import Link from 'next/link';


export default function Home() {
    return (
        <div className="md:pb-20 pb-10 h-screen">
            {/* navbar */}
            <div className='navbar_div'>
                <Link href="/"><Image src={logo} alt='logo' /></Link>
                <div className='profile_img_div1'>
                    <div className="profile_img_div2">
                        <Image src={user} alt='user' className='h-[26px] w-[26px]' />
                    </div>
                </div>
            </div>
            {/* profile heading section */}
            <div className='bg-white/10 md:py-12 py-5 px-4 2xl:px-0'>
                <div className='max-w-[1516px] mx-auto'>
                    <div className='md:flex justify-between'>
                        <div className='flex gap-[32px] items-start flex-wrap'>
                            <div className='flex sm:gap-12 gap-5 flex-wrap items-center'>
                                <div className='profile_img_main_div1'>
                                    <div className="profile_img_main_div2">
                                        <Image src={user} alt='user' className='w-[90px] h-[90px] md:w-auto md:h-auto' />
                                    </div>
                                </div>
                                <div>
                                    <h3 className='text-white text-[34px] font-semibold'>Alex Rodriguez</h3>
                                    <p className='text-white pt-[5px] pb-6'>@user-265315</p>
                                    <button className='text-white py-2.5 px-[30px] rounded-[10px] bg-gradient-to-b from-[#D3C3FF] to-[#6C3DF0] flex gap-2.5'>
                                        <Image src={crown} alt='crown' className='' />
                                        <span>Premium Member</span>
                                    </button>
                                </div>
                            </div>
                            <div className='text-white flex gap-2.5 md:pt-32'>
                                <Image src={calender} alt='calender' className='' />
                                <span>Member since July 2025</span>
                            </div>
                        </div>
                        <div className='sm:flex gap-6'>
                            <div className='bg-[#393d52] rounded-[20px] py-8 px-6 text-white min-w-[233px] h-full'>
                                <p>Saved</p>
                                <div className='flex justify-between items-center'>
                                    <h4 className='text-[34px] py-1'>6</h4>
                                    <div className='bg-white/20 rounded-full p-3 w-12'>
                                        <Image src={heart} alt='heart'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

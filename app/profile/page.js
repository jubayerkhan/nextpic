import React from 'react'
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import user from "@/public/assets/user.png";
import crown from "@/public/assets/crown.png";
import heart from "@/public/assets/heart.png";
import arrow_grow from "@/public/assets/arrow-grow.png";
import calender from "@/public/assets/calender.png";
import eye_crossed from "@/public/assets/eye_crossed.png";
import Link from 'next/link';


export default function Home() {
    return (
        <div className="md:pb-20 pb-10">
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
            <div className='profile_heading_div'>
                <div className='profile_heading_container'>
                    <div className='md:flex justify-between items-center flex-wrap'>
                        <div className='profile_heading_left_container'>
                            <div className='profile_heading_left_container_div1'>
                                <div className='profile_img_main_div1'>
                                    <div className="profile_img_main_div2">
                                        <Image src={user} alt='user' className='profile_img_heading_left' />
                                    </div>
                                </div>
                                <div className='xl:flex gap-8 items-start flex-wrap'>
                                    <div>
                                        <h3 className='profile_img_heading_left_name'>Alex Rodriguez</h3>
                                        <p className='profile_img_heading_left_subtitle'>@user-265315</p>
                                        <button className='premium_member_btn'>
                                            <Image src={crown} alt='crown' className='' />
                                            <span>Premium Member</span>
                                        </button>
                                    </div>
                                    <div className='profile_calender_div'>
                                        <Image src={calender} alt='calender' />
                                        <span>Member since July 2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='profile_img_heading_right'>
                            {/* card 1 */}
                            <div className='profile_img_heading_right_card_div'>
                                <p>Saved</p>
                                <div className='profile_img_heading_right_card_inner_div'>
                                    <h4 className='profile_img_heading_right_card_inner_div_no'>6</h4>
                                    <div className='profile_img_heading_right_card_inner_div_img'>
                                        <Image src={heart} alt='heart' />
                                    </div>
                                </div>
                                <div className='profile_img_heading_right_card_inner_div_green_arrow'>
                                    <Image src={arrow_grow} alt='arrow-grow' />
                                    <span>+3 this week</span>
                                </div>
                            </div>
                            {/* card 1 */}
                            <div className='profile_img_heading_right_card_div'>
                                <p>Saved</p>
                                <div className='profile_img_heading_right_card_inner_div'>
                                    <h4 className='profile_img_heading_right_card_inner_div_no'>3</h4>
                                    <div className='profile_img_heading_right_card_inner_div_img'>
                                        <Image src={eye_crossed} alt='eye_crossed' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* profile details section */}
            <div className='profile_page_section_container'>
                <h2 className='profile_page_section_heading'>Profile Details</h2>
                <h2 className='profile_page_section_subheading'>Manage your personal information</h2>
                <div className='grid grid-cols-2 gap-y-12'>
                    <div>
                        <p className='pb-2.5'>Name</p>
                        <p>Alex Rodriguez</p>
                    </div>
                    <div>
                        <p className='pb-2.5'>User ID</p>
                        <p>user-265315</p>
                    </div>
                    <div>
                        <p className='pb-2.5'>Email</p>
                        <p>alexrodriguez@mail.com</p>
                    </div>
                    <div>
                        <p className='pb-2.5'>Phone</p>
                        <p>+0123456789</p>
                    </div>
                </div>
            </div>
            {/* profile details section */}
            <div className='profile_page_section_container'>
                <h2 className='profile_page_section_heading'>Subscription Details</h2>
                <h2 className='profile_page_section_subheading'>Manage your Nextpick subscription and billing</h2>
            </div>
            {/* profile details section */}
            <div className='profile_page_section_container'>
                <h2 className='profile_page_section_heading'>Your Content Library</h2>
                <h2 className='profile_page_section_subheading'>Discover and manage your personalized recommendations</h2>
            </div>
            {/* profile details section */}
            <div className='profile_page_section_container'>
                <h2 className='profile_page_section_heading'>Account Management</h2>
                <h2 className='profile_page_section_subheading'>Manage your account settings and data</h2>
            </div>
        </div>
    );
}

import React from 'react'
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import user from "@/public/assets/user.png";
import crown from "@/public/assets/crown.png";
import heart from "@/public/assets/heart.png";
import arrow_grow from "@/public/assets/arrow-grow.png";
import calender from "@/public/assets/calender.png";
import eye_crossed from "@/public/assets/eye_crossed.png";
import credit_card from "@/public/assets/credit_card.png";
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
                            {/* card 2 */}
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
                <div className='profile_detail_section_grid'>
                    <div>
                        <p className='profile_page_labels'>Name</p>
                        <p>Alex Rodriguez</p>
                    </div>
                    <div>
                        <p className='profile_page_labels'>User ID</p>
                        <p>user-265315</p>
                    </div>
                    <div>
                        <p className='profile_page_labels'>Email</p>
                        <p>alexrodriguez@mail.com</p>
                    </div>
                    <div>
                        <p className='profile_page_labels'>Phone</p>
                        <p>+0123456789</p>
                    </div>
                </div>
            </div>
            {/* profile details section */}
            <div className='profile_page_section_container'>
                <h2 className='profile_page_section_heading'>Subscription Details</h2>
                <h2 className='profile_page_section_subheading'>Manage your Nextpick subscription and billing</h2>
                <div className='subscription_detail_cards_div'>
                    {/* card 1 */}
                    <div className='subscription_detail_card_div'>
                        <div className='subscription_detail_card_div_inner'>
                            <div className='subscription_detail_card_img_div bg-gradient-to-b from-[#D3C3FF] to-[#6C3DF0]'>
                                <Image src={crown} alt='crown' />
                            </div>
                            <div>
                                <p>Current Plan</p>
                                <h3 className='subscription_detail_card_title'>Premium</h3>
                                <p>Unlimited recommendations</p>
                            </div>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className='subscription_detail_card_div'>
                        <div className='subscription_detail_card_div_inner'>
                            <div className='subscription_detail_card_img_div bg-gradient-to-b from-[#97FFEA] to-[#00B187]'>
                                <Image src={calender} alt='calender' />
                            </div>
                            <div>
                                <p>Next Renewal</p>
                                <h3 className='subscription_detail_card_title'>December 15, 2026</h3>
                                <p className='text-[#00DDA9]'>Auto-renewed enabled</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h5 className='transection_heading'>Recent Transactions</h5>
                <div className='flex flex-col md:gap-6 gap-4 md:pb-12 pb-4'>
                    {/* card 1 */}
                    <div className='subscription_detail_card_div'>
                        <div className="transaction_card_div_inner">
                            {/* Image Div */}
                            <div className='transaction_img_div bg-gradient-to-b from-[#97FFEA] to-[#00B187]'>
                                <Image src={credit_card} alt='credit_card' />
                            </div>

                            {/* Plan and Price Parent Div */}
                            <div className="transaction_card_plan_div">
                                {/* Plan Details Div */}
                                <div>
                                    <p>TxnID: 3XYZ1234AB</p>
                                    <h3 className='subscription_detail_card_title py-0 md:py-1'>Premium Plan</h3>
                                    <p>Jul 15, 2025</p>
                                </div>
                                <div>
                                    <p className='subscription_price_profile'>$9.99</p>
                                    <button className='compleated_btn_subscribtion'>
                                        Completed
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className='subscription_detail_card_div'>
                        <div className="transaction_card_div_inner">
                            {/* Image Div */}
                            <div className='transaction_img_div bg-gradient-to-b from-[#FF97B8] to-[#E5396A]'>
                                <Image src={credit_card} alt='credit_card' />
                            </div>

                            {/* Plan and Price Parent Div */}
                            <div className="transaction_card_plan_div">
                                {/* Plan Details Div */}
                                <div>
                                    <p>TxnID: 3XYZ1234AB</p>
                                    <h3 className='subscription_detail_card_title py-0 md:py-1'>Premium Plan</h3>
                                    <p>Jul 15, 2025</p>
                                </div>
                                <div>
                                    <p className='subscription_price_profile'>$9.99</p>
                                    <button className='cancelled_btn_subscribtion'>
                                        Cancelled
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className='subscription_detail_card_div'>
                        <div className="transaction_card_div_inner">
                            {/* Image Div */}
                            <div className='transaction_img_div bg-gradient-to-b from-[#97FFEA] to-[#00B187]'>
                                <Image src={credit_card} alt='credit_card' />
                            </div>

                            {/* Plan and Price Parent Div */}
                            <div className="transaction_card_plan_div">
                                {/* Plan Details Div */}
                                <div>
                                    <p>TxnID: 3XYZ1234AB</p>
                                    <h3 className='subscription_detail_card_title py-0 md:py-1'>Premium Plan</h3>
                                    <p>Jul 15, 2025</p>
                                </div>
                                <div>
                                    <p className='subscription_price_profile'>$9.99</p>
                                    <button className='compleated_btn_subscribtion'>
                                        Completed
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='item_center'>
                    <button className='profile_load_btn'>Load More</button>
                </div>
            </div>
            {/* profile details section */}
            <div className='profile_page_section_container'>
                <h2 className='profile_page_section_heading'>Your Content Library</h2>
                <h2 className='profile_page_section_subheading'>Discover and manage your personalized recommendations</h2>
                <div className='switch_library'>
                    <label for="switcher" class="flex justify-center cursor-pointer bg-[#393d52] p-[5px] rounded-[15px] text-2xl">
                        <div class="relative flex justify-between w-[1428px] h-[64px]">
                            <input id="switcher" type="checkbox" class="hidden peer" />
                            <span class="text-center flex-grow relative z-20 self-center transition text-white peer-checked:text-white flex items-center justify-center gap-2.5"> <Image src={heart} alt='heart' /> <p>Saved (6)</p></span>
                            <span class="text-center flex-grow relative z-20 self-center transition peer-checked:text-white flex items-center justify-center gap-2.5"><Image src={eye_crossed} alt='heart' /> <p>Ignored (3)</p></span>
                            <span class="absolute toggle z-10 bg-[#6C3DF0] h-[64px] w-[709px]  transition-all top-0 left-0 peer-checked:left-[calc(100%-709px)]"></span>
                        </div>
                    </label>
                </div>

            </div>
            {/* profile details section */}
            <div className='profile_page_section_container'>
                <h2 className='profile_page_section_heading'>Account Management</h2>
                <h2 className='profile_page_section_subheading'>Manage your account settings and data</h2>
            </div>
        </div>
    );
}

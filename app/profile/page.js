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
import { FaStar } from "react-icons/fa";
import bookmark_white from "@/public/assets/bookmark_white.png";
import movie_card_icon from "@/public/assets/movie_card_icon.png";
import series_card_icon from "@/public/assets/series_card_icon.png";
import book_card_icon from "@/public/assets/book_card_icon.png";
import bookmarkIcon from "@/public/assets/bookmark.png";
import movie2 from "@/public/assets/movie2.png";
import book3 from "@/public/assets/book3.png";
import book1 from "@/public/assets/book1.png";
import book6 from "@/public/assets/book6.png";
import movie4 from "@/public/assets/movie4.png";
import series3 from "@/public/assets/series3.png";
import sigh_out from "@/public/assets/sign_out.png";
import trash from "@/public/assets/trash.png";


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
                    <label for="switcher" class="flex justify-center cursor-pointer bg-[#393d52] p-[5px] rounded-[15px] md:text-2xl text-base">
                        <div class="relative flex justify-between max-w-[1428px] w-full md:h-[72px] h-[50px]">
                            <input id="switcher" type="checkbox" class="hidden peer" />
                            <span class="text-center flex-grow relative z-20 self-center transition text-white peer-checked:text-white flex items-center justify-center gap-2.5"> <Image src={heart} alt='heart' /> <p>Saved (6)</p></span>
                            <span class="text-center flex-grow relative z-20 self-center transition peer-checked:text-white flex items-center justify-center gap-2.5"><Image src={eye_crossed} alt='heart' /> <p>Ignored (3)</p></span>
                            <span class="absolute toggle z-10 bg-[#6C3DF0] md:h-[72px] h-[50px] max-w-[709px] w-1/2 transition-all top-0 left-0 peer-checked:left-[calc(100%-50%)]"></span>
                        </div>
                    </label>
                </div>
                <div className='profile_contact_library overflow-x-auto md:overflow-x-hidden scrollbar-hide [grid-auto-flow:column] md:[grid-auto-flow:row] auto-cols-[210px] md:auto-cols-auto'>
                    {/* card 1 */}
                    <div className="h-full">
                        <div className="card_div transition-all duration-300 ease h-full flex flex-col">
                            {/* Image section */}
                            <div
                                className="relative overflow-hidden max-h-[303px] cursor-pointer"
                            >
                                <Image
                                    src={movie2}
                                    alt="movie2"
                                    width={210}
                                    height={315}
                                    className="card_poster_img"
                                />

                                {/* Bookmark icon */}
                                <div className="profile_card_category_tag">
                                    <Image
                                        src={movie_card_icon}
                                        alt="movie_card_icon"
                                        width={14}
                                        height={14}
                                    />
                                    <span>Movies</span>
                                </div>
                                {/* Rating */}
                                <div className="card_rating_div">
                                    <FaStar /> <span className="text-white">9/10</span>
                                </div>
                            </div>

                            {/* Content section */}
                            <div className="card_content_div flex flex-col flex-grow">
                                <div className="text_section flex-grow">
                                    {/* Title */}
                                    <h3 className="card_title">Avengers: Endgame</h3>

                                    {/* Year and Tags */}
                                    <div className="card_tag_div">
                                        <span>2000</span>
                                        <span className="card_year">
                                            Action
                                        </span>
                                        <span className="card_year">
                                            Sci-Fi
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="profile_card_description">
                                        Earth’s mightiest heroes unite to fight their greatest....
                                        <span
                                            className="text-[#5799EF] cursor-pointer"
                                        >More</span>
                                    </p>
                                </div>
                                {/* Buttons pinned at bottom */}
                                <div className="card_btn_div">
                                    <button className="remove_btn_profile">
                                        <Image src={bookmark_white} alt="bookmark_white" />
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className="h-full">
                        <div className="card_div transition-all duration-300 ease h-full flex flex-col">
                            {/* Image section */}
                            <div
                                className="relative overflow-hidden max-h-[303px] cursor-pointer"
                            >
                                <Image
                                    src={series3}
                                    alt="series3"
                                    width={210}
                                    height={315}
                                    className="card_poster_img"
                                />

                                {/* Bookmark icon */}
                                <div className="profile_card_category_tag text-[#F316B0]">
                                    <Image
                                        src={series_card_icon}
                                        alt="series_card_icon"
                                        width={14}
                                        height={14}
                                    />
                                    <span>Series</span>
                                </div>
                                {/* Rating */}
                                <div className="card_rating_div">
                                    <FaStar /> <span className="text-white">9/10</span>
                                </div>
                            </div>

                            {/* Content section */}
                            <div className="card_content_div flex flex-col flex-grow">
                                <div className="text_section flex-grow">
                                    {/* Title */}
                                    <h3 className="card_title">Avengers: Endgame</h3>

                                    {/* Year and Tags */}
                                    <div className="card_tag_div">
                                        <span>2000</span>
                                        <span className="card_year">
                                            Action
                                        </span>
                                        <span className="card_year">
                                            Sci-Fi
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="profile_card_description">
                                        Earth’s mightiest heroes unite to fight their greatest....
                                        <span
                                            className="text-[#5799EF] cursor-pointer"
                                        >More</span>
                                    </p>
                                </div>
                                {/* Buttons pinned at bottom */}
                                <div className="card_btn_div">
                                    <button className="remove_btn_profile">
                                        <Image src={bookmark_white} alt="bookmark_white" />
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className="h-full">
                        <div className="card_div transition-all duration-300 ease h-full flex flex-col">
                            {/* Image section */}
                            <div
                                className="relative overflow-hidden max-h-[303px] cursor-pointer"
                            >
                                <Image
                                    src={book3}
                                    alt="book3"
                                    width={210}
                                    height={315}
                                    className="card_poster_img"
                                />

                                {/* Bookmark icon */}
                                <div className="profile_card_category_tag text-[#0C8CE9]">
                                    <Image
                                        src={book_card_icon}
                                        alt="book_card_icon"
                                        width={14}
                                        height={14}
                                    />
                                    <span>Books</span>
                                </div>
                                {/* Rating */}
                                <div className="card_rating_div">
                                    <FaStar /> <span className="text-white">9/10</span>
                                </div>
                            </div>

                            {/* Content section */}
                            <div className="card_content_div flex flex-col flex-grow">
                                <div className="text_section flex-grow">
                                    {/* Title */}
                                    <h3 className="card_title">Avengers: Endgame</h3>

                                    {/* Year and Tags */}
                                    <div className="card_tag_div">
                                        <span>2000</span>
                                        <span className="card_year">
                                            Action
                                        </span>
                                        <span className="card_year">
                                            Sci-Fi
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="profile_card_description">
                                        Earth’s mightiest heroes unite to fight their greatest....
                                        <span
                                            className="text-[#5799EF] cursor-pointer"
                                        >More</span>
                                    </p>
                                </div>
                                {/* Buttons pinned at bottom */}
                                <div className="card_btn_div">
                                    <button className="remove_btn_profile">
                                        <Image src={bookmark_white} alt="bookmark_white" />
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 4 */}
                    <div className="h-full">
                        <div className="card_div transition-all duration-300 ease h-full flex flex-col">
                            {/* Image section */}
                            <div
                                className="relative overflow-hidden max-h-[303px] cursor-pointer"
                            >
                                <Image
                                    src={movie4}
                                    alt="movie4"
                                    width={210}
                                    height={315}
                                    className="card_poster_img"
                                />

                                {/* Bookmark icon */}
                                <div className="profile_card_category_tag">
                                    <Image
                                        src={movie_card_icon}
                                        alt="movie_card_icon"
                                        width={14}
                                        height={14}
                                    />
                                    <span>Movies</span>
                                </div>
                                {/* Rating */}
                                <div className="card_rating_div">
                                    <FaStar /> <span className="text-white">9/10</span>
                                </div>
                            </div>

                            {/* Content section */}
                            <div className="card_content_div flex flex-col flex-grow">
                                <div className="text_section flex-grow">
                                    {/* Title */}
                                    <h3 className="card_title">Avengers: Endgame</h3>

                                    {/* Year and Tags */}
                                    <div className="card_tag_div">
                                        <span>2000</span>
                                        <span className="card_year">
                                            Action
                                        </span>
                                        <span className="card_year">
                                            Sci-Fi
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="profile_card_description">
                                        Earth’s mightiest heroes unite to fight their greatest....
                                        <span
                                            className="text-[#5799EF] cursor-pointer"
                                        >More</span>
                                    </p>
                                </div>
                                {/* Buttons pinned at bottom */}
                                <div className="card_btn_div">
                                    <button className="remove_btn_profile">
                                        <Image src={bookmark_white} alt="bookmark_white" />
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 5 */}
                    <div className="h-full">
                        <div className="card_div transition-all duration-300 ease h-full flex flex-col">
                            {/* Image section */}
                            <div
                                className="relative overflow-hidden max-h-[303px] cursor-pointer"
                            >
                                <Image
                                    src={book1}
                                    alt="book3"
                                    width={210}
                                    height={315}
                                    className="card_poster_img"
                                />

                                {/* Bookmark icon */}
                                <div className="profile_card_category_tag text-[#0C8CE9]">
                                    <Image
                                        src={book_card_icon}
                                        alt="book_card_icon"
                                        width={14}
                                        height={14}
                                    />
                                    <span>Books</span>
                                </div>
                                {/* Rating */}
                                <div className="card_rating_div">
                                    <FaStar /> <span className="text-white">9/10</span>
                                </div>
                            </div>

                            {/* Content section */}
                            <div className="card_content_div flex flex-col flex-grow">
                                <div className="text_section flex-grow">
                                    {/* Title */}
                                    <h3 className="card_title">Avengers: Endgame</h3>

                                    {/* Year and Tags */}
                                    <div className="card_tag_div">
                                        <span>2000</span>
                                        <span className="card_year">
                                            Action
                                        </span>
                                        <span className="card_year">
                                            Sci-Fi
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="profile_card_description">
                                        Earth’s mightiest heroes unite to fight their greatest....
                                        <span
                                            className="text-[#5799EF] cursor-pointer"
                                        >More</span>
                                    </p>
                                </div>
                                {/* Buttons pinned at bottom */}
                                <div className="card_btn_div">
                                    <button className="remove_btn_profile">
                                        <Image src={bookmark_white} alt="bookmark_white" />
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 6 */}
                    <div className="h-full">
                        <div className="card_div transition-all duration-300 ease h-full flex flex-col">
                            {/* Image section */}
                            <div
                                className="relative overflow-hidden max-h-[303px] cursor-pointer"
                            >
                                <Image
                                    src={book6}
                                    alt="book3"
                                    width={210}
                                    height={315}
                                    className="card_poster_img"
                                />

                                {/* Bookmark icon */}
                                <div className="profile_card_category_tag text-[#0C8CE9]">
                                    <Image
                                        src={book_card_icon}
                                        alt="book_card_icon"
                                        width={14}
                                        height={14}
                                    />
                                    <span>Books</span>
                                </div>
                                {/* Rating */}
                                <div className="card_rating_div">
                                    <FaStar /> <span className="text-white">9/10</span>
                                </div>
                            </div>

                            {/* Content section */}
                            <div className="card_content_div flex flex-col flex-grow">
                                <div className="text_section flex-grow">
                                    {/* Title */}
                                    <h3 className="card_title">Avengers: Endgame</h3>

                                    {/* Year and Tags */}
                                    <div className="card_tag_div">
                                        <span>2000</span>
                                        <span className="card_year">
                                            Action
                                        </span>
                                        <span className="card_year">
                                            Sci-Fi
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="profile_card_description">
                                        Earth’s mightiest heroes unite to fight their greatest....
                                        <span
                                            className="text-[#5799EF] cursor-pointer"
                                        >More</span>
                                    </p>
                                </div>
                                {/* Buttons pinned at bottom */}
                                <div className="card_btn_div">
                                    <button className="remove_btn_profile">
                                        <Image src={bookmark_white} alt="bookmark_white" />
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='item_center'>
                    <button className='profile_load_btn'>Show All</button>
                </div>
            </div>
            {/* profile details section */}
            <div className='profile_page_section_container'>
                <h2 className='profile_page_section_heading'>Account Management</h2>
                <h2 className='profile_page_section_subheading'>Manage your account settings and data</h2>
                <div className='flex gap-5'>
                    <button className='profile_log_out'>
                        <Image src={sigh_out} alt='crown'/>
                        <span>Log Out</span>
                    </button>
                    <button className='profile_delete'>
                        <Image src={trash} alt='crown'/>
                        <span>Delete My Account</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

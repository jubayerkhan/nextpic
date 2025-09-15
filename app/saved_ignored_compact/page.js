import React from 'react'
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import user from "@/public/assets/user.png";
import crown from "@/public/assets/crown.png";
import heart from "@/public/assets/heart.png";
import arrow_grow from "@/public/assets/arrow-grow.png";
import calender from "@/public/assets/calender.png";
import Link from 'next/link';
import { FaStar } from "react-icons/fa";
import bookmark_white from "@/public/assets/bookmark_white.png";
import menu_dots from "@/public/assets/menu_dots.png";
import undo_btn from "@/public/assets/undo_btn.png";
import FilterPopup from '@/app/components/FilterPopup';
import dummyMovies from "@/app/components/MovieGrid";
import dummyBooks from "@/app/components/BookGrid";
import dummySeries from "@/app/components/SeriesGrid";


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
            <div className='saved_page_heading_div'>
                <div className='saved_page_container'>
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
                                    <h4 className='profile_img_heading_right_card_inner_div_no'>24</h4>
                                    <div className='profile_img_heading_right_card_inner_div_img'>
                                        <Image src={heart} alt='heart' />
                                    </div>
                                </div>
                                <div className='profile_img_heading_right_card_inner_div_green_arrow'>
                                    <Image src={arrow_grow} alt='arrow-grow' />
                                    <span>+3 this week</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='saved_page_container_sm'>
                <div>
                    <h5 className="text-white pb-2">
                        Your Content Library (24 Saved) (15 Ignored)
                    </h5>
                    <p className="result_text">
                        Showing results for: Movies, Series, Games, Books
                    </p>
                </div>
            </div>
            <FilterPopup />
            {/* movie card grid */}
            <div className='saved_page_container_sm'>
                <h3 className="cards_section_title pt-6 pb-5 text-2xl font-semibold">Movie</h3>
                <div className='cards_grid_section min-[769px]:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr mb-6 pb-1.5'>
                    {/* card 1 */}
                    {dummyMovies.map((movie, index) => (
                        <div className="min-w-[207px] flex-shrink min-[769px]:min-w-0" key={index}>
                            <div className="saved_compact_page_card_container">
                                {/* Image section */}
                                <div className="relative overflow-hidden max-h-[303px] cursor-pointer h-full group">
                                    <Image
                                        src={movie.image}
                                        alt="movie2"
                                        width={207}
                                        height={311}
                                        className="card_poster_img h-full"
                                    />
                                    {/* mobile menu dots */}
                                    <div className="mobile_menu_dot bg-[#8A38F5]">
                                        <Image src={menu_dots} alt='menu_dots' />
                                    </div>

                                    {/* Title gradient at bottom */}
                                    <div className="saved_compact_page_card_title_gradient">
                                        <h3 className="card_title pl-3 pb-3">{movie.title}</h3>
                                    </div>

                                    {/* Hover overlay with Undo button */}
                                    <div className="saved_compact_page_card_overlay">
                                        <button className={`saved_compact_page_card_undo_btn bg-[#8A38F5]`}>
                                            <Image src={undo_btn} alt='undo_btn'/>
                                            <span>Undo</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Show More Button */}
                <div className="item_center">
                    <button className="movie_show_more_btn">
                        Show More
                    </button>
                </div>
            </div>
            {/* series card grid */}
            <div className='saved_page_container_sm'>
                <h3 className="cards_section_title pt-6 pb-5 text-2xl font-semibold">Movie</h3>
                <div className='cards_grid_section min-[769px]:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr mb-6 pb-1.5'>
                    {/* card 1 */}
                    {dummySeries.map((movie, index) => (
                        <div className="min-w-[207px] flex-shrink min-[769px]:min-w-0" key={index}>
                            <div className="saved_compact_page_card_container">
                                {/* Image section */}
                                <div className="relative overflow-hidden max-h-[303px] cursor-pointer h-full group">
                                    <Image
                                        src={movie.image}
                                        alt="movie2"
                                        width={207}
                                        height={311}
                                        className="card_poster_img h-full"
                                    />

                                    {/* mobile menu dots */}
                                    <div className="mobile_menu_dot bg-[#F316B0]">
                                        <Image src={menu_dots} alt='menu_dots' />
                                    </div>

                                    {/* Title gradient at bottom */}
                                    <div className="saved_compact_page_card_title_gradient">
                                        <h3 className="card_title pl-3 pb-3">{movie.title}</h3>
                                    </div>

                                    {/* Hover overlay with Undo button */}
                                    <div className="saved_compact_page_card_overlay">
                                        <button className="saved_compact_page_card_undo_btn bg-[#F316B0]">
                                            <Image src={undo_btn} alt='undo_btn'/>
                                            <span>Undo</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Show More Button */}
                <div className="item_center">
                    <button className="movie_show_more_btn">
                        Show More
                    </button>
                </div>
            </div>
            {/* Books card grid */}
            <div className='saved_page_container_sm'>
                <h3 className="cards_section_title pt-6 pb-5 text-2xl font-semibold">Movie</h3>
                <div className='cards_grid_section min-[769px]:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr mb-6 pb-1.5'>
                    {/* card 1 */}
                    {dummyBooks.map((movie, index) => (
                        <div className="min-w-[207px] flex-shrink min-[769px]:min-w-0" key={index}>
                            <div className="saved_compact_page_card_container">
                                {/* Image section */}
                                <div className="relative overflow-hidden max-h-[303px] cursor-pointer h-full group">
                                    <Image
                                        src={movie.image}
                                        alt="movie2"
                                        width={207}
                                        height={311}
                                        className="card_poster_img h-full"
                                    />

                                    {/* mobile menu dots */}
                                    <div className="mobile_menu_dot bg-[#0C8CE9]">
                                        <Image src={menu_dots} alt='menu_dots' />
                                    </div>

                                    {/* Title gradient at bottom */}
                                    <div className="saved_compact_page_card_title_gradient">
                                        <h3 className="card_title pl-3 pb-3">{movie.title}</h3>
                                    </div>

                                    {/* Hover overlay with Undo button */}
                                    <div className="saved_compact_page_card_overlay">
                                        <button className="saved_compact_page_card_undo_btn bg-[#0C8CE9]">
                                            <Image src={undo_btn} alt='undo_btn'/>
                                            <span>Undo</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Show More Button */}
                <div className="item_center">
                    <button className="movie_show_more_btn">
                        Show More
                    </button>
                </div>
            </div>
        </div>
    );
}

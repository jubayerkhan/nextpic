import React from 'react'
import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import user from "@/public/assets/user.png";
import evans from "@/public/assets/evans.png";
import crown from "@/public/assets/crown.png";
import heart from "@/public/assets/heart.png";
import arrow_grow from "@/public/assets/arrow-grow.png";
import calender from "@/public/assets/calender.png";
import Link from 'next/link';
import { FaStar } from "react-icons/fa";
import bookmark_white from "@/public/assets/bookmark_white.png";
import menu_dots from "@/public/assets/menu_dots.png";
import undo_btn from "@/public/assets/view_white.png";
import undo from "@/public/assets/undo.png";
import undo_black from "@/public/assets/undo_black.png";
import view_black from "@/public/assets/view_black.png";
import FilterPopup from '@/app/components/FilterPopup';
import dummyMovies from "@/app/components/MovieGrid";
import dummyBooks from "@/app/components/BookGrid";
import dummySeries from "@/app/components/SeriesGrid";


export default function Home() {
    return (
        <div className="min-[769px]:pb-20 pb-10">
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
            {/* profile heading section */}
            <div className='profile_heading_div'>
                <div className='profile_heading_container'>
                    <div className='min-[769px]:flex justify-between lg:items-center gap-5 lg:flex-row flex-col'>
                        <div className='profile_heading_left_container'>
                            <div className='profile_heading_left_container_div1'>
                                <div className='profile_img_main_div1'>
                                    <Image src={evans} alt='evans' className='profile_img_heading_left' height={164} width={164} />
                                </div>
                                <div className='xl:flex gap-8 items-start flex-wrap'>
                                    <div>
                                        <h3 className='profile_img_heading_left_name'>Alex Rodriguez</h3>
                                        <p className='profile_img_heading_left_subtitle'>annanovas71@gmail.com</p>
                                        <div className='profile_page_btns_div'>
                                            <button className='premium_member_btn'>
                                                <Image src={crown} alt='crown' className='' />
                                                <span>Premium Member</span>
                                            </button>
                                            <div className='profile_calender_div'>
                                                <Image src={calender} alt='calender' />
                                                <span>Member since July 2025</span>
                                            </div>
                                        </div>
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
                <h3 className="cards_section_title pt-6 pb-5 text-2xl font-semibold">Movies</h3>
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
                                    <div className="dropdown dropdown-end absolute top-3 right-3 z-10 min-[769px]:hidden block">
                                        <div tabIndex={0} role="button" className="mobile_menu_dots bg-[#8A38F5]">
                                            <Image src={menu_dots} alt='menu_dots' />
                                        </div>
                                        <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-1 w-[183px] p-2 text-[#10172A] mt-1">
                                            <li><a className='flex justify-end'> <Image src={view_black} alt='View' /> <span>View Details</span></a></li>
                                            <li><a className='flex justify-end'><Image src={undo_black} alt='View' /> <span>Undo</span></a></li>
                                        </ul>
                                    </div>

                                    {/* Title gradient at bottom */}
                                    <div className="saved_compact_page_card_title_gradient">
                                        <h3 className="card_title pl-3 pb-3">{movie.title}</h3>
                                    </div>

                                    {/* Hover overlay with Undo button */}
                                    <div className="saved_compact_page_card_overlay">
                                        <button className={`view_compact_page_card_undo_btn bg-[#8A38F5] hover:bg-[#722ECC]`}>
                                            <Image src={undo_btn} alt='View' />
                                            <span>View Details</span>
                                        </button>
                                        <button className={`saved_compact_page_card_undo_btn`}>
                                            <Image src={undo} alt='undo_btn' />
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
                <h3 className="cards_section_title pt-6 pb-5 text-2xl font-semibold">Series</h3>
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
                                    <div className="dropdown dropdown-end absolute top-3 right-3 z-10 min-[769px]:hidden block">
                                        <div tabIndex={0} role="button" className="mobile_menu_dots bg-[#F316B0]">
                                            <Image src={menu_dots} alt='menu_dots' />
                                        </div>
                                        <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-1 w-[183px] p-2 text-[#10172A] mt-1">
                                            <li><a className='flex justify-end'> <Image src={view_black} alt='View' /> <span>View Details</span></a></li>
                                            <li><a className='flex justify-end'><Image src={undo_black} alt='View' /> <span>Undo</span></a></li>
                                        </ul>
                                    </div>

                                    {/* Title gradient at bottom */}
                                    <div className="saved_compact_page_card_title_gradient">
                                        <h3 className="card_title pl-3 pb-3">{movie.title}</h3>
                                    </div>

                                    {/* Hover overlay with Undo button */}
                                    <div className="saved_compact_page_card_overlay">
                                        <button className="view_compact_page_card_undo_btn bg-[#F316B0] hover:bg-[#CD1294]">
                                            <Image src={undo_btn} alt='undo_btn' />
                                            <span>View Details</span>
                                        </button>
                                        <button className={`saved_compact_page_card_undo_btn`}>
                                            <Image src={undo} alt='undo_btn' />
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
                    <button className="series_show_more_btn">
                        Show More
                    </button>
                </div>
            </div>
            {/* Books card grid */}
            <div className='saved_page_container_sm'>
                <h3 className="cards_section_title pt-6 pb-5 text-2xl font-semibold">Books</h3>
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
                                    <div className="dropdown dropdown-end absolute top-3 right-3 z-10 min-[769px]:hidden block">
                                        <div tabIndex={0} role="button" className="mobile_menu_dots bg-[#0C8CE9]">
                                            <Image src={menu_dots} alt='menu_dots' />
                                        </div>
                                        <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-1 w-[183px] p-2 text-[#10172A] mt-1">
                                            <li><a className='flex justify-end'> <Image src={view_black} alt='View' /> <span>View Details</span></a></li>
                                            <li><a className='flex justify-end'><Image src={undo_black} alt='View' /> <span>Undo</span></a></li>
                                        </ul>
                                    </div>

                                    {/* Title gradient at bottom */}
                                    <div className="saved_compact_page_card_title_gradient">
                                        <h3 className="card_title pl-3 pb-3">{movie.title}</h3>
                                    </div>

                                    {/* Hover overlay with Undo button */}
                                    <div className="saved_compact_page_card_overlay">
                                        <button className="view_compact_page_card_undo_btn bg-[#0C8CE9] hover:bg-[#0D7DCF]">
                                            <Image src={undo_btn} alt='undo_btn' />
                                            <span>View Details</span>
                                        </button>
                                        <button className={`saved_compact_page_card_undo_btn`}>
                                            <Image src={undo} alt='undo_btn' />
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
                    <button className="book_show_more_btn">
                        Show More
                    </button>
                </div>
            </div>
        </div>
    );
}

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
import undo from "@/public/assets/undo.png";
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
                <h3 className="cards_section_title pt-6">Movie</h3>
                <div className='flex md:grid grid-cols-2 sm:grid-cols-3 2xl:grid-cols-8 lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-6 gap-6 md:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr pb-6 items-stretch'>
                    {/* card 1 */}
                    {dummyMovies.map((movie, index) => (
                        <div className="min-w-[207px] flex-shrink md:min-w-0" key={index}>
                            <div className="card_div transition-all duration-300 ease h-full flex flex-col flex-grow">
                                {/* Image section */}
                                <div
                                    className="relative overflow-hidden max-h-[303px] cursor-pointer"
                                >
                                    <Image
                                        src={movie.image}
                                        alt="movie2"
                                        width={210}
                                        height={315}
                                        className="card_poster_img"
                                    />
                                    {/* Rating */}
                                    <div className="card_rating_div">
                                        <FaStar /> <span className="text-white">{movie.rating}/10</span>
                                    </div>
                                </div>

                                {/* Content section */}
                                <div className="card_content_div flex flex-col flex-grow">
                                    <div className="text_section flex-grow">
                                        {/* Title */}
                                        <h3 className="card_title">{movie.title}</h3>

                                        {/* Year and Tags */}
                                        <div className="card_tag_div">
                                            <span>{movie.year}</span>
                                            {movie.genres.map((genre, index) => (
                                                <span key={index} className="card_year">
                                                    {genre}
                                                </span>
                                            ))}
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
                <h3 className="cards_section_title pt-6">Series</h3>
                <div className='cards_grid_section md:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr pb-6'>
                    {/* card 1 */}
                    {dummySeries.map((series, index) => (
                        <div className="h-full min-w-[207px] flex-shrink-0 md:flex-shrink md:min-w-0" key={index}>
                            <div className="card_div transition-all duration-300 ease h-full flex flex-col">
                                {/* Image section */}
                                <div
                                    className="relative overflow-hidden max-h-[303px] cursor-pointer"
                                >
                                    <Image
                                        src={series.image}
                                        alt="series2"
                                        width={210}
                                        height={315}
                                        className="card_poster_img"
                                    />
                                    {/* Rating */}
                                    <div className="card_rating_div">
                                        <FaStar /> <span className="text-white">{series.rating}/10</span>
                                    </div>
                                </div>

                                {/* Content section */}
                                <div className="card_content_div flex flex-col flex-grow">
                                    <div className="text_section flex-grow">
                                        {/* Title */}
                                        <h3 className="card_title">{series.title}</h3>

                                        {/* Year and Tags */}
                                        <div className="card_tag_div">
                                            <span>{series.year}</span>
                                            {series.genres.map((genre, index) => (
                                                <span key={index} className="card_year">
                                                    {genre}
                                                </span>
                                            ))}
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
                                            <Image src={undo} alt="undo" />
                                            Undo
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
                <h3 className="cards_section_title pt-6">Books</h3>
                <div className='cards_grid_section md:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr pb-6'>
                    {/* card 1 */}
                    {dummyBooks.map((book, index) => (
                        <div className="h-full min-w-[207px] flex-shrink-0 md:flex-shrink md:min-w-0" key={index}>
                            <div className="card_div transition-all duration-300 ease h-full flex flex-col">
                                {/* Image section */}
                                <div
                                    className="relative overflow-hidden max-h-[303px] cursor-pointer"
                                >
                                    <Image
                                        src={book.image}
                                        alt="book2"
                                        width={210}
                                        height={315}
                                        className="card_poster_img"
                                    />
                                    {/* Rating */}
                                    <div className="card_rating_div">
                                        <FaStar /> <span className="text-white">{book.rating}/10</span>
                                    </div>
                                </div>

                                {/* Content section */}
                                <div className="card_content_div flex flex-col flex-grow">
                                    <div className="text_section flex-grow">
                                        {/* Title */}
                                        <h3 className="card_title">{book.title}</h3>

                                        {/* Year and Tags */}
                                        <div className="card_tag_div">
                                            <span>{book.year}</span>
                                            {book.genres.map((genre, index) => (
                                                <span key={index} className="card_year">
                                                    {genre}
                                                </span>
                                            ))}
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
                                            <Image src={undo} alt="undo" />
                                            Undo
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

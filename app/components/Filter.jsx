import React from 'react'
import Image from "next/image";
import header_img from "@/public/assets/header_img.svg";
import movie_icon from "@/public/assets/movie_icon.png";
import series from "@/public/assets/series.png";
import book from "@/public/assets/book.png";
import game from "@/public/assets/game.png";
import shuffle from "@/public/assets/shuffle.png";
import magic from "@/public/assets/magic.png";

export default function Filter() {
    return (
        <div className='filter_div'>
            <div className="filter_heading_div">
                <h2 className="filter_heading">
                    <span>
                        Discover Your Next Favorite{" "}
                        <span className="inline-flex items-center ">
                            Pick
                            <Image
                                src={header_img}
                                alt="header_img"
                                className="ml-2.5 inline-block"
                            />
                        </span>
                    </span>
                </h2>
            </div>

            <p className='filter_subtitle'>Discover your next favorite movie, series, game, or book with AI-powered recommendations</p>
            <h4 className='filter_title'>Start Exploring</h4>
            {/* filter options div */}
            <div className='filter_option_movies_div'>
                {/* card 1 */}
                <div>
                    <input
                        id="movie"
                        type="checkbox"
                        name="options"
                        className=""
                        value="movie"
                    />
                    <label htmlFor="movie" className="filter_option_movie_div">
                        <div className='filter_option_img_div bg-[#8A38F5]'>
                            <Image src={movie_icon} alt='movie_icon' />
                        </div>
                        <h5 className='filter_option_title'>Movies</h5>
                    </label>
                </div>
                {/* card 2 */}
                <div>
                    <input
                        id="series"
                        type="checkbox"
                        name="options"
                        className=""
                        value="series"
                    />
                    <label htmlFor="series" className="filter_option_series_div">
                        <div className='filter_option_img_div bg-[#F316B0]'>
                            <Image src={series} alt='series' />
                        </div>
                        <h5 className='filter_option_title'>Series</h5>
                    </label>
                </div>
                {/* card 3 */}
                <div>
                    <input
                        id="game"
                        type="checkbox"
                        name="options"
                        className=""
                        value="game"
                    />
                    <label htmlFor="game" className="filter_option_game_div">
                        <div className='filter_option_img_div bg-[#F65009]'>
                            <Image src={game} alt='game' />
                        </div>
                        <h5 className='filter_option_title'>Game</h5>
                    </label>
                </div>
                {/* card 4 */}
                <div>
                    <input
                        id="book"
                        type="checkbox"
                        name="options"
                        className=""
                        value="book"
                    />
                    <label htmlFor="book" className="filter_option_book_div">
                        <div className='filter_option_img_div bg-[#0C8CE9]'>
                            <Image src={book} alt='book' />
                        </div>
                        <h5 className='filter_option_title'>Book</h5>
                    </label>
                </div>
            </div>
            {/* btn div */}
            <div className='md:pt-12 pt-4 md:pb-[72px] pb-4 md:flex justify-center gap-6'>
                <button className='filter_btn bg-gradient-to-t from-[#FEADFF] hover:from-[#FFEAEE] from-0% to-[#6C3DF0] to-100% transition-transform'>
                    <Image
                        src={shuffle}
                        alt="shuffle"
                        className="h-4 w-4"
                    />
                    <span>Random Pick</span>
                </button>
                <button className='filter_btn mt-5 md:mt-0 border-1 border-[#444444] hover:bg-gradient-to-r from-[#FF4F6D] to-[#6C3DF0] transition-transform'>
                    <Image
                        src={magic}
                        alt="magic"
                        className="h-4 w-4"
                    />
                    <span>Get My Picks</span>
                </button>
            </div>
            {/* result div */}
            <div className='md:flex justify-between'>
                <div>
                    <h5 className='text-white pb-2'>Top Suggest</h5>
                    <p className='result_text'>Click pass to remove already watched/unwanted items</p>
                </div>
                <p className='result_text_right'>Showing results for: Movies, Series, Games, Books</p>
            </div>
        </div>
    )
}

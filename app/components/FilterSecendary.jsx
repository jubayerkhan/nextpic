import React from 'react'
import Image from "next/image";
import filter from "@/public/assets/filter.png";
import magic from "@/public/assets/magic.png";

export default function FilterSecondary() {
    return (
        <div className='filter_div'>
            {/* result div */}
            <div className='md:flex justify-between'>
                <div>
                    <h5 className='text-white pb-2'>Recommendations (11 results)</h5>
                    <p className='result_text'>Showing results for: Movies, Series, Games, Books</p>
                </div>
                <button className='filter_btn hover:bg-gradient-to-r from-[#FF4F6D] to-[#6C3DF0] transition-transform'>
                    <Image
                        src={filter}
                        alt="filter"
                        className="h-4 w-4"
                    />
                    <span>Show Filter</span>
                </button>
            </div>
        </div>
    )
}

"use client";

import Image from "next/image";
import { FaStar, FaTimes } from "react-icons/fa";
import { FiThumbsUp } from "react-icons/fi";

// Helper function to get the correct bookmark icon path
const getBookmarkIcon = (type) => {
  switch (type) {
    case "movie":
      return "/assets/bookmark.png";
    case "series":
      return "/assets/bookmark-series.png";
    case "book":
      return "/assets/bookmark-book.png";
    case "game":
      return "/assets/bookmark-game.png";
    default:
      return "/assets/bookmark.png";
  }
};

export default function Card({ item, type }) {
  const bookmarkIcon = getBookmarkIcon(item.type);
   const shadowColor = {
    movie: "hover:shadow-[0_4px_10px_rgba(138,56,245,1)]",   // purple
    series: "hover:shadow-[0_4px_10px_rgba(0,189,214,1)]",   // cyan
    game: "hover:shadow-[0_4px_10px_rgba(255,107,107,1)]",   // red
    book: "hover:shadow-[0_4px_10px_rgba(0,255,144,1)]",     // green
  };

  return (
    <div
      className={`bg-[#1F2842] rounded-[20px] overflow-hidden text-white shadow-md max-w-[207px] flex flex-col ${
        shadowColor[type] || ""
      }`}
    >
      {/* Image section */}
      <div className="relative">
        <Image
          src={item.image}
          alt={item.title}
          width={300}
          height={450}
          className="w-full h-auto object-cover"
        />
        {/* Dynamic Bookmark icon */}
        <Image
          src={bookmarkIcon}
          alt="bookmark"
          width={20}
          height={20}
          className="absolute top-2 right-2 cursor-pointer"
        />
        
        {/* Rating */}
        <div className="flex items-center gap-1 text-sm text-yellow-400 absolute bottom-3 left-3 bg-black/50 rounded-full px-1.5 py-[3px]">
          <FaStar /> <span className="text-white">{item.rating}/10</span>
        </div>
      </div>

      {/* Content section */}
      <div className="p-3 flex flex-col justify-between h-full">
        <h3 className="font-semibold mt-2 text-white leading-tight">
          {item.title}
        </h3>

        {/* Year + Tags */}
        <div className="text-xs text-[#7E8598] mt-1 flex flex-wrap gap-1">
          <span>{item.year}</span>
          {item.genres.map((genre, idx) => (
            <span
              key={idx}
              className="bg-[#2A3145] text-white px-2 py-0.5 rounded-full text-[10px]"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-xs text-[#7E8598] mt-2">
          {item.description} <span className="text-[#5799EF]">...More</span>
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-between mt-3 text-sm">
          <button className="flex items-center gap-1 bg-[#35436C] px-3 py-1.5 rounded-full">
            <FiThumbsUp /> Like
          </button>
          <button className="flex items-center gap-1 bg-[#394056] px-3 py-1.5 rounded-full">
            <FaTimes /> Pass
          </button>
        </div>
      </div>
    </div>
  );
}

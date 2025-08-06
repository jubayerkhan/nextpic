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
      className={`card_div ${
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
          className="card_poster_img"
        />
        {/* Bookmark icon */}
        <Image
          src={bookmarkIcon}
          alt="bookmark"
          width={20}
          height={20}
          className="card_bookmark_img"
        />
        
        {/* Rating */}
        <div className="card_rating_div">
          <FaStar /> <span className="text-white">{item.rating}/10</span>
        </div>
      </div>

      {/* Content section */}
      <div className="card_content_div">
        <h3 className="card_title">
          {item.title}
        </h3>

        {/* Year + Tags */}
        <div className="card_tag_div">
          <span>{item.year}</span>
          {item.genres.map((genre, idx) => (
            <span
              key={idx}
              className="card_year"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="card_description">
          {item.description} <span className="text-[#5799EF]">More</span>
        </p>

        {/* Buttons */}
        <div className="card_btn_div">
          <button className="card_like_btn">
            <FiThumbsUp /> Like
          </button>
          <button className="card_pass_btn">
            <FaTimes /> Pass
          </button>
        </div>
      </div>
    </div>
  );
}

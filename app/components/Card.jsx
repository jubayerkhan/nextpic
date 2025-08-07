"use client";

import Image from "next/image";
import { FaStar, FaTimes } from "react-icons/fa";
import { FiThumbsUp } from "react-icons/fi";
import thumbs from "@/public/assets/thumbs-up.png";
import pass from "@/public/assets/pass.png";

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
  const bookmarkIcon = getBookmarkIcon(type);
  const shadowColor = {
  movie: "hover:shadow-[0_4px_10px_rgba(138,56,245,1)]",
  series: "hover:shadow-[0_4px_10px_rgba(243,22,176,1)]",
  game: "hover:shadow-[0_4px_10px_rgba(246,80,9,1)]",
  book: "hover:shadow-[0_4px_10px_rgba(12,140,233,1)]",
};


  return (
    <div
      className={`card_div h-full ${shadowColor[type] || ""
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
            <Image
              src={thumbs}
              alt="thumbs"
            />
             Like
          </button>
          <button className="card_pass_btn">
            <Image
              src={pass}
              alt="pass"
            />
            Pass
          </button>
        </div>
      </div>
    </div>
  );
}

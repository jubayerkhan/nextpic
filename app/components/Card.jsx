"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import thumbs from "@/public/assets/thumbs-up.png";
import pass from "@/public/assets/pass.png";
import plus from "@/public/assets/plus.png";
import eye from "@/public/assets/eye.png";
import Insta from "@/public/assets/Insta.png";
import x from "@/public/assets/x.png";
import facebook from "@/public/assets/facebook.png";
import links from "@/public/assets/links.png";
import author from "@/public/assets/author.png";
import { useRef } from "react";

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
  const modalRef = useRef(null);

  const shadowColor = {
    movie: "hover:shadow-[0_4px_10px_rgba(138,56,245,1)]",
    series: "hover:shadow-[0_4px_10px_rgba(243,22,176,1)]",
    game: "hover:shadow-[0_4px_10px_rgba(246,80,9,1)]",
    book: "hover:shadow-[0_4px_10px_rgba(12,140,233,1)]",
  };

  const openModal = () => {
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  const handleClick = (e) => {
    e.preventDefault();      // stop default action
    e.stopPropagation();     // stop bubbling to parent
    alert("bookmarked!")
  };

  const avengers = [
    { name: "Robert Downey Jr.", role: "Tony Stark", img: "/assets/robert.png" },
    { name: "Chris Evans", role: "Steve Rogers", img: "/assets/evans.png" },
    { name: "Mark Ruffalo", role: "Bruce Banner", img: "/assets/mark.png" },
    { name: "Chris Hemsworth", role: "Thor", img: "/assets/chris.png" },
    { name: "Scarlett Johansson", role: "Natasha Romanoff", img: "/assets/scarlett.png" },
    { name: "Don Cheadle", role: "James Rhodes", img: "/assets/don.png" },
    { name: "Paul Rudd", role: "Scott Lang", img: "/assets/paul.png" },
    { name: "Benedict Cumberbatch", role: "Doctor Strange", img: "/assets/benedict.png" },
    { name: "Chadwick Boseman", role: "T’Challa", img: "/assets/chadwick.png" },
    { name: "Brie Larson", role: "Carlo Dancers", img: "/assets/brie.png" },
    { name: "Tom Holland", role: "Peter Parker", img: "/assets/tom.png" },
    { name: "Karen Gillan", role: "Nebula", img: "/assets/karen.png" }
  ];

  const moviePlatforms = [
    { name: "Netflix", img: "/assets/netflix.png" },
    { name: "Prime Video", img: "/assets/prime.png" },
    { name: "Disney+", img: "/assets/disney.png" },
    // { name: "Apple TV+", img: "/assets/apple.png" },
    // { name: "HBO Max", img: "/assets/hbo.png" }
  ];

  return (
    <div className="h-full">
      <div className={`card_div transition-all duration-300 ease h-full flex flex-col ${shadowColor[type] || ""}`}>
        {/* Image section */}
        <div
          className="relative overflow-hidden max-h-[303px] cursor-pointer"
          onClick={openModal}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={210}
            height={315}
            className="card_poster_img"
          />

          {/* Bookmark icon */}
          <Image
            src={bookmarkIcon}
            alt="bookmark"
            width={20}
            height={20}
            className="card_bookmark_img hover:opacity-100 md:opacity-80"
            onClick={handleClick}
          />

          {/* Rating */}
          <div className="card_rating_div">
            <FaStar /> <span className="text-white">{item.rating}/10</span>
          </div>
        </div>

        {/* Content section */}
        <div className="card_content_div flex flex-col flex-grow">
          <div className="text_section flex-grow">
            {/* Title */}
            <h3 className="card_title">{item.title}</h3>

            {/* Year and Tags */}
            <div className="card_tag_div">
              <span>{item.year}</span>
              {item.genres.map((genre, idx) => (
                <span key={idx} className="card_year">
                  {genre}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="card_description">
              {item.description}{" "}
              <span
                className="text-[#5799EF] cursor-pointer"
                onClick={openModal}
              >
                More
              </span>
            </p>
          </div>

          {/* Buttons pinned at bottom */}
          <div className="card_btn_div">
            <button className="card_like_btn">
              <Image src={thumbs} alt="thumbs" />
              Like
            </button>
            <button className="card_pass_btn">
              <Image src={pass} alt="pass" />
              Pass
            </button>
          </div>
        </div>
      </div>

      {/* popup section */}
      <dialog
        ref={modalRef}
        className="modal modal-middle sm:modal-middle w-full px-5"
        style={{ maxHeight: "100vh" }}  // limit dialog height to 90% viewport height
        onClick={(e) => {
          if (e.target === modalRef.current) {
            closeModal(); // Close when clicking outside content
          }
        }}
      >
        <div
          className="relative w-full max-w-[1440px] overflow-hidden bg-[#1F2842] md:rounded-[48px] rounded-[20px]"
          style={{ maxHeight: "90vh", overflowY: "auto" }} // make content scrollable
        >
          {/* Blurred background image */}
          <div
            className="absolute z-0 inset-0 bg-cover bg-center filter opacity-50 blur-[50px]"
            style={{
              backgroundImage: `url(${item.backgroundImage || item.image})`,
              // filter: "blur(50px)",
              // zIndex: 0,
            }}
          ></div>

          {/* Content on top */}
          <div className="relative z-10 md:py-20 pt-[68px] pb-4 md:px-12 px-[15px]">
            {/* Close button in top right */}
            <button
              onClick={closeModal}
              className="absolute md:right-12 right-3 top-4 text-white cursor-pointer md:border-1 border-white hover:border-transparent text-sm rounded-full px-5 py-2.5 z-20 flex gap-2 hover:bg-[#FF4F6D]"
            >
              <span className="hidden md:block">Close</span> ✕
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:max-w-[319px] xl:h-[479px] md:w-auto w-full rounded-[20px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={210}
                  height={315}
                  className="lg:min-w-[319px] w-full rounded-[20px]"
                />
              </div>
              <div className="bg-black/30 w-full p-6 rounded-[20px] text-white text-sm pt-2.5">
                <div>
                  <h1 className="font-bold text-[34px]">{item.title}</h1>
                  <div className="flex gap-2.5 items-center pt-2.5">
                    <p>{item.year}</p>
                    <img src="/assets/white_dot.png" alt="dot" />
                    <p>PG-13</p>
                    <img src="/assets/white_dot.png" alt="dot" />
                    <p>2h 28m</p>
                  </div>
                  {/* Rating */}
                  <div className="flex items-center gap-2.5 text-yellow-400 py-6 text-2xl font-bold">
                    <FaStar /> <span className="text-white">{item.rating}/10</span>
                  </div>
                  {/* Year and Tags */}
                  <div className="text-sm text-[#7B808F] mt-1 flex flex-wrap gap-2.5 items-center">
                    {item.genres.map((genre, idx) => (
                      <span key={idx} className="text-white px-2.5 py-0.5 rounded-full text-[14px] border-1 border-[#7B808F]">
                        {genre}
                      </span>
                    ))}
                  </div>
                  <h4 className="font-semibold pt-6 pb-2.5 text-base">Overview</h4>
                  <p className="text-base">The epic conclusion to over a decade of storytelling in the Marvel Cinematic Universe, Avengers: Endgame picks up in the aftermath of the devastating events of Infinity War (2018). With half of all life across the universe erased by Thanos snap, the remaining Avengers must regroup, mourn, and find a way to undo the destruction.</p>
                  <p className="text-base pt-6 pb-2.5"><span className="font-semibold">Directors: </span><span className="text-[#8A38F5]">Anthony Russo</span>, <span className="text-[#8A38F5]">Joe Russo</span></p>
                  <p className="text-base"><span className="font-semibold">Writers: </span><span className="text-[#8A38F5]">Christopher Markus</span>, <span className="text-[#8A38F5]">Stephen McFeely</span>, <span className="text-[#8A38F5]">Stan Lee</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* bottom popup section */}
          <div className="md:px-12 px-[15px] pb-10">
            {type === "book" ? (<h2 className="cards_popup_titles">Top Billed Cast</h2>) : (<h2 className="cards_popup_titles">Top Billed Cast</h2>)}
            <div className="flex flex-col md:flex-row gap-5 pt-6">
              {type === "book" ? (
                /* Book details section */
                <div className="w-full">
                  <div>
                    <div className="bg-black/30 p-6 rounded-[20px] text-white text-sm overflow-x-auto">
                      <table className="w-full border-separate border-spacing-y-2">
                        <tbody>
                          <tr>
                            <td className="book_popup_table">ISBN:</td>
                            <td className="book_popup_table_info">9780063453982, 0063453983</td>
                          </tr>
                          <tr>
                            <td className="book_popup_table">Published:</td>
                            <td className="book_popup_table_info">2015-02-10</td>
                          </tr>
                          <tr>
                            <td className="book_popup_table">Publisher:</td>
                            <td className="book_popup_table_info">Harper Collins</td>
                          </tr>
                          <tr>
                            <td className="book_popup_table">Author:</td>
                            <td className="book_popup_table_info">Yuval Noah Harari</td>
                          </tr>
                          <tr>
                            <td className="book_popup_table">Page count:</td>
                            <td className="book_popup_table_info">464</td>
                          </tr>
                          <tr>
                            <td className="book_popup_table">Format:</td>
                            <td className="book_popup_table_info">April 26, 2019</td>
                          </tr>
                          <tr>
                            <td className="book_popup_table">Language:</td>
                            <td className="book_popup_table_info">English</td>
                          </tr>
                          <tr>
                            <td className="book_popup_table">Country of Origin:</td>
                            <td className="book_popup_table_info">USA</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <h3 className="cards_popup_titles pt-12 pb-6">Author</h3>
                    <div
                      className="rounded-[20px] h-full overflow-hidden transition-transform duration-300 min-w-[180px] md:min-w-auto max-w-[204px]"
                    >
                      <div className="relative w-full h-48">
                        <Image src={author} alt='profile author' fill className="object-cover" />
                      </div>
                      <div className="p-4 text-center text-white bg-black/30 h-full">
                        <h4 className="font-bold text-sm">Yuval Noah Harari</h4>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Cast section */
                <div className="md:grid flex gap-4 overflow-x-auto grid-cols-2 lg:grid-cols-4 max-w-[888px] w-full">
                  {avengers.map((hero, idx) => (
                    <div
                      key={idx}
                      className="rounded-[20px] h-full overflow-hidden transition-transform duration-300 min-w-[180px] md:min-w-auto"
                    >
                      <div className="relative w-full h-48">
                        <Image src={hero.img} alt={hero.name} fill className="object-cover" />
                      </div>
                      <div className="p-4 text-center text-white bg-black/30 h-full">
                        <h4 className="font-bold text-sm">{hero.name}</h4>
                        <p className="text-xs text-white">({hero.role})</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="bg-black/30 p-6 w-full xl:max-w-[432px] lg:max-w-[380px] md:max-w-[300px] rounded-[20px] text-white relative">
                <button className="bg-[#FF4F6D] hover:bg-[#FF4F6D] w-full rounded-full text-white py-[15px] flex gap-2.5 cursor-pointer justify-center mb-2.5">
                  <Image src={plus} alt="plus" />
                  <span>Watchlist</span>
                </button>
                <button className="border-1 border-[#7B808F] w-full rounded-full text-white py-[15px] flex gap-2.5 cursor-pointer justify-center mb-6">
                  <Image src={eye} alt="eye" />
                  <span>Marked as Watched</span>
                </button>
                <p className="font-semibold">Watch Now</p>
                <div className="filter2_movies_platform_div flex-nowrap md:grid lg:grid-cols-3 grid-cols-2 md:gap-6 gap-3 flex md:flex-none overflow-x-auto md:overflow-visible pt-6">
                  {moviePlatforms.map((platform, index) => {
                    const id = `platform_new_${index + Math.random()}`;
                    return (
                      <div key={id} className="min-w-[120px] md:min-w-0"> {/* ensures horizontal scroll on mobile */}
                        <input
                          id={id}
                          type="checkbox"
                          name={`popup_movie_platform`}
                          value={platform.name}
                          className="movie-platform-checkbox"
                        />
                        <label htmlFor={id} className="popup_platform_option_div">
                          <div className="bg-white rounded-full p-3 h-[54px] w-[54px] mx-auto">
                            <img
                              src={platform.img}
                              alt={platform.name}
                              className="mx-auto w-[30px] h-[30px]"
                            />
                          </div>
                          <h5 className="filter2_option_title pt-[14px]">
                            {platform.name}
                          </h5>
                        </label>
                      </div>
                    );
                  })}
                </div>

                {/* status div */}
                <div>
                  <div className="pb-6 pt-9">
                    <h5 className="font-semibold pb-[5px]">Status</h5>
                    <p className="font-light">Released</p>
                  </div>
                  <div className="pb-6">
                    <h5 className="font-semibold pb-[5px]">Original Theatrical Release</h5>
                    <p className="font-light">April 26, 2019</p>
                  </div>
                  <div className="pb-6">
                    <h5 className="font-semibold pb-[5px]">Original Language</h5>
                    <p className="font-light">English</p>
                  </div>
                  <div className="pb-6">
                    <h5 className="font-semibold pb-[5px]">Budget</h5>
                    <p className="font-light">$160,000,000.00</p>
                  </div>
                  <div className="pb-12">
                    <h5 className="font-semibold pb-[5px]">Revenue</h5>
                    <p className="font-light">$839,030,630.00</p>
                  </div>
                </div>
                <div className="flex gap-6 justify-center items-center">
                  <span>Share</span>
                  <div className="flex gap-[15px] items-center">
                    <Image className="cursor-pointer" src={Insta} alt="Insta" />
                    <Image className="cursor-pointer" src={x} alt="x" />
                    <Image className="cursor-pointer" src={facebook} alt="facebook" />
                    <Image className="cursor-pointer" src={links} alt="links" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>


    </div>
  );
}

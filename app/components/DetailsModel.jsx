"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function DetailsModal({ item, onClose }) {
  if (!item) return null; // No modal if no item

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="bg-[#1b1b2f] rounded-2xl p-6 w-[90%] max-w-5xl max-h-[90vh] overflow-y-auto relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700"
        >
          <IoClose size={24} className="text-white" />
        </button>

        {/* Top section */}
        <div className="flex gap-6">
          {/* Poster */}
          <Image
            src={item.image}
            alt={item.title}
            width={210}
            height={315}
            className="rounded-lg"
          />

          {/* Info */}
          <div className="flex flex-col flex-1">
            <h2 className="text-3xl font-bold text-white">{item.title}</h2>
            <div className="flex items-center gap-2 mt-2 text-yellow-400">
              <FaStar /> <span className="text-white">{item.rating}/10</span>
            </div>
            <div className="flex gap-2 flex-wrap mt-2">
              {item.genres.map((g, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs rounded-full bg-gray-700 text-white"
                >
                  {g}
                </span>
              ))}
            </div>

            {/* Overview */}
            <p className="mt-4 text-gray-300">{item.description}</p>
          </div>
        </div>

        {/* Cast list */}
        {item.cast && (
          <>
            <h3 className="mt-6 mb-2 text-xl text-white">Top Billed Cast</h3>
            <div className="grid grid-cols-4 gap-4">
              {item.cast.map((actor, idx) => (
                <div key={idx} className="text-center">
                  <Image
                    src={actor.image}
                    alt={actor.name}
                    width={100}
                    height={100}
                    className="rounded-lg mx-auto"
                  />
                  <p className="text-white mt-1">{actor.name}</p>
                  <p className="text-gray-400 text-xs">{actor.role}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

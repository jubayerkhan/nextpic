import SeriesCard from "./Card";

const dummySeries = [
    {
        title: "Stranger Things",
        year: "2008",
        genres: ["Action", "Action"],
        rating: 8.9,
        description: "Batman battles the Joker, facing...",
        image: "/assets/series1.png",
    },
    {
        title: "Breaking Bad",
        year: "2008",
        genres: ["Action", "Action"],
        rating: 8.9,
        description: "Batman battles the Joker, facing...",
        image: "/assets/series2.png",
    },
    {
        title: "The Witcher 3: Wild Hunt",
        year: "2008",
        genres: ["Fantasy", "Drama"],
        rating: 9.2,
        description: "Batman battles the Joker, facing...",
        image: "/assets/series3.png",
    },
    {
        title: "The Witcher",
        year: "2019",
        genres: ["Adventure", "Fantasy"],
        rating: 8.9,
        description: "Batman battles the Joker, facing...",
        image: "/assets/series4.png",
    },
    {
        title: "Peaky Blinders",
        year: "2008",
        genres: ["Action", "Action"],
        rating: 8.9,
        description: "Batman battles the Joker, facing...",
        image: "/assets/series5.png",
    },
    {
        title: "Money Heist",
        year: "2008",
        genres: ["Action", "Action"],
        rating: 8.9,
        description: "Batman battles the Joker, facing...",
        image: "/assets/series6.png",
    },
    {
        title: "Breaking Bad",
        year: "2008",
        genres: ["Action", "Drama"],
        rating: 8.9,
        description: "Batman battles the Joker, facing...",
        image: "/assets/series2.png",
    },
    {
        title: "The Witcher",
        year: "2019",
        genres: ["Adventure", "Fantasy"],
        rating: 8.9,
        description: "Batman battles the Joker, facing...",
        image: "/assets/series4.png",
    },
];

export function SeriesGrid() {
    return (
        <div className="md:px-12 px-4">
            <h3 className="cards_section_title pt-0">Series</h3>

            {/* Responsive Container */}
            <div className="pb-6">
                <div
                    className="cards_grid_section md:overflow-visible overflow-x-auto scrollbar-hide auto-rows-fr"
                >
                    {dummySeries.map((series, index) => (
                        <div className="min-w-[207px] flex-shrink-0 md:flex-shrink md:min-w-0" key={index}>
                            <SeriesCard item={series} type="series" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Show More Button */}
            <div className="item_center mb-12">
                <button className="series_show_more_btn">
                    Show More
                </button>
            </div>
        </div>
    );
}

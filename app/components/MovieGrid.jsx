// MOVIE GRID COMPONENT
import MovieCard from "./Card";

const dummyMovies = [
    {
        title: "The Dark Knight",
        year: "2008",
        genres: ["Action", "Crime", "Sci-Fi", "Adventure"],
        rating: 8.9,
        description: "Batman battles the Joker, facing...",
        image: "/assets/movie1.png",
    },
    {
        title: "Avengers: Endgame",
        year: "2019",
        genres: ["Action", "Sci-Fi"],
        rating: 8.6,
        description: "Earth's mightiest heroes unite to fight...",
        image: "/assets/movie2.png",
    },
    {
        title: "The Shawshank Redemption",
        year: "2014",
        genres: ["Adventure", "Drama"],
        rating: 8.6,
        description: "A journey through space and time...",
        image: "/assets/movie3.png",
    },
    {
        title: "Interstellar",
        year: "1994",
        genres: ["Drama", "Adventure"],
        rating: 9.3,
        description: "A story of hope and friendship with...",
        image: "/assets/movie4.png",
    },
    {
        id: 5,
        title: "Inception",
        year: 2010,
        rating: 8.9,
        image: "/assets/movie5.png",
        genres: ["Action", "Sci-Fi"],
        description: "A thief who steals corporate secrets through dream-sharing...",
    },
    {
        id: 6,
        title: "Gladiator",
        year: 2000,
        rating: 8.5,
        image: "/assets/movie6.png",
        genres: ["Action", "Drama"],
        description: "A Roman general seeks vengeance after betrayal...",
    },
    {
        title: "The Dark Knight",
        year: "2008",
        genres: ["Action", "Crime"],
        rating: 8.9,
        description: "Batman battles the Joker, facing...",
        image: "/assets/movie1.png",
    },
    {
        title: "Interstellar",
        year: "1994",
        genres: ["Drama", "Adventure"],
        rating: 9.3,
        description: "A story of hope and friendship with...",
        image: "/assets/movie4.png",
    },
];

export function MovieGrid() {
    return (
        <div className="md:px-12 px-4">
            <h3 className="text-white text-sm pt-6 pb-[30px]">Movie</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 2xl:grid-cols-8 md:grid-cols-4 xl:grid-cols-6 gap-6 pb-6">
                {dummyMovies.map((movie, index) => (
                    <MovieCard key={index} item={movie} type="movie" />
                ))}
            </div>
        </div>
    );
}

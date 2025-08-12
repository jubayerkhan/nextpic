import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import { MovieGrid } from "./components/MovieGrid";
import { SeriesGrid } from "./components/SeriesGrid";
import { GameGrid } from "./components/GameGrid";
import { BookGrid } from "./components/BookGrid";
import FilterSecondary from "./components/FilterSecondary";
import DetailsModal from "./components/DetailsModel";

export default function Home() {
  return (
    <div className="container_fluid md:pb-20 pb-10">
      <Navbar/>
      <Filter/>
      <FilterSecondary/>
      <MovieGrid/>
      {/* <DetailsModal/> */}
      <SeriesGrid/>
      <GameGrid/>
      <BookGrid/>
    </div>
  );
}

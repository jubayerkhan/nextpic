import Navbar from "../components/Navbar";
import Filter from "../components/Filter";
import { MovieGrid } from "../components/MovieGrid";
import { SeriesGrid } from "../components/SeriesGrid";
import { GameGrid } from "../components/GameGrid";
import { BookGrid } from "../components/BookGrid";
import FilterPopup from "../components/FilterPopup";

export default function HomeS() {
  return (
    <div className="container_fluid md:pb-20 pb-10">
      <Navbar/>
      <Filter/>
      <FilterPopup/>
      <MovieGrid/>
      <SeriesGrid/>
      <GameGrid/>
      <BookGrid/>
    </div>
  );
}

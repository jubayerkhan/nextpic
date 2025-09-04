import NavbarCompact from "../components/NavbarCompact";
import FilterCompact from "../components/FilterCompact";
import { MovieGrid } from "../components/MovieGrid";
import { SeriesGrid } from "../components/SeriesGrid";
import { GameGrid } from "../components/GameGrid";
import { BookGrid } from "../components/BookGrid";
import FilterPopup from "../components/FilterPopup";

export default function HomeS() {
  return (
    <div className="container_fluid md:pb-20 pb-10">
      <NavbarCompact/>
      <FilterCompact/>
      <FilterPopup/>
      <MovieGrid/>
      <SeriesGrid/>
      <GameGrid/>
      <BookGrid/>
    </div>
  );
}

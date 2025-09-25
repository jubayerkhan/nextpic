import NavbarCompact from "../components/NavbarCompact";
import FilterMood from "../components/FilterMood";
import { MovieGrid } from "../components/MovieGrid_3";
import { SeriesGrid } from "../components/SeriesGrid_2";
import { BookGrid } from "../components/BookGrid_2";
import FilterPopup from "../components/FilterPopup";

export default function HomeS() {
  return (
    <div className="container_fluid pb-10">
      <NavbarCompact/>
      <FilterMood/>
      <MovieGrid/>
      <SeriesGrid/>
      {/* <GameGrid/> */}
      <BookGrid/>
    </div>
  );
}

import NavbarCompact from "../components/NavbarCompact";
import FilterMood from "../components/FilterMood";
import { MovieGrid } from "../components/MovieGrid_3";
import { SeriesGrid } from "../components/SeriesGrid_3";
import { BookGrid } from "../components/BookGrid_3";
import FilterPopup from "../components/FilterPopup";

export default function HomeS() {
  return (
    <div className="container_fluid pb-10">
      <NavbarCompact/>
      <FilterMood/>
      <MovieGrid/>
      <SeriesGrid/>
      <BookGrid/>
    </div>
  );
}

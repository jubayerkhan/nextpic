import NavbarCompact from "../components/NavbarCompact";
import FilterCompact_2 from "../components/FilterCompact_2";
import { MovieGrid } from "../components/MovieGrid_2";
import { SeriesGrid } from "../components/SeriesGrid_2";
import { BookGrid } from "../components/BookGrid_2";

export default function HomeS() {
  return (
    <div className="container_fluid pb-10">
      <NavbarCompact/>
      <FilterCompact_2/>
      <MovieGrid/>
      <SeriesGrid/>
      <BookGrid/>
    </div>
  );
}

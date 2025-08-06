import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import { MovieGrid } from "./components/MovieGrid";

export default function Home() {
  return (
    <div className="container_fluid">
      <Navbar/>
      <Filter/>
      <MovieGrid/>
    </div>
  );
}

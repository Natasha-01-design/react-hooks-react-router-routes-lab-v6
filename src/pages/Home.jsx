import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const moviesData = [
  { id: 1, title: "Doctor Strange" },
  { id: 2, title: "The Imitation Game" },
  { id: 3, title: "Sherlock" },
];

function Home() {
  const [movies] = useState(moviesData);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h2>{movie.title}</h2>
              <Link to={`/movie/${movie.id}`}>View Info</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Home;

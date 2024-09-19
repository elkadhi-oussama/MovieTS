import React, { useState } from 'react'; // Importing React and useState hook for managing component state
import { Link } from 'react-router-dom'; // Importing Router components for navigation

// Defining the structure of a Movie object
interface Movie {
  id: number; // Unique identifier for the movie
  title: string; // Title of the movie
  image: string; // URL of the movie poster image
  rate: number; // Movie rating
  decr: string; // Description of the movie
  stream: string; // Streaming link for the movie
  lang: string; // Language of the movie
  genre: string; // Genre of the movie
  downlaod: string; // Download link for the movie
}

// Defining props for AllMovie component
interface AllMovieProps {
  movies: Movie[]; // Array of movies passed as props
}

// AllMovie component definition
const AllMovie: React.FC<AllMovieProps> = ({ movies }) => {
  // State for managing search inputs
  const [searchTitle, setSearchTitle] = useState(''); // Title search input
  const [searchRate, setSearchRate] = useState<number | null>(null); // Minimum rating search input
  const [searchLang, setSearchLang] = useState('ALL'); // Language filter
  const [searchGenre, setSearchGenre] = useState('ALL'); // Genre filter

  // Filtering movies based on search criteria
  const filteredMovies = movies.filter(movie => {
    // Checking if the movie title matches the search title
    const matchesTitle = movie.title.toLowerCase().includes(searchTitle.toLowerCase());
    // Checking if the movie rating meets the minimum rating
    const matchesRate = searchRate ? movie.rate >= searchRate : true;
    // Checking if the movie language matches the selected language
    const matchesLang = searchLang === 'ALL' || movie.lang === searchLang;
    // Checking if the movie genre matches the selected genre
    const matchesGenre = searchGenre === 'ALL' || movie.genre === searchGenre;

    // Returning true if all conditions match
    return matchesTitle && matchesRate && matchesLang && matchesGenre;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-center mb-5">Movie App</h1>
      
      {/* Search Inputs */}
      <div className="mb-5">
        {/* Input for searching by title */}
        <input
          type="text"
          placeholder="Search by title"
          value={searchTitle}
          onChange={e => setSearchTitle(e.target.value)} // Updating title search state on input change
          className="p-2 border rounded mr-2"
        />
        {/* Input for searching by minimum rating */}
        <input
          type="number"
          placeholder="Minimum rating"
          value={searchRate || ''} // Handling null value for controlled input
          onChange={e => setSearchRate(e.target.value ? Number(e.target.value) : null)} // Updating rating search state
          className="p-2 border rounded mr-2"
        />
        {/* Dropdown for language selection */}
        <select
          value={searchLang}
          onChange={e => setSearchLang(e.target.value)} // Updating language filter on selection change
          className="p-2 border rounded mr-2"
        >
          <option value="ALL">All</option>
          <option value="EN">English</option>
          <option value="AR">Arabic</option>
        </select>
        {/* Dropdown for genre selection */}
        <select
          value={searchGenre}
          onChange={e => setSearchGenre(e.target.value)} // Updating genre filter on selection change
          className="p-2 border rounded"
        >
          <option value="ALL">All</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
        </select>
      </div>

      {/* Grid layout for displaying filtered movies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredMovies.map(movie => (
          <div key={movie.id} className="bg-white rounded-lg shadow-md p-4">
            {/* Movie poster */}
            <img src={movie.image} alt={movie.title} className="w-full h-48 object-cover rounded-t-lg" />
            {/* Movie title */}
            <h2 className="text-xl font-semibold mt-2">{movie.title}</h2>
            {/* Movie rating */}
            <p className="text-gray-600">Rating: {movie.rate}</p>
            {/* Movie description */}
            <p className="mt-2">{movie.decr}</p>
            {/* Link to watch the movie */}
            <Link to={`/movie/${movie.id}`} className="text-blue-500 underline mt-2 block">
              Watch Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exporting AllMovie component for use in other parts of the application
export default AllMovie;

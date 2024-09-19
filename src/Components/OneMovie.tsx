// src/OneMovie.tsx
import React from 'react'; // Importing React library
import { useParams, Link } from 'react-router-dom'; // Importing hooks from react-router-dom for routing

// Defining the Movie interface to specify the structure of movie objects
interface Movie {
  id: number; // Unique identifier for the movie
  title: string; // Title of the movie
  image: string; // URL of the movie poster image
  rate: number; // Rating of the movie
  decr: string; // Description of the movie
  stream: string; // Link to stream the movie
  lang: string; // Language of the movie
  genre: string; // Genre of the movie
  downlaod: string; // Link to download the movie
}

// Defining the props for the OneMovie component
interface OneMovieProps {
  movies: Movie[]; // Array of movie objects
}

// OneMovie functional component
const OneMovie: React.FC<OneMovieProps> = ({ movies }) => {
  // Using useParams to access the URL parameter (movie ID)
  const { id } = useParams<{ id: string }>();
  
  // Finding the specific movie based on the ID from the URL
  const movie = movies.find(movie => movie.id.toString() === id);

  // If the movie is not found, display a message
  if (!movie) {
    return <div className="text-center mt-10">Movie not found!</div>;
  }

  return (
    // Main container with max width and background color
    <div className="max-w-4xl mx-auto bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        {/* Movie image with full width and height */}
        <img 
          src={movie.image} 
          alt={movie.title} 
          className="w-full h-96 object-cover" // Ensures the image covers the container
        />
        {/* Gradient overlay on the image for styling */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="p-6"> {/* Padding around the movie details */}
        <h2 className="text-4xl font-bold mb-2">{movie.title}</h2> {/* Movie title */}
        <div className="flex justify-between mb-4"> {/* Flex container for rating and language/genre */}
          <span className="text-yellow-400 font-semibold">Rating: {movie.rate}</span> {/* Movie rating */}
          <span className="text-gray-400">{movie.lang} | {movie.genre}</span> {/* Language and genre */}
        </div>
        <p className="text-gray-300 mb-4">{movie.decr}</p> {/* Movie description */}

        {/* Button to stream the movie */}
        <a
          href={movie.stream} // Streaming link
          target="_blank" // Opens link in a new tab
          rel="noopener noreferrer" // Security for external links
          className="bg-red-600 text-white py-3 px-6 rounded hover:bg-red-700 transition duration-200 block text-center"
        >
          Watch Now
        </a>
        
        <div className="mt-4">
          {/* Link to go back to the movie list */}
          <Link to="/" className="text-gray-400 underline hover:text-gray-300">
            Back to Movie List
          </Link>
        </div>
      </div>
    </div>
  );
};

// Exporting the OneMovie component to use in other parts of the app
export default OneMovie;

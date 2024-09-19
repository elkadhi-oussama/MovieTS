// src/App.tsx
import React from 'react'; // Importing React and useState hook for state management
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing Router components for routing
import movies from './data'; // Importing movie data from the data file
import OneMovie from './Components/OneMovie'; // Importing OneMovie component for displaying a single movie
import AllMovie from './Components/AllMovie'; // Importing AllMovie component for displaying the list of movies

// Main App component
const App: React.FC = () => {
  return (
    // Wrapping the application with Router to enable routing functionality
    <Router>
      {/* Main container with a minimum height and background styling */}
      <div className="min-h-screen bg-gray-100 p-5">
       
        {/* Defining routes for the application */}
        <Routes>
          {/* Route for the home page, displaying all movies */}
          <Route path="/" element={<AllMovie movies={movies} />} />
          {/* Route for the movie details page, displaying a single movie based on its ID */}
          <Route path="/movie/:id" element={<OneMovie movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

// Exporting the App component for use in the entry file (index.tsx)
export default App;

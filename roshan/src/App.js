
import './App.css';


// react slick 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Routes,Route } from 'react-router-dom';

import HomePage from './pages/Home.Page';
import PlayPage from './pages/Play.Page';
import MoviePage from './pages/Movie.Page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
  );
}

export default App;

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MovieDetailPage from './Pages/MovieDetailPage';
import TvShowDetailPage from './Pages/TvShowDetailPage';
import SearchResultsPage from './Pages/SearchResultsPage';
import ProfilePage from './Pages/ProfilePage';
import LogIn from './Pages/LogIn';
import RegisterPage from './Pages/RegisterPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import NotFoundPage from './Pages/NotFoundPage';
import GenrePage from './Pages/GenrePage';
import Watchlistpage from './Pages/WatchListpage';
import SettingsPage from './Pages/SettingsPage';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/tv/:id" element={<TvShowDetailPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/genre/:genre" element={<GenrePage />} />
        <Route path="/watchlist" element={<Watchlistpage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

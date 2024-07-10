import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import TicketBooking from './components/TicketBooking';
import FinalTicket from './components/FinalTicket';
import EventList from './components/EventList';
import './App.css';
 
const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/book/:id" element={<TicketBooking />} />
          <Route path="/ticket/:id" element={<FinalTicket />} />
          <Route path="/events" element={<EventList />} />
        </Routes>
      </div>
    </Router>
  );
};
 
export default App;
 
 
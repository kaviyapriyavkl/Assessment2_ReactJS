import React from 'react';
import './EventList.css';

const events = [
  { id: 1, title: 'Event 1', image: 'https://marketplace.canva.com/EAFIygYzkes/1/0/1131w/canva-blue-minimalist-concert-music-cover-poster-CGNgQz4KqL0.jpg' },
  { id: 2, title: 'Event 2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStigdTJG-yYAYLuFwCS9p_ARvFIKagoBC_7w&s' },
  { id: 3, title: 'Event 3', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFbTBTe_fucP6gpumnu2UIEkEpyPiO5OBAow&s' },
];

const EventsPage = () => {
  return (
    <div className="events-page">
      <header className="header">
        <h1>Upcoming Events</h1>
      </header>
      <div className="events-grid">
        {events.map(event => (
          <div className="event-card" key={event.id}>
            <img src={event.image} alt={event.title} />
            <div className="event-title">{event.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;

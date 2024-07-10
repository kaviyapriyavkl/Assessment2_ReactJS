import React from 'react';
import './EventList.css';

const events = [
  { id: 1, title: 'Event 1', image: 'path/to/event1.jpg' },
  { id: 2, title: 'Event 2', image: 'path/to/event2.jpg' },
  { id: 3, title: 'Event 3', image: 'path/to/event3.jpg' },
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

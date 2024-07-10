import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TicketBooking.css';

const TicketBooking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState('');
  const [showTime, setShowTime] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [movieTitle, setMovieTitle] = useState(''); // State to hold movie title

  // Example function to fetch movie title based on id
  useEffect(() => {
    const fetchMovieTitle = async () => {
      try {
        const response = await fetch(`api/movies/${id}`); // Replace with your API endpoint
        if (response.ok) {
          const data = await response.json();
          setMovieTitle(data.title); // Set movie title from API response
        } else {
          console.error('Failed to fetch movie details');
        }
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    if (id) {
      fetchMovieTitle();
    }
  }, [id]);

  const dates = [
    '2024-07-10',
    '2024-07-11',
    '2024-07-12',
  ];

  const showTimes = [
    '06:00 - 09:00',
    '09:30 - 12:00',
    '12:30 - 15:30',
    '16:00 - 19:00',
    '19:30 - 22:30',
    '23:00 - 02:00',
    '02:30 - 05:30',
  ];

  const seatLayout = [
    ['A', [1, 2, 3, 4, 5, 6, 7, 8]],
    ['B', [1, 2, 3, 4, 5, 6, 7, 8]],
    ['C', [1, 2, 3, 4, 5, 6, 7, 8]],
    ['D', [1, 2, 3, 4, 5, 6, 7, 8]],
    ['E', [1, 2, 3, 4, 5, 6, 7, 8]],
  ];

  const handleSeatClick = (row, seat) => {
    const seatId = `${row}${seat}`;
    setSelectedSeats(prevSelectedSeats =>
      prevSelectedSeats.includes(seatId)
        ? prevSelectedSeats.filter(s => s !== seatId)
        : [...prevSelectedSeats, seatId]
    );
  };

  const handleBooking = () => {
    if (!selectedDate) {
      alert('Please select a date.');
      return;
    }
    if (!showTime) {
      alert('Please select a show time.');
      return;
    }
    if (quantity < 1) {
      alert('Please select at least one seat.');
      return;
    }
    if (selectedSeats.length < quantity) {
      alert('Please select the correct number of seats.');
      return;
    }
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    const bookingDetails = {
      movieName: movieTitle, // Use fetched movie title here
      date: selectedDate,
      showTime,
      quantity: selectedSeats.length, // Adjusted to reflect the number of selected seats
      seatNumbers: selectedSeats,
      paymentMethod,
    };

    const bookingDetailsString = JSON.stringify(bookingDetails);
    navigate(`/ticket/${encodeURIComponent(bookingDetailsString)}`);
  };

  return (
    <div className="ticket-booking">
      <nav className="tic-navbar">
        <h1 style={{ color: 'white' }}>Book Tickets</h1>
      </nav>
      <div className='tic-box'>
        <label>
          Select Date:<br />
          <div className="date-buttons">
            {dates.map((date, index) => (
              <button
                key={index}
                className={`date-button ${selectedDate === date ? 'selected' : ''}`}
                onClick={() => setSelectedDate(date)}
              >
                {new Date(date).toDateString()}
              </button>
            ))}
          </div>
        </label>
        <br />
        <label>
          Available Show Timings:<br />
          <div className="showtime-buttons">
            {showTimes.map((time, index) => (
              <button
                key={index}
                className={`showtime-button ${showTime === time ? 'selected' : ''}`}
                onClick={() => setShowTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </label>
        <br />
        <label>
          Number of Seats:<br />
          <input
            className="ip"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            min="1"
          />
        </label>
        <br />
        <div className="seat-grid">
          {seatLayout.map(([row, seats]) => (
            <div key={row} className="seat-row">
              <span>{row}</span>
              {seats.map(seat => {
                const seatId = `${row}${seat}`;
                return (
                  <button
                    key={seat}
                    className={`seat ${selectedSeats.includes(seatId) ? 'selected' : ''}`}
                    onClick={() => handleSeatClick(row, seat)}
                  >
                    {seat}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
        <br />
        <label>
          Payment Method:<br />
          <select
            className="ip"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Select Payment Method</option>
            <option value="credit-card">Credit Card</option>
            <option value="debit-card">Debit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </label>
        <br />
        <button onClick={handleBooking} className='ticbutton'>Book Now</button>
      </div>
    </div>
  );
};

export default TicketBooking;

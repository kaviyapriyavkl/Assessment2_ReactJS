import React from 'react';
import { useParams } from 'react-router-dom';
import QRCode from 'qrcode.react';
import './FinalTicket.css';

const FinalTicket = () => {
  const { id } = useParams();
  const bookingDetails = JSON.parse(decodeURIComponent(id));

  return (
    <div className="final-ticket">
      <nav className="fin-navbar"><h1>Your Ticket</h1></nav>
      
      <div className="ticket-content">
        <div className="qr-code">
          <QRCode value={JSON.stringify(bookingDetails)} />
        </div>
        <div className="ticket-details">
          <p>Movie ID: {bookingDetails.movieId}</p>
          <p>Date: {bookingDetails.date}</p>
          <p>Show Time: {bookingDetails.showTime}</p>
          <p>Quantity: {bookingDetails.quantity}</p>
          <p>Seat Numbers: {Array.isArray(bookingDetails.seatNumbers) ? bookingDetails.seatNumbers.join(', ') : 'N/A'}</p>
          <p>Payment Method: {bookingDetails.paymentMethod}</p>
        </div>
      </div>
    </div>
  );
};

export default FinalTicket;

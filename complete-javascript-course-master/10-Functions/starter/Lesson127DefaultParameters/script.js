'use strict';

const bookings = [];

const createBooking = (
  flightNum = 'A1',
  numPassengers = 1,
  price = 199 * numPassengers
) => {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('AC120', 1000, 1200);

createBooking('AC120', 1000, 1200);

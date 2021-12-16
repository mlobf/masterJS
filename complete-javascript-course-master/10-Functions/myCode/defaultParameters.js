'use strict';


const arrBooking = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
    // ES5
    //numPassengers = numPassengers || 1;
    //price = price || 199;


    const booking = {
        flightNum,
        numPassengers,
        price
    };
    console.log(booking);
    arrBooking.push(booking);
};

createBooking('HM123');
createBooking('HM123', 3,);

// To skipped a default parameter.....
createBooking('HM123', undefined, 3,);
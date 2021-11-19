import { Container, Grid, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
  {
    id: 1,
    name: "SANROCK U52",
    time: "FLY TIME 30-45 MINUTES",
    space: 12,
  },
  {
    id: 2,
    name: "ZENFOLT XPA7",
    time: "FLY TIME 60-70 MINUTES",
    space: 8,
  },
  {
    id: 3,
    name: "IOKUKI M11",
    time: "FLY TIME 50 MINUTES",
    space: 9,
  },
  {
    id: 4,
    name: "UranHub Foldable GPS",
    time: "FLY TIME 35 MINUTES",
    space: 5,
  },
  {
    id: 5,
    name: "SANROCK U52",
    time: "FLY TIME 29 MINUTES",
    space: 10,
  },
  {
    id: 6,
    name: "SANROCK H859",
    time: "FLY TIME 35 MINUTES",
    space: 16,
  },
];

const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', mb: 3 }}>Available Products on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Your Products Booked successfully!</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    >
                    </Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;
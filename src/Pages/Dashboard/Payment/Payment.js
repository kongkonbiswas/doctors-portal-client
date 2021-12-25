import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm';
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51JzwJ8GoAlDvNZtinKg0yuP1zoc2o1suiGZQBeheaTzJyW26PN1aO4hc0GBruP1rI7hs1PTYxkduSK0wErz9CTRK00ZObptXcU"
);

const Payment = () => {
    const {appointmentId} = useParams()
    const [appointment, setAppointment] = useState({})
    useEffect( () => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
        .then(res => res.json())
        .then(data => setAppointment(data));
    }, [appointmentId])
    return (
      <div>
        <h2>
          Please pay for :{appointment.patientName} for{" "}
          {appointment.serviceName}
        </h2>
        <h4>Pay: ${appointment.price}</h4>
        {appointment?.price &&  <Elements stripe={stripePromise}>
          <CheckoutForm
          appointment = {appointment}
          />
        </Elements>}
      </div>
    );
};

export default Payment;
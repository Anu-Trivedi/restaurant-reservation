import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// Import Utility Functions
import { createReservation } from "../utils/api";
import { formatAsDate } from "../utils/date-time";


// Import Components
import ReservationForm from "./ReservationForm";
import ErrorAlert from "../layout/ErrorAlert";


function NewReservation() {
  const history = useHistory();

  const initialFormData = {
    first_name: "",
    last_name: "",
    mobile_number: "",
    reservation_date: "",
    reservation_time: "",
    people: "",
  };

  const [reservationForm, setReservationForm] = useState({
    ...initialFormData,
  });
  const [error, setError] = useState(null);

  // Change handler function
  const handleChange = ({ target: { name, value } }) => {
    setReservationForm({
      ...reservationForm,
      [name]: value,
    });
  };


  // Submit handler function
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const errors = [];
    if (errors.length) {
      setError({ message: errors });
      return;
    }

    reservationForm.people = Number(reservationForm.people);
    createReservation(reservationForm)
      .then(() => {
        history.push(
          `/dashboard?date=${formatAsDate(reservationForm.reservation_date)}`
        );
      })
      .catch(setError);
  };

  // const handlePhoneNumber = (event) => {
  //   const phoneNumber = event.target;  
  //   phoneNumber.addEventListener("invalid", ({ target }) => {
  //     target.setCustomValidity("Please enter phone number in xxx-xxx-xxxx format");
  //   });
  //   phoneNumber.addEventListener("change", ({ target }) => {
  //     target.setCustomValidity("");
  //   });

  // }

  return (
    <main>
      <h1>New Reservation</h1>
      <ErrorAlert error={error} />
      <ReservationForm
        formData={reservationForm}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        // handlePhoneNumber={handlePhoneNumber}
      />
    </main>
  );
}

export default NewReservation;

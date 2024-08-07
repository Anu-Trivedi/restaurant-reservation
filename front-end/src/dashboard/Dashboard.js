import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// Import Utility Functions
import { next, previous, today } from "../utils/date-time";
import { listReservations } from "../utils/api";

// Import Components
import ReservationList from "../reservations/ReservationList";
import ErrorAlert from "../layout/ErrorAlert";

/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard({ date }) {
  const [reservations, setReservations] = useState([]);
  const [reservationsError, setReservationsError] = useState(null);

  const history = useHistory();

  useEffect(loadDashboard, [date]);

  function loadDashboard() {
    const abortController = new AbortController();
    setReservationsError(null);
    listReservations({ date }, abortController.signal)
      .then(setReservations)
      .catch(setReservationsError);
    return () => abortController.abort();
  }

  // Functionality for Previous and Next day buttons
  function previousDay(date) {
    const previousDate = previous(date);
    history.push(`/dashboard?date=${previousDate}`);
  }

  function nextDay(date) {
    const nextDate = next(date);
    history.push(`/dashboard?date=${nextDate}`);
  }

  return (
    <main>
      <h1>Dashboard</h1>
      <div className="d-md-flex mb-3">
        <h4 className="mb-0">Today's Date: {date}</h4>
      </div>

      <div className="btn-toolbar mb-2 mb-md-0">
        <div className="btn-group me-2">
          <button
            type="button"
            className="btn btn-secondary m-1 mt-2"
            onClick={() => previousDay(date)}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-primary m-1 mt-2"
            onClick={() => history.push(`/dashboard?date=${today()}`)}
          >
            Today
          </button>
          <button
            type="button"
            className="btn btn-secondary m-1 mt-2"
            onClick={() => nextDay(date)}
          >
            Next
          </button>
        </div>
      </div>

      <ErrorAlert error={reservationsError} />
      <ReservationList
        reservations={reservations}
        loadDashboard={loadDashboard}
      />
    </main>
  );
}

export default Dashboard;

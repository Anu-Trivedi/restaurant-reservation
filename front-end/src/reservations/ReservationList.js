import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// Import Components
import CancelReservation from "./CancelReservation";

function ReservationList({ reservations, loadDashboard }) {
  const reservationsRows = reservations.map((reservation) => (
    <tr key={reservation.reservation_id}>
      <td>{reservation.first_name}</td>
      <td>{reservation.last_name}</td>
      <td>{reservation.mobile_number}</td>
      <td>{reservation.reservation_date}</td>
      <td>{reservation.reservation_time}</td>
      <td>{reservation.people}</td>

      <td
        data-reservation-id-status={reservation.reservation_id}
        className={
          reservation.status === "booked"
            ? "text-light bg-info"
            : reservation.status === "cancelled"
            ? "text-light bg-danger"
            : "text-light bg-success"
        }
      >
        {reservation.status}
      </td>

      {reservation.status === "booked" ? (
        <>
          <td>
            {/* <a
              href={`/reservations/${reservation.reservation_id}/seat`}
              className="btn btn-primary btn-sm ml-3"
            > */}
            <Link
              className="btn btn-primary btn-sm ml-3"
              to={`/reservations/${reservation.reservation_id}/seat`}
            >
              Seat
            </Link>
            {/* </a> */}
          </td>
          <td>
            {/* <a
              href={`/reservations/${reservation.reservation_id}/edit`}
              className="btn btn-secondary btn-sm"
            > */}
            <Link
              className="btn btn-secondary btn-sm"
              to={`/reservations/${reservation.reservation_id}/edit`}
            >
              Edit
            </Link>

            {/* </a> */}
          </td>
          <td>
            <CancelReservation
              reservation_id={reservation.reservation_id}
              loadDashboard={loadDashboard}
            />
          </td>
        </>
      ) : null}
    </tr>
  ));

  return (
    <main>
      <div className="d-md-flex mt-3">
        <h4>Reservations</h4>
      </div>
      <div className="table-responsive">
        <table className="table table-sm w-80 striped text-center mb-5">
          <thead>
            <tr className="text-secondary bg-light bg-gradient">
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Reservation Date</th>
              <th scope="col">Reservation Time</th>
              <th scope="col">#People</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="table-group-divider">{reservationsRows}</tbody>
        </table>
      </div>
    </main>
  );
}

export default ReservationList;

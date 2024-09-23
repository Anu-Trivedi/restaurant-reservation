
# Restaurant Reservation System

Restaurant Reservation System is a full-stack restaurant reservation management application designed for restaurant owners and employees.
Users can create, view, and edit reservations as well as manage table seating settings.

## Live Project

- [Frontend Deployment](https://restaurant-reservations-men8.onrender.com)
- [Backend Deployment](https://restaurant-reservation-backend-ndd6.onrender.com)

## Technology Used

#### Frontend:

- JavaScript, React, React Router, HTML, CSS, Bootstrap

#### Backend:

- Node.js, Express, Knex, PostgreSQL

## API Overview:

The API allows for the following routes:

| Method   | Route                                  | Description                              |
| -------- | -------------------------------------- | ---------------------------------------- |
| `GET`    | `/reservations`                        | List all reservations for current date   |
| `GET`    | `/reservations?date=YYYY-MM-DD`        | List all reservations for specified date |
| `POST`   | `/reservations`                        | Create new reservation                   |
| `GET`    | `/reservations/:reservation_id`        | List reservation by ID                   |
| `PUT`    | `/reservations/:reservation_id`        | Update reservation                       |
| `PUT`    | `/reservations/:reservation_id/status` | Update reservation status                |
| `GET`    | `/tables`                              | List all tables                          |
| `POST`   | `/tables`                              | Create new table                         |
| `PUT`    | `/tables/:table_id/seat`               | Assign a table to a reservation          |
| `DELETE` | `/tables/:table_id/seat`               | Remove reservation from a table          |

## Installation

1. Clone this repository `git clone https://github.com/Anu-Trivedi/restaurant-reservation.git`.
1. Navigate to the project directory using `cd restaurant-reservation`.
1. Run `cp ./back-end/.env.sample ./back-end/.env`.
1. Update the `./back-end/.env` file with the connection URL's to your database instance.
1. Run `cp ./front-end/.env.sample ./front-end/.env`.
1. You should not need to make changes to the `./front-end/.env` file unless you want to connect to a backend at a location other than `http://localhost:5001`.
1. Run `npm install` to install project dependencies.
1. Run `npm run start:dev` to start your server in development mode.

## Running Tests

This project includes a set of tests that can be run using the command line. To run all the tests use the following commands:

- npm test runs all tests.
- npm run test:backend runs all backend tests.
- npm run test:frontend runs all frontend tests.
- npm run test:1 runs all the tests for user story 1 (both frontend and backend).
- npm run test:3:backend runs only the backend tests for user story 3.
- npm run test:3:frontend runs only the frontend tests for user story 3.
- npm run test:e2e runs only the end-to-end tests.



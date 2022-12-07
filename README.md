# Reservation Management System

In this system staff can see the upcoming reservation of users along with shift, status, no of seats, reservation start & end time also filter out the reservation by applying filters such as user name and surname, by reserved date, by reserved area, by reserved shift, by reservation status

## Features

- List of upcoming reservations
- Filter reservations by date / status / shift / area / user
- Sort reservations (Ascending, descending)
- Search by user name from upcoming reservation

## Folder Structure

```.
├── __fixtures__
│   └── all-reservation-response.ts
├── __snapshots__
│   └── App.test.tsx.snap
├── components
│   ├── organisms
│   │   ├── index.ts
│   │   ├── ReservationFilter.tsx
│   │   └── ReservationList.tsx
│   └── index.ts
├── helpers
│   ├── constants
│   │   ├── api-messages.ts
│   │   ├── index.ts
│   │   ├── lists.ts
│   │   └── ui-text.ts
│   └── utils
│       ├── dateFormatter.ts
│       ├── fetcher.test.ts
│       ├── fetcher.ts
│       ├── getFilterReservations.test.ts
│       ├── getFilterReservations.ts
│       ├── getUpcomingReservations.test.ts
│       ├── getUpcomingReservations.ts
│       └── index.ts
├── hooks
│   ├── index.ts
│   ├── useAppDisptach.ts
│   └── useAppSelector.ts
├── middlewares
│   ├── ErrorBoundry.tsx
│   └── index.ts
├── models
│   ├── FilterReservation.ts
│   ├── index.ts
│   └── Reservation.ts
├── state-management
│   ├── actions
│   │   ├── index.ts
│   │   ├── ReservationAction.test.ts
│   │   └── ReservationAction.ts
│   ├── reducers
│   │   ├── index.ts
│   │   └── ReservationReducer.ts
│   ├── store
│   │   └── index.ts
│   └── index.ts
├── templates
│   ├── __snapshots__
│   │   ├── AllReservations.test.tsx.snap
│   │   └── NotFound.test.tsx.snap
│   ├── AllReservations.test.tsx
│   ├── AllReservations.tsx
│   ├── index.ts
│   ├── NotFound.test.tsx
│   └── NotFound.tsx
├── theme
│   ├── color.ts
│   └── index.ts
├── App.css
├── App.test.tsx
├── App.tsx
├── index.css
├── index.tsx
├── logo.svg
├── react-app-env.d.ts
├── reportWebVitals.ts
└── setupTests.ts
```

## Installation

Install Reservation-Management-System with npm

```bash
  nvm use (to set version, avoid from incompatibility of peer dependencies)
  npm install
```
## Start project

To start the project, run the following command

```bash
  npm start
```
This command will up client and server concurrently.
run server on `localhost:1996` & run client on `localhost:3000`.
## Format & linting of code

To format & lint, run the following command

```bash
  npm run format (this command will prettify you code)
  npm run lint (this will find lint error in your code)
```

## Test cases & code coverage

To run test cases and code coverge, run the following command

```bash
  npm run test (for all test to run)
  npm run test RelativePath/to/testfile (for specific test file to run)
  npm run coverage (to get the commulative report of code coverage also can see code coverage UI by open the index.html file from coverage folder)
```
## API Reference

#### Reservation Schema

| Parameter     | Type       | Description                      |
| :------------ | :--------- | :------------------------------- |
| `id`          | `int`      | **Required**. Reservation id     |
| `businessDate`| `string`   | **Required**. Reservation Date   |
| `status`      | `string`   | **Required**. Reservation Status |
| `shift`       | `string`   | **Required**. Reservation Shift  |
| `start`       | `string`   | **Required**. Reservation Start  |
| `end`         | `string`   | **Required**. Reservation End    |
| `quantity`    | `int`      | **Required**. Reservation Seats  |
| `customer`    | `object`   | **Required**. Customer           |
| `firstName`   | `string`   | **Required**. Customer First Name|
| `lastName`    | `string`   | **Required**. Customer Last Name |
| `area`        | `string`   | **Required**. Reservation Area   |
| `guestNotes`  | `string`   | **Required**. Customer Feedback  |

#### Get Tasks

```http
  GET /reservations
```

To get all reservations.
## Approach 
[Main steps followed to build that project](./src/APPROACH.md)
## Tech Stack

**Client:** `React`, `Redux`, `Thunk`, `Antd UI`, `Jest with RTL`

**Server:** `Json-Server`

## Authors

- [@saqlain](https://www.github.com/saqlain11)

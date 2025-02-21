# Doctor Appointment System

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Running the Application](#running-the-application)
- [Assumptions & Design Decisions](#assumptions--design-decisions)
- [API Endpoints](#api-endpoints)
- [Deployed Links](#deployed-links)

---

## Project Overview

The **Doctor Appointment System** allows users to book, view, edit, and cancel doctor appointments. It features an intuitive UI for managing appointments efficiently.

---

## Installation

### Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/neeru0713/babyStepsAssignment.git
   cd babyStepsAssignment/backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the `backend` directory and add:
     ```sh
     PORT=8080
     MONGODB_URL=your_mongodb_connection_string
     ```
4. Start the backend server:
   ```sh
   npm start
   ```
   The backend will run at `http://localhost:8080`.

### Frontend Setup

1. Navigate to the frontend directory in a new terminal:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm run dev
   ```
   The frontend will run at `http://localhost:5173`.

---

## Running the Application

1. Start the backend (`npm start` in `backend` directory).
2. Start the frontend (`npm run dev` in `frontend` directory).
3. Open `http://localhost:5173` in the browser to use the application.

---

## Assumptions & Design Decisions

- **Authentication:** No Authentication is implemented as per the project scope.
- **Date & Time Handling:** Appointments are stored in UTC format and converted to the user's local timezone on the frontend.
- **State Management:** Redux is used to manage application state.
- **Styling:** Tailwind CSS is used for a responsive UI.
- **API Calls:** Axios is used for making HTTP requests.
- **Error Handling:** Backend and frontend have error-handling mechanisms to handle API failures and validation errors gracefully.

---

## API Endpoints

### Appointments

- `POST /api/appointments` - Book an appointment
- `GET /api/appointments` - Get all appointments
- `PUT /api/appointments/:id` - Update an appointment
- `DELETE /api/appointments/:id` - Cancel an appointment

### Doctors

- `GET /api/doctors` - Get list of available doctors
- `GET /api/doctors/:id` - Get doctor details
- `GET /doctors/:id/slots?date=YYYY-MM-DD` - Get slots for doctor

---

## Deployed Links

- **Frontend:** [Live Application](https://baby-steps-assignment-lime.vercel.app/)  
- **Backend:** [API Server](https://babystepsassignment.onrender.com)


# 🏥 Healthcare Backend System

A backend system for a healthcare application built with **Node.js**, **Express.js**, **PostgreSQL**, and **Sequelize** ORM. This system enables user registration, login, patient and doctor management, and patient-doctor mappings with secure JWT authentication.

---

## 🚀 Features

- User registration and login with JWT-based authentication.
- RESTful API endpoints for managing:
  - Patients
  - Doctors
  - Patient-Doctor mappings
- Secure access to protected routes.
- Sequelize ORM for PostgreSQL database modeling.
- Environment-based configuration using `dotenv`.
- Clean project structure with error handling and validations.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Authentication**: JWT (JSON Web Token)
- **Environment Management**: dotenv

---

## 🧾 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DB_NAME=your_healthcare-db
DB_USER=your_healthcare-user
DB_PASSWORD=your_healthcare-password
DB_PORT=5433
DB_HOST=your_localhost
PORT=3000
NODE_ENV=development
JWT_SECRET=your_healthcare-jwt-secret
JWT_EXPIRES_IN=1d
```

---

## 🔐 Authentication APIs

| Method | Endpoint            | Description                       |
|--------|---------------------|-----------------------------------|
| POST   | `/api/auth/register`| Register a new user               |
| POST   | `/api/auth/login`   | Login and receive a JWT token     |

---

## 👤 Patient Management APIs

| Method | Endpoint             | Description                          |
|--------|----------------------|--------------------------------------|
| POST   | `/api/patients`      | Add a new patient (Auth required)    |
| GET    | `/api/patients`      | Get all patients for user            |
| GET    | `/api/patients/:id`  | Get patient by ID                    |
| PUT    | `/api/patients/:id`  | Update patient by ID                 |
| DELETE | `/api/patients/:id`  | Delete patient by ID                 |

---

## 👨‍⚕️ Doctor Management APIs

| Method | Endpoint             | Description                       |
|--------|----------------------|-----------------------------------|
| POST   | `/api/doctors`       | Add a new doctor (Auth required)  |
| GET    | `/api/doctors`       | Retrieve all doctors              |
| GET    | `/api/doctors/:id`   | Get doctor by ID                  |
| PUT    | `/api/doctors/:id`   | Update doctor by ID               |
| DELETE | `/api/doctors/:id`   | Delete doctor by ID               |

---

## 🔗 Patient-Doctor Mapping APIs

| Method | Endpoint                     | Description                                |
|--------|------------------------------|--------------------------------------------|
| POST   | `/api/mappings`              | Assign a doctor to a patient               |
| GET    | `/api/mappings`              | Retrieve all patient-doctor mappings       |
| GET    | `/api/mappings/:patientId`   | Get all doctors for a specific patient     |
| DELETE | `/api/mappings/:id`          | Remove a doctor from a patient             |

---

## 🧪 Testing

Use [Postman](https://www.postman.com/) or any REST API client to test the endpoints. Make sure to include the JWT token in the `Authorization` header for protected routes.




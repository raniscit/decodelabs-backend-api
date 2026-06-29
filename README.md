# User Management Backend API

## Project Overview

This project is a simple RESTful Backend API built using **Node.js** and **Express.js** as part of the **DecodeLabs Full Stack Development Training - Project 2**.

The API manages user data and demonstrates the implementation of CRUD operations, input validation, proper HTTP status codes, RESTful architecture, and centralized error handling.

---

## Features

* RESTful API Design
* CRUD Operations (Create, Read, Update, Delete)
* JSON Request and Response
* Input Validation (Syntactic & Semantic)
* Global Error Handling Middleware
* Proper HTTP Status Codes
* Clean Folder Structure
* Express Router
* Middleware-based Request Handling

---

## Tech Stack

* Node.js
* Express.js
* JavaScript (ES6)
* Postman (API Testing)
* dotenv
* cors

---

## Folder Structure

```text
backend-api/
│
├── controllers/
│     userController.js
│
├── routes/
│     userRoutes.js
│
├── middleware/
│     validation.js
│     errorHandler.js
│
├── data/
│     users.js
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

---

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project

```bash
cd backend-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a .env file

```env
PORT=5000
```

### 5. Start the server

```bash
npm run dev
```

Server will start at:

```
http://localhost:5000
```

---

# API Endpoints

## 1. Get All Users

**GET**

```
/users
```

Returns all users.

**Success Response**

* Status Code: **200 OK**

---

## 2. Get User by ID

**GET**

```
/users/:id
```

Returns a single user by ID.

**Success Response**

* Status Code: **200 OK**

**Error Response**

* Status Code: **404 Not Found**

---

## 3. Create User

**POST**

```
/users
```

### Request Body

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 24
}
```

**Success Response**

* Status Code: **201 Created**

**Error Response**

* Status Code: **400 Bad Request**

---

## 4. Update User

**PUT**

```
/users/:id
```

Updates an existing user.

**Success Response**

* Status Code: **200 OK**

**Error Response**

* Status Code: **404 Not Found**

---

## 5. Delete User

**DELETE**

```
/users/:id
```

Deletes a user by ID.

**Success Response**

* Status Code: **200 OK**

**Error Response**

* Status Code: **404 Not Found**

---

# Validation

The API performs validation before processing user data.

### Syntactic Validation

* Required fields
* Valid email format
* Name should be a string
* Age should be a number

### Semantic Validation

* Email must be unique
* Age must be greater than 0

---

# HTTP Status Codes Used

| Status Code | Description           |
| ----------- | --------------------- |
| 200         | OK                    |
| 201         | Created               |
| 400         | Bad Request           |
| 404         | Not Found             |
| 500         | Internal Server Error |

---

# Error Handling

The project uses a centralized **Global Error Handler Middleware** to provide consistent JSON error responses across all API endpoints.

---

# Testing

All endpoints were tested using **Postman**.

---

# Learning Outcomes

Through this project, I learned:

* Building RESTful APIs using Express.js
* Creating CRUD operations
* Request validation
* Middleware usage
* Global error handling
* Proper HTTP status codes
* Express Router
* Organizing backend projects using MVC-like folder structure

---

# Author

**Shivangi**

Project developed as part of **DecodeLabs Full Stack Development Training – Project 2**.

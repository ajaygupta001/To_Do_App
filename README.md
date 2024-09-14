# To_Do_App

# To-Do List App

This is a simple **To-Do List Application** built using **Node.js** and **Express.js** for managing tasks. Users can create, view, update, and delete tasks efficiently.

## Features

- User Authentication (Register & Login)
- JWT-Based Token Authentication
- Add New Tasks
- Edit Existing Tasks
- Delete Tasks
- View All Tasks

## Technologies Used

- **Node.js** - Backend
- **Express.js** - Web framework for Node.js
- **MongoDB** - Database for storing tasks and user details
- **Mongoose** - ODM for MongoDB
- **bcrypt.js** - For password hashing
- **jsonwebtoken** - For JWT Token generation and verification

  
## Installation

### Prerequisites
- **Node.js** (version 14.x or higher)
- **MongoDB** (running locally or using MongoDB Atlas)

### Steps:

1. Clone the repository
    ```bash
    git clone https://github.com/ajaygupta001/To_Do_App.git
    ```

2. Navigate to the project directory
    ```bash
    cd To-Do-List-App
    ```

3. Install all dependencies
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory with the following variables:
    ```
    JWT_SECRET=your_jwt_secret_key
    MONGO_URI=your_mongo_db_connection_string
    ```

5. Start the server
    ```bash
    npm start
    ```

6. Open your browser and go to `http://localhost:3000`

## API Endpoints

### Authentication

- **Register**
    ```
    POST /auth/register
    ```

    Request Body:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password123"
    }
    ```

- **Login**
    ```
    POST /auth/login
    ```

    Request Body:
    ```json
    {
      "email": "john@example.com",
      "password": "password123"
    }
    ```

### To-Do Tasks

- **Get all tasks**
    ```
    GET /tasks
    ```

- **Create new task**
    ```
    POST /tasks
    ```

    Request Body:
    ```json
    {
      "title": "Buy groceries",
      "description": "Milk, Bread, Butter"
    }
    ```

- **Update task**
    ```
    PUT /tasks/:id
    ```

    Request Body:
    ```json
    {
      "title": "Buy groceries - updated",
      "description": "Milk, Bread, Butter, Eggs"
    }
    ```

- **Delete task**
    ```
    DELETE /tasks/:id
    ```

## Usage

1. Register a new user
2. Login using the registered credentials
3. Create, view, update, and delete tasks after successful login

## Contributing

Feel free to submit pull requests and issues. For major changes, please open an issue first to discuss what you would like to change.



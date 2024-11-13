# To-Do List Project

This To-Do List project is a simple web application that allows users to create, read, update, and delete tasks. It supports task management with various features such as filtering tasks by name or status, and marking tasks as complete or incomplete.



## Demo

- **Frontend**: [https://todolist-web-portfolio.netlify.app/](https://todolist-web-portfolio.netlify.app/)
- **Backend**: [https://todo-list-app-production-240e.up.railway.app](https://todo-list-app-production-240e.up.railway.app)

## Screenshot
<img src="https://i.ibb.co.com/XzxnByb/Frame-2.png" alt="Screenshot" border="0">

---

## Key Features
- Add new tasks
- View the list of tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as complete or incomplete
- Filter tasks by name or status

---

## Technologies Used

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **Modular CSS**: For scoped and modularized CSS styling.
- **Vite**: A fast build tool for modern web development.

### Backend
- **Express.js**: A minimal web framework for Node.js used to build APIs.
- **MySQL**: A relational database management system for data storage.

---

## Installation

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/todo-list.git
    cd todo-list
    ```

2. Install the backend dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Set up the **MySQL** database:
   - Create a new database in MySQL (e.g., `todo`).
   - Create a `.env` file in the `backend` directory and configure it with your database credentials:
    ```bash
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=todo
    ```

4. Manually create the `tasks` table in your MySQL database by running the following SQL script:

    ```sql
    CREATE TABLE tasks (
        id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
        task_name VARCHAR(255) NOT NULL,
        completed TINYINT(1) DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
    ```

    - `id`: The unique identifier for each task, which is automatically incremented.
    - `task_name`: A string field for the task name, which is required.
    - `completed`: A tiny integer (0 or 1) to indicate whether the task is complete (0 = not completed, 1 = completed).
    - `created_at`: Stores the timestamp when the task was created.
    - `updated_at`: Automatically updates the timestamp when the task is modified.

5. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

---

## API Endpoints

The backend provides the following API endpoints (hosted on Railway at `https://todo-list-app-production-240e.up.railway.app`):

- **GET** `/api/tasks`: Fetch all tasks.
- **POST** `/api/tasks`: Create a new task.
- **GET** `/api/tasks/:id`: Fetch a single task by ID.
- **PUT** `/api/tasks/:id`: Update a task by ID.
- **PATCH** `/api/tasks/:id`: Update the status of a task by ID.
- **DELETE** `/api/tasks/:id`: Delete a task by ID.
- **PATCH** `/api/tasks/completed`: Mark all tasks as complete.

---

## Running the Project

1. Start both the frontend and backend servers as described above.
2. Open your browser and go to `http://localhost:5173` (or the port Vite is using) to access the application.

---

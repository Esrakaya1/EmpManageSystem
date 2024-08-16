# Employee Management System 
This is a simple employee management system that allows employers to manage their employees' basic information. The system enables users to view, add, update, and delete employee records. It is built using .NET Core for the backend and React.js for the frontend.
## Features
* View Employees: Displays a list of employees with their name, age, and department.
* Add Employee: Allows users to add a new employee to the system.
* Update Employee: Users can update an existing employee's information.
* Delete Employee: Users can remove an employee from the system.

## Technologies Used
* Backend: .NET Core 7
* Frontend: React.js
* Database: In-memory database using List<Employee>
* Tools: Visual Studio, Visual Studio Code, Postman
  
## Installation
1. Backend setup
   * Open the EmployeeManagement folder in Visual Studio or Visual Studio Code.
   * Restore the required packages:
     ```
     dotnet restore
     ```
   * Build the project:
     ```
     dotnet build
     ```

2. Frontend Setup
   * Navigate to the client-app directory:
     ```
     cd employee-management-react
     ```
   * Install the necessary npm packages:
     ```
     npm install
     ```
## Running the Application
1. Start the Backend Server:
   * In Visual Studio or Visual Studio Code, run the project:
   ```
   dotnet run
   ```
   * The backend API will be available at http://localhost:5215/swagger.
2. Start the Frontend:
   * In the employee-management-react directory, start the React application:
     ```
     npm start
     ```
   * The React app will open in your default browser at http://localhost:3000.
     
## API Endpoints
* GET /api/Employees - Retrieve a list of all employees.
* POST /api/Employees - Add a new employee.
* PUT /api/Employees/{id} - Update an existing employee.
* DELETE /api/Employees/{id} - Delete an employee.
  
## Screenshots
*Project overview

![Ekran görüntüsü 2024-08-16 105010](https://github.com/user-attachments/assets/6db8387f-e508-4912-a32a-0e9ddef3f8d3)

![Ekran görüntüsü 2024-08-16 105046](https://github.com/user-attachments/assets/c11650f0-c7de-441c-8e65-3525fcba4e05)

![Ekran görüntüsü 2024-08-16 105105](https://github.com/user-attachments/assets/f67a7837-5e3d-425f-a151-a33e419857f7)



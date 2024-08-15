import React from "react";
import EmployeeList from "./components/EmployeeList/employeeList";
import EmployeeForm from "./components/EmployeeForm/employeeForm";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="title">Employee Management System</h1>
      <EmployeeForm />
      <EmployeeList />
    </div>
  );
}
export default App;

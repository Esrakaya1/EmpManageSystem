import React, { useState } from "react";
import "./employeeForm.css";

function EmployeeForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5215/api/Employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, age: parseInt(age), department }),
    }).then((response) => {
      if (response.ok) {
        alert("Employee added successfully!");
        setName("");
        setAge("");
        setDepartment("");
      } else {
        alert("Failed to add employee.");
      }
    });
  };

  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
        />
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          placeholder="Department"
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default EmployeeForm;

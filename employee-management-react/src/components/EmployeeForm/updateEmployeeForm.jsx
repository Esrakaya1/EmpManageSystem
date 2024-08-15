import React, { useState } from "react";
import "./updateEmployeeForm.css";

const UpdateEmployeeForm = ({ employee, onUpdate, onCancel }) => {
  const [name, setName] = useState(employee.name);
  const [age, setAge] = useState(employee.age);
  const [department, setDepartment] = useState(employee.department);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEmployee = { ...employee, name, age, department };
    onUpdate(updatedEmployee);
  };

  return (
    <form className="update-employee-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="department">Department:</label>
        <input
          type="text"
          id="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </div>
      <div className="button-group">
        <button type="submit" className="update-button">
          Update
        </button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UpdateEmployeeForm;

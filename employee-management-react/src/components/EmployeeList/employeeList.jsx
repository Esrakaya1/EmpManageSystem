import React, { useState, useEffect } from "react";
import UpdateEmployeeForm from "../EmployeeForm/updateEmployeeForm";
import "./employeeList.css";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5215/api/Employees")
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error("Error fetching employees:", error));
    console.log("Employees state updated:", employees);
  }, [employees]);

  const handleUpdate = async (updatedEmployee) => {
    try {
      const response = await fetch(
        `http://localhost:5215/api/Employees/${updatedEmployee.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedEmployee),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // State'i güncelle.
      setEmployees((prevEmployees) =>
        prevEmployees.map((emp) => (emp.Id === data.id ? data : emp))
      );

      // Güncellenmiş çalışanı logla.
      console.log("Güncellenmiş Employees:", employees);
      // UI'de formu kapatıyoruz.
      setEditingEmployee(null);
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5215/api/Employees/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setEmployees(employees.filter((emp) => emp.Id !== id));
      })
      .catch((error) => console.error("Error deleting employee:", error));
  };

  return (
    <div className="container">
      <h2 className="employee-list-header">Employee List</h2>
      <div className="employee-list">
        {editingEmployee ? (
          <UpdateEmployeeForm
            employee={editingEmployee}
            onUpdate={handleUpdate}
            onCancel={() => setEditingEmployee(null)}
          />
        ) : (
          employees.map((employee) => (
            <div key={employee.Id} className="employee-item">
              <span>
                {employee.name} - {employee.age} - {employee.department}
              </span>
              <button
                className="update-button"
                onClick={() => setEditingEmployee(employee)}
              >
                Update
              </button>
              <button
                className="delete-button"
                onClick={() => handleDelete(employee.id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EmployeeList;

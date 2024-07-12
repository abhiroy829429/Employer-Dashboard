import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeCard = ({ employee, onDelete }) => {
  return (
    <div className="employee-card">
      <h3>{employee.employee_name}</h3>
      <p>Salary: {employee.employee_salary}</p>
      <p>Age: {employee.employee_age}</p>
      <div className="card-buttons">
        <button onClick={() => onDelete(employee.id)}>Delete</button>
        <button>Edit</button>
        <Link to={`/employee/${employee.id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default EmployeeCard;

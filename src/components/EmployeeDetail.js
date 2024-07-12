import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EmployeeDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetch(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
      .then(response => response.json())
      .then(data => setEmployee(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <div className="employee-detail">
      <h2>{employee.employee_name}</h2>
      <p>Salary: {employee.employee_salary}</p>
      <p>Age: {employee.employee_age}</p>
      <img src={employee.profile_image} alt={`${employee.employee_name}'s profile`} />
    </div>
  );
};

export default EmployeeDetail;

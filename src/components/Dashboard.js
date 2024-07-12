import React, { useState, useEffect } from 'react';
import EmployeeCard from './EmployeeCard';
// import './Dashboard.css';

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [searchId, setSearchId] = useState('');

  useEffect(() => {
    fetch('https://dummy.restapiexample.com/api/v1/employees')
      .then(response => response.json())
      .then(data => setEmployees(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = () => {
    if (searchId) {
      const filteredEmployees = employees.filter(emp => emp.id === parseInt(searchId));
      setEmployees(filteredEmployees);
    }
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  return (
    <div className="dashboard">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="employee-list">
        {employees.map(emp => (
          <EmployeeCard key={emp.id} employee={emp} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

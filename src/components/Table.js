import React, { useState, useEffect } from 'react';

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7777/employee')
      .then(res => res.json())
      .then(data => setEmployees(data))
      .catch(err => console.log(err));
  }, []);

  const handleEditClick = (index) => {
    // Logic to handle edit click for the row at the specified index
    console.log(`Editing employee at index ${index}`);
  }

  const handleDeleteClick = (index) => {
    // Logic to handle delete click for the row at the specified index
    console.log(`Deleting employee at index ${index}`);
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.age}</td>
            <td><button onClick={() => handleEditClick(index)}>Edit</button></td>
            <td><button onClick={() => handleDeleteClick(index)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;

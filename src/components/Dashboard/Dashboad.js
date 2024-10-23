import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Twój Dashboard</h1>
      <ul>
        <li><Link to="/module1">Moduł 1</Link></li>
        <li><Link to="/module2">Moduł 2</Link></li>
        <li><Link to="/module3">Moduł 3</Link></li>
      </ul>
      <p>Wybierz moduł, aby zobaczyć szczegóły.</p>
    </div>
  );
};

export default Dashboard;
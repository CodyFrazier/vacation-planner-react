import React from 'react';
import moment from 'moment';
import axios from 'axios';
import CreateVacation from './CreateVacation.js';
import Vacations from './Vacations.js';
import './App.css';

const API = 'https://acme-users-api-rev.herokuapp.com/api';

function App() {
  return (
    <div className="App">
		<CreateVacation />
		<Vacations />
    </div>
  );
}

export default App;

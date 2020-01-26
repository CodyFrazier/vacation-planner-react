import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import CreateVacation from './CreateVacation.js';
import Vacations from './Vacations.js';
import './App.css';
import CBPattern from './cherryBlossomPattern.png';

const API = 'https://acme-users-api-rev.herokuapp.com/api';

const fetchUser = async () => {
	const storage = window.localStorage;
	const userId = storage.getItem('userId');
	if(userId){
		try {
			return (await axios.get(`${ API }/users/detail/${ userId }`)).data;
		} catch(ex){
			storage.removeItem('userId');
			return fetchUser();
		}
	}
	const user = (await axios.get(`${ API }/users/random`)).data;
	storage.setItem('userId', user.id);
	return user;
}

function App() {
	const [user, setUser] = useState(fetchUser());
	console.log('user:', user);
	const [vacationList, setVacations] = useState([{startDate : '1/10/22', endDate : '3/4/22'}, {startDate : '9/4/24', endDate : '10/7/24'}]);
	//user.then(user => console.log(user.fullName)) //Here's an example of how to get at this data.
	
  return (
    <div className="App">
		<h3>[name]'s Planned Vacations</h3>
		<CreateVacation />
		<h3>Upcoming Vacations ({ vacationList.length })</h3>
		<Vacations vacationList = { vacationList } setVacations = { setVacations }/>
    </div>
  );
}

export default App;

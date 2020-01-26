import React from 'react';
import moment from 'moment';

function Vacations({vacationList, setVacations}){
	return (
		<ul>{
			vacationList.map((vacation, idx) => {
				return (
					<li key = { idx }>
						<div>Starts: { moment(vacation.startDate).format('ddd Do MMMM YYYY') }</div>
						<div>Ends: { moment(vacation.endDate).format('ddd Do MMMM YYYY') }</div>
						<div>{ moment(vacation.endDate).diff(vacation.startDate, 'days') } days long</div>
					</li>
				)
			})
		}</ul>
	)
}

export default Vacations;
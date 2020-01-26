import React from 'react';

function CreateVacation(){
	return ( 
		<form onSubmit = {(event) => { event.preventDefault() }}>
			<strong>Start Date:</strong><input type = 'date'/>
			<strong>End Date:</strong><input type = 'date'/>
			<input type = 'submit' value = 'Add New Vacation'/>
		</form>
	)
}

export default CreateVacation;
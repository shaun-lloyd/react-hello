import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
	if (user) {
		return <h1>Hello, {formatName(user)}!</h1>;  
	}
	return <h1>Hello, Stranger.</h1>;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
	getGreeting()
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
